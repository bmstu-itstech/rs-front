import Props from './MenuButton.props';
import {FC} from 'react';
export const MenuButton: FC<Props> = () => {
  return (
    <svg
      width='86'
      height='46'
      viewBox='0 0 86 46'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path d='M3 3H83' stroke='white' strokeWidth='6' strokeLinecap='round' />
      <path
        d='M26 23L83 23'
        stroke='white'
        strokeWidth='6'
        strokeLinecap='round'
      />
      <path
        d='M46 43L83 43'
        stroke='white'
        strokeWidth='6'
        strokeLinecap='round'
      />
    </svg>
  );
};
