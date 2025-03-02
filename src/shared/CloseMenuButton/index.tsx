import Props from './CloseMenuButton.props';
import {FC} from 'react';
export const CloseMenuButton: FC<Props> = () => {
  return (
    <svg
      width='50'
      height='50'
      viewBox='0 0 71 69'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <div className='w-3 h-3 bg-amber-600'></div>
      <path
        d='M4 63.5547L65.6016 2.99989'
        stroke='white'
        strokeWidth='6'
        strokeLinecap='round'
      />
      <path
        d='M5.39844 5.44531L67 66.0001'
        stroke='white'
        strokeWidth='6'
        strokeLinecap='round'
      />
    </svg>
  );
};
