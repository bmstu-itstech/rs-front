import Image from 'next/image';
import {Props} from './BmstuLogo.props';
import type {FC} from 'react';
import icon from '@/assets/bmstu_logo.svg';

const BmstuLogo: FC<Props> = ({className, ...props}) => {
  return <Image width={98} alt='BmstuLogo' className={className} src={icon} {...props} />;
};

export default BmstuLogo;
