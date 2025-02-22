import Image from 'next/image';
import {Props} from './MenuIcon.props';
import type {FC} from 'react';
import icon from '@/assets/menu_icon.svg';

const MenuIcon: FC<Props> = ({className, ...props}) => {
  return <Image alt='MenuIcon' className={className} src={icon} {...props} />;
};

export default MenuIcon;
