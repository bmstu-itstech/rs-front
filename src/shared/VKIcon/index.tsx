import {type FC} from 'react';
import Image from 'next/image';
import { Props } from './VKIcon.props';
import src from '@/assets/icons/vk.svg';

const VKIcon: FC<Props> = ({className, ...props}) => {
  return (
    <Image
      src={src}
      className={` hover:opacity-80 size-24 duration-200 transition-all ${className}`}
      {...props}
      alt='VKIcon'
      width={29}
      height={30}
    />
  );
};

VKIcon.displayName = 'VKIcon';

export default VKIcon;
