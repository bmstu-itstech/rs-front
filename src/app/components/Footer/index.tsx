import type {FC} from 'react';
import Props from './Footer.props';

const Footer: FC<Props> = ({val, className, ...props}) => {
  return (
    <div
      className={`py-8 bg-orange_main w-full flex items-center justify-center text-3xl font-normal text-white ${className}`}
      {...props}>
      {val}
    </div>
  );
};

export default Footer;
