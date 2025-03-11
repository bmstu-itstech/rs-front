import './style.css';
import {Logo} from '@/entities';
import {FC} from 'react';
import Link from 'next/link';
import Props from './LogoList.props';
import {data} from './LogoList.usecase';


const LogoList: FC<Props> = () => {
  return (
    <div className='gap-16 flex'>
      {data.map((item, index) => {
        return (
          <Link
            href={item.href}
            key={index}
            className='not-last:hidden md:not-last:block'>
            <Logo src={item.src} alt={item.alt} />
          </Link>
        );
      })}
    </div>
  );
};

LogoList.displayName = 'LogoList';

export default LogoList;
