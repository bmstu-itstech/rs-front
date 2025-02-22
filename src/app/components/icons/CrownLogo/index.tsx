import Image from 'next/image';
import {Props} from './CrownLogo.props';
import type {FC} from 'react';
import icon from '@/assets/crown_logo.svg';

const CrownLogo: FC<Props> = ({className, ...props}) => {
  return <Image alt='CrownLogo' className={className} src={icon} {...props} />;
};

export default CrownLogo;
