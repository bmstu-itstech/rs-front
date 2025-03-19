import './style.css';
import {Logo} from '@/entities';
import {FC} from 'react';
import Link from 'next/link';
import Props from './LogoList.props';
import {data} from './LogoList.usecase';
import {usePathname} from 'next/navigation';

const LogoList: FC<Props> = () => {
  const path = usePathname();
  return (
    <div className='gap-16 flex'>
      {data.map((item, index) => {
        return (
          <Link
            href={item.href}
            key={index}
            className={`not-last:hidden lg:not-last:block ${
              path != '/' && 'not-last:!hidden'
            }`}>
            <Logo src={item.src} alt={item.alt} />
          </Link>
        );
      })}
    </div>
  );
};

LogoList.displayName = 'LogoList';

export default LogoList;
