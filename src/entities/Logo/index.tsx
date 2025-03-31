import {FC, MouseEventHandler} from 'react';
import Image from 'next/image';
import style from './Logo.module.css';

interface LogoProps {
  src: string;
  alt: string;
  onClick?: MouseEventHandler<HTMLImageElement>;
}

const Logo: FC<LogoProps> = ({src, alt, onClick}) => {
  return (
    <Image
      className={style.logo}
      src={src}
      alt={alt}
      onClick={onClick}
      width={60}
      height={60}
    />
  );
};

Logo.displayName = 'Logo';

export default Logo;
