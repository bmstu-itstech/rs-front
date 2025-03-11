'use client';

import './style.css';
import {FC, useEffect, useState} from 'react';
import {LogoList} from '@/features';
import Props from './Navbar.props';

const Navbar: FC<Props> = ({className, ...props}) => {
  const [opacity, setOpacity] = useState('1');

  useEffect(() => {
    window.onscroll = () => {
      setOpacity(window.scrollY > 0 ? '0' : '1');
    };
  }, []);

  return (
    <div
      className={`${
        className ?? ''
      } w-full flex items-center justify-start md:px-60 mt-12 px-12 absolute z-[100] top-0 left-0`}
      {...props}>
      <div className='transition-opacity duration-300' style={{opacity}}>
        <LogoList />
      </div>
    </div>
  );
};

Navbar.displayName = 'Navbar';

export default Navbar;
