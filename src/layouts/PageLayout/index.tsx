import {FC} from 'react';
import Props from './PageLayout.props';
import background_default from '@/assets/background_original.jpeg';
import Image from 'next/image';

export const PageLayout: FC<Props> = ({
  title,
  children,
  id,
  titleClassname,
  background = background_default.src,
  isShadowedBack = true,
  hasShadowBetween = false,
  hasOrangeShadow = false,
  hasBg = true,
  className,
  isDvh = false,
  ...props
}) => {
  return (
    <div
      id={id}
      className={`relative w-full snap-start
      ${
        hasShadowBetween &&
        'after:absolute after:z-10 after:top-full after:w-full after:left-0 after:h-[3dvh] not-last:after:bg-linear-to-b after:from-[rgba(0,0,0,0.6)] after:via-50% after:via-black after:to-[rgba(0,0,0,0.6)] after:to-100%'
      } 
      ${
        hasOrangeShadow &&
        'after:absolute after:-z-10 after:top-0 after:w-full after:left-0 after:h-full after:bg-linear-to-t after:from-main-orange-50 after:to-60% after:to-transparent '
      }  min-w-full 
      ${isDvh ? 'h-dvh min-h-full' : 'h-full min-h-dvh'} `}
      {...props}>
      {hasBg && (
        <Image
          width={800}
          height={800}
          src={background}
          alt='bg'
          className={` ${
            isShadowedBack && 'brightness-25'
          } w-full h-full object-cover object-center -z-10 absolute top-0 left-0  min-h-full min-w-full`}
        />
      )}

      <div
        className={`${
          className ? className : ''
        } px-12 md:px-28 lg:px-20 xl:px-60 pt-[3dvh] flex flex-col gap-16 h-full w-full mx-auto max-w-800`}>
        {title && (
          <p
            className={`lg:text-9xl font-bold text-7xl leading-normal text-center select-none uppercase ${
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
