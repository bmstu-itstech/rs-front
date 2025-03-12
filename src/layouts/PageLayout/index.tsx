import {FC} from 'react';
import Props from './PageLayout.props';
import background_default from '@/assets/background_original.jpeg';

export const PageLayout: FC<Props> = ({
  title,
  children,
  id,
  titleClassname,
  background = background_default.src,
  isShadowedBack = true,
  hasShadowBetween = false,
  className,
  ...props
}) => {
  return (
    <div
      id={id}
      className={` h-dvh relative w-dvw
      ${
        hasShadowBetween &&
        'after:absolute after:-z-10 after:top-full after:w-full after:left-0 after:h-[6dvh] not-last:after:bg-linear-to-b after:from-[rgba(0,0,0,0.6)] after:via-50% after:via-black after:to-[rgba(0,0,0,0.6)] after:to-100%'
      }   min-h-full min-w-full select-none `}
      {...props}>
      <img
        src={background}
        alt='bg'
        className={` ${
          isShadowedBack && 'brightness-20'
        } w-full h-full object-cover object-center -z-10  absolute top-0 left-0  min-h-full min-w-full`}
      />
      <div
        className={`${className}  px-12 lg:px-60 pt-[6dvh] flex flex-col gap-16 h-full w-full`}>
        {title && (
          <p
            className={`text-6xl lg:text-9xl font-bold lg:font-normal leading-normal text-center select-none uppercase ${
              titleClassname ?? ''
            }`}>
            {title}
          </p>
        )}

        {children}
      </div>
    </div>
  );
};
