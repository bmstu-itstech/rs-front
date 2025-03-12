'use client';

import Props from './PrimaryButton.props';
import {FC} from 'react';

const PrimaryButton: FC<Props> = ({
  bgFilled = false,
  titleClassname,
  children,
  onClick,
  className,
  ...props
}) => {
  return (
    <button
      className={`select-none ${
        bgFilled
          ? 'bg-main-orange hover:bg-white  hover:text-main-orange'
          : 'bg-transparent hover:bg-main-orange border-2 border-main-orange'
      } py-5  lg:py-10 lg:px-34 rounded-6xl w-auto lg:w-fit cursor-pointer transition-all duration-300 text-3xl lg:text-5xl  ${className}`}
      {...props}
      onClick={onClick}>
      <p
        className={`uppercase w-full text-inherit text-center flex justify-center ${titleClassname}`}>
        {children}
      </p>
    </button>
  );
};

PrimaryButton.displayName = 'PrimaryButton';

export default PrimaryButton;
