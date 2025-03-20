'use client';

import PrimaryButton from '@/shared/PrimaryButton';
import './style.css';
import {FC, MouseEventHandler, type HTMLAttributes} from 'react';

interface CardButtonProps extends HTMLAttributes<HTMLButtonElement> {
    isFilled: boolean;
}

const CardButton: FC<CardButtonProps> = ({
  className,
  children,
  onClick,
  isFilled,
  ...props
}) => {
  return (
    <PrimaryButton {...props} bgFilled={isFilled} className={className} onClick={onClick}>
      {children}
    </PrimaryButton>
  );
};

export default CardButton;
