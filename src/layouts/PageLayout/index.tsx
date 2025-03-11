import {FC} from 'react';
import Props from './PageLayout.props';

export const PageLayout: FC<Props> = ({
  title,
  children,
  id,
  titleClassname,
  className,
  ...props
}) => {
  return (
    <div
      id={id}
      className={`${className} px-12 md:px-60 h-dvh flex flex-col gap-16 mt-[6dvh] pt-[9dvh] snap-start select-none `}
      {...props}>
      <p
        className={`text-6xl md:text-9xl font-bold md:font-normal leading-normal text-center select-none uppercase ${
          titleClassname ?? ''
        }`}>
        {title}
      </p>
      {children}
    </div>
  );
};
//   scroll-snap-align: start;
//   user-select: none;
//   scroll-snap-align: start;
//   overflow-anchor: none;

//       font-size: 8.2rem;
//   line-height: 1.2;
//   text-transform: uppercase;
//   text-align: center;
//   user-select: none;
