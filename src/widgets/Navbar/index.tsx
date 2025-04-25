'use client';

import './style.css';
import {FC, useEffect, useState} from 'react';
import {LogoList} from '@/features';
import Props from './Navbar.props';
import {OffcanvasMenu} from '@/features/OffcanvasMenu';

const Navbar: FC<Props> = ({className, ...props}) => {
  const [opacity, setOpacity] = useState('1');

  useEffect(() => {
    window.onscroll = () => {
      setOpacity(window.scrollY > 0 ? '0' : '1');
    };
  }, []);

  return (
    <div
      className={`${className ?? ''} w-full lg:px-60 pt-12 px-12 fixed z-100 top-0 left-0`}
      {...props}>
      <div
        className='transition-opacity duration-300 flex justify-between w-full'
        style={{opacity}}>
        <LogoList />
        <OffcanvasMenu />
      </div>
    </div>
  );
};

Navbar.displayName = 'Navbar';

export default Navbar;
