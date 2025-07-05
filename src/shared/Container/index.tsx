'use client';
import {FC} from 'react';
import {PageLayout} from '@/layouts/PageLayout';
import {Props} from './Container.props';

const Container: FC<Props> = ({
  id,
  title,
  className,
  children,
  titleClassname,
  background,
  objectFit,
  hasShadowBetween,
  ...props
}) => {
  // const mobile = useIsMobile();

  // const [nextPreloaded, setNextPreloaded] = useState(false);

  // useEffect(() => {
  //   const element = document.getElementById(id);
  //   if (!element) return;

  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
          

  //         // requestAnimationFrame(() => {
  //         //   if (id === 'main') {
  //         //     window.scrollTo({top: 0, behavior: 'smooth'});
  //         //   } else {
  //         //     element.scrollIntoView({behavior: 'smooth', block: 'center'});
  //         //   }
  //         // });
  //       }
  //     },
  //     {threshold: 0},
  //   );

  //   observer.observe(element);
  //   return () => observer.disconnect();
  // }, [id, mobile, onBecomeVisible, nextPreloaded]);

  return (
    <PageLayout
      id={id}
      title={title}
      className={`${className}`}
      hasShadowBetween={hasShadowBetween}
      titleClassname={titleClassname}
      background={background}
      objectFit={objectFit}
      isDvh
      {...props}>
      {children}
    </PageLayout>
  );
};

Container.displayName = 'Container';
export default Container;
