'use client';

import {FC, useEffect, useState, Suspense} from 'react';
import {useIsMobile} from '@/hooks';
import {PageLayout} from '@/layouts/PageLayout';
import Props from './Container.props';

const Container: FC<Props> = ({
  id,
  title,
  children,
  className,
  titleClassname,
  background,
  hasShadowBetween,
  LoadingScreen,
  ...props
}) => {
  const mobile = useIsMobile();
  const [shouldLoadContent, setShouldLoadContent] = useState(id === 'main');
  const [isIntersecting, setIsIntersecting] = useState(false);
  const SECTION_MAP = {
    main: '@/sections/MainSection',
    about: '@/sections/AboutSection',
    contacts: '@/sections/ContactsSection',
  };

  useEffect(() => {
    const element = document.getElementById(id);
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);

        if (entry.isIntersecting) {
          setShouldLoadContent(true);

          if (mobile) {
            document.documentElement.style.overflowY = 'hidden';
          }

          requestAnimationFrame(() => {
            if (id === 'main') {
              window.scrollTo({top: 0, behavior: 'smooth'});
            } else {
              element.scrollIntoView({behavior: 'smooth', block: 'center'});
            }
          });
        }
      },
      {
        threshold: 0,
      },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [id, mobile]);

  // Предзагрузка следующего экрана при приближении
  useEffect(() => {
    if (!isIntersecting) return;

    console.log(`Предзагрузка для секции ${id}`);

    // Динамически определяем следующую секцию
    const nextSection = {
      main: 'News',
      news: 'Achievements',
      achievements: 'Contacts',
      contacts: null,
    }[id];

    if (nextSection) {
      import(`@/screens/${nextSection.charAt(0).toUpperCase() + nextSection.slice(1)}Screen`)
        .then(() => console.log(`Секция ${nextSection} предзагружена`))
        .catch(console.error);
    }
  }, [isIntersecting, id]);

  return (
    <PageLayout
      id={id}
      title={title}
      className={className}
      hasShadowBetween={hasShadowBetween}
      titleClassname={titleClassname}
      background={background}
      isDvh
      {...props}>
      {shouldLoadContent ? (
        <Suspense fallback={LoadingScreen}>{children}</Suspense>
      ) : (
        <div style={{height: '100dvh'}} aria-hidden='true' />
      )}
    </PageLayout>
  );
};

Container.displayName = 'Container';

export default Container;
