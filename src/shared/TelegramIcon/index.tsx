import {type FC} from 'react';
import Image from 'next/image';
import Props from './TelegramIcon.props';
import src from '@/assets/icons/telegram.svg';

const TelegramIcon: FC<Props> = ({onClick = () => {}, className, ...props}) => {
  return (
    <Image
      src={src}
      className={` hover:opacity-80 size-24 ${className}`}
      {...props}
      alt='TelegramIcon'
      width={29}
      height={30}
      onClick={onClick}
    />
  );
};

TelegramIcon.displayName = 'TelegramIcon';

export default TelegramIcon;
