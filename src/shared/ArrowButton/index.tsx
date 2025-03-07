import './style.css';
import {type FC} from 'react';
import Image from 'next/image';
import Props from './ArrowButton.props';

const ArrowButton: FC<Props> = ({
  direction = 'right',
  onClick = () => {},
  className,
  ...props
}) => {
  return (
    <Image
      src='/icons/arrow-right.svg'
      className={`${
        direction == 'left' ? ' rotate-180' : ''
      } hover:opacity-80 bg-main-orange w-24 p-6 aspect-square rounded-full ${className}`}
      {...props}
      alt='arrowButton'
      width={29}
      height={30}
      onClick={onClick}
    />
  );
};

ArrowButton.displayName = 'ArrowButton';

export default ArrowButton;
