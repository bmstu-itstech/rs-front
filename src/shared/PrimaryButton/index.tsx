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
      className={`select-none hover:bg-main-orange py-6 px-34 rounded-6xl w-auto md:w-fit cursor-pointer transition-all duration-300  border-2 border-main-orange ${className}`}
      {...props}
      onClick={onClick}>
      <div className='caption uppercase'>{children}</div>
    </button>
  );
};

PrimaryButton.displayName = 'PrimaryButton';

export default PrimaryButton;
