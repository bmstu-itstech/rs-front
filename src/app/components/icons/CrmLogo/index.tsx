import Image from 'next/image';
import {Props} from './CrmLogo.props';
import type {FC} from 'react';
import icon from '@/assets/crm_logo.svg';

const CrmLogo: FC<Props> = ({className, ...props}) => {
  return <Image alt='CrmLogo' className={className} src={icon} {...props} />;
};

export default CrmLogo;
