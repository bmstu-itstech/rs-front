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
  hasOrangeShadow = false,
  hasBg = true,
  className,
  isDvh = false,
  ...props
}) => {
  return (
    <div
      id={id}
      className={` relative w-dvw
      ${
        hasShadowBetween &&
        'after:absolute after:-z-10 after:top-full after:w-full after:left-0 after:h-[6dvh] not-last:after:bg-linear-to-b after:from-[rgba(0,0,0,0.6)] after:via-50% after:via-black after:to-[rgba(0,0,0,0.6)] after:to-100%'
      } ${
        hasOrangeShadow &&
        'md:after:absolute after:-z-10 after:top-0 after:w-full after:left-0 after:h-full after:bg-linear-to-t after:from-main-orange-50 after:to-60% after:to-transparent '
      }  min-w-full select-none ${
        isDvh ? 'h-dvh min-h-full' : 'h-full min-h-dvh'
      } `}
      {...props}>
      {hasBg && (
        <img
          src={background}
          alt='bg'
          className={` ${
            isShadowedBack && 'brightness-25'
          } w-full h-full object-cover object-center -z-10 absolute top-0 left-0  min-h-full min-w-full`}
        />
      )}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <div
        className={`${className}  px-12 lg:px-60 pt-[3dvh] flex flex-col gap-16 h-full w-full`}>
=======
      <div className={`${className}  px-12 lg:px-60 min-w-[15px] pl-[15px] pr-[15px] pt-[3dvh] flex flex-col gap-16 h-full w-full`}>
>>>>>>> 0e7b3a6 (промежуточные фиксы багов верстки)
=======
      <div className={`${className}  px-12 2xl:px-60 min-w-[15px] pl-[15px] pr-[15px] pt-[3dvh] flex flex-col gap-16 h-full w-full`}>
>>>>>>> 73b47f1 ([feat] fixed paddings in news)
=======
      <div className={`${className}  px-12 md:px-60 min-w-[15px] pl-[15px] pr-[15px] pt-[3dvh] flex flex-col gap-16 h-full w-full`}>
>>>>>>> c63db80 ([feat] re-fixed news displaying)
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
