'use client';

import './style.css';
import {FC, useEffect, useState} from 'react';
import {LogoList} from '@/features';
import {Props} from './Navbar.props';
import {OffcanvasMenu} from '@/features/OffcanvasMenu';

const Navbar: FC<Props> = ({className, ...props}) => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      setOpacity(window.scrollY > 0 ? 0 : 1);
      console.log('scrollY ', window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className={`${className ?? ''} w-full pt-12 fixed z-10 top-0 left-0`} {...props}>
      <div
        className='transition-opacity duration-300 flex justify-between max-w-800 w-full mx-auto px-12 lg:px-60'
        style={{opacity: opacity}}>
        <LogoList />
        <OffcanvasMenu className='ml-auto' />
      </div>
    </header>
  );
};

Navbar.displayName = 'Navbar';

export default Navbar;
