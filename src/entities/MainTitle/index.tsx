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
      <p className='text-uppercase max-w-full text-5xl line-clamp-1 text-center w-fit ms-auto md:text-8xl font-medium'>
        {children}
      </p>
      <div className='hidden md:block h-2.5 w-full bg-main-orange' />
    </div>
  );
};
MainTitle.displayName = 'MainTitle';
export default MainTitle;
