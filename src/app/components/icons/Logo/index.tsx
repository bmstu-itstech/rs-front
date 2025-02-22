'use client';
import {memo, type HTMLAttributes, type FC} from 'react';
import { useMobile } from '@/app/components/hooks'
import BmstuLogo from '../BmstuLogo';
import CrmLogo from '../CrmLogo';
import CrownLogo from '../CrownLogo';

type ILogoType = 'bmstu' | 'crown' | 'crm';

interface NameToCompProps extends HTMLAttributes<HTMLDivElement> {
  type: ILogoType;
}

const NameToComp: FC<NameToCompProps> = ({type, className, ...props}) => {
  switch (type) {
    case 'bmstu':
      return <BmstuLogo className={`${className}`} {...props} />;
    case 'crown':
      return <CrownLogo className={`${className}`} {...props} />;
    case 'crm':
      return <CrmLogo className={`${className}`} {...props} />;
    default:
      return null;
  }
};

interface Props extends HTMLAttributes<HTMLDivElement> {
  type: ILogoType;
}

const Logo: FC<Props> = ({type, className, ...props}) => {
  const mobile = useMobile();
  return (
    <NameToComp
      type={type}
      className={`${className} ${mobile ? 'scale-[0.5]' : 'scale-[0.8]'}`}
      {...props}
    />
  );
};

export default memo(Logo);
