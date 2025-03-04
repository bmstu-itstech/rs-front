'use client';

import Props from './PrimaryButton.props';
import {FC} from 'react';

const PrimaryButton: FC<Props> = ({
  bgFilled = false,
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
      }  py-10 px-34 rounded-6xl w-auto md:w-fit cursor-pointer transition-all duration-300 text-5xl  ${className}`}
      {...props}
      onClick={onClick}>
      <div className={`uppercase text-inherit `}>{children}</div>
    </button>
  );
};

PrimaryButton.displayName = 'PrimaryButton';

export default PrimaryButton;
