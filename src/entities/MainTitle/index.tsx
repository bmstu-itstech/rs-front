'use client';
import {FC, type HTMLAttributes} from 'react';
interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: string;
}
const MainTitle: FC<Props> = ({children, className, ...props}) => {
  return (
    <div
      className={`flex justify-center items-center flex-col max-w-full w-fit gap-2 ${
        className ?? ''
      }`}
      {...props}>
      <p className='text-uppercase max-w-full font-bold text-7xl line-clamp-2 text-center w-fit ms-auto lg:text-8xl lg:font-medium'>
        {children}
      </p>
      <div className='hidden lg:block h-2.5 w-full bg-main-orange' />
    </div>
  );
};
MainTitle.displayName = 'MainTitle';
export default MainTitle;
