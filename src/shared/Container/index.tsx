'use client';

import './style.css';
import {type FC} from 'react';
import {useEffect} from 'react';
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
  ...props
}) => {
  const mobile = useIsMobile();

  useEffect(() => {
    const element = document.getElementById(id) as HTMLElement;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        if (mobile) document.documentElement.style.overflowY = 'hidden';
        if (id === 'main') {
          requestAnimationFrame(() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });
          });
        } else {
          requestAnimationFrame(() => {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
            });
          });
        }
        setTimeout(
          () => (document.documentElement.style.overflowY = 'scroll'),
          700,
        );
      });
    }, {});
    observer.observe(element);
    return () => observer.disconnect();
  }, [id, mobile]);

  return (
    <PageLayout
      id={id}
      title={title}
      className={`${className}`}
      hasShadowBetween={hasShadowBetween}
      titleClassname={titleClassname}
      background={background}
      {...props}>
      {children}
    </PageLayout>
  );
};

Container.displayName = 'Container';

export default Container;
