'use client';
import './style.css';
import type {FC} from 'react';
import Props from './OffcanvasMenu.props';
import {CloseMenuButton} from '@/shared/CloseMenuButton';
import {MenuButton} from '@/shared/MenuButton';
import React, {useState, useRef, useEffect} from 'react';
import {MenuUsecase} from './OffcanvasMenu.usecase';
export const OffcanvasMenu: FC<Props> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);
  return (
    <>
      <button
        onClick={toggleMenu}
        className='p-2 cursor-pointer text-white rounded z-1000 bg-transparent fixed top-16 md:top-20 right-20 md:right-60 translate-x-1/2'>
        {isOpen ? (
          <CloseMenuButton className='md:w-24 md:h-24 w-12 h-12' />
        ) : (
          <MenuButton className='md:w-32 md:h-24 w-24 h-12' />
        )}
      </button>
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 ${
          isOpen ? 'animate-apper' : 'translate-x-full animate-disappear'
        } transition-all duration-300 z-200 w-dvw md:w-auto justify-end !pr-12 md:!pr-40 h-full max-h-dvh flex items-center md:items-stretch  md:top-1/6 bg-main-orange lg:bg-transparent shadow-lg`}>
        <nav className='flex h-[clamp(50%,30vw,60%)] '>
          <ul className='flex flex-col justify-around w-fit'>
            {MenuUsecase.map((item, index) => {
              return (
                <li
                  key={item.id}
                  className='w-full justify-end items-center text-right flex menu-el'>
                  <a
                    href={item.href}
                    className='text-white text-5xl md:text-7xl align-super transform-all duration-300'>
                    {item.title}
                  </a>
                  <div className='w-[clamp(2rem,10vw,5rem)] bg-transparent ' />
                  <div className='flex items-center w-fit relative'>
                    <div className='rounded-full w-10 aspect-square bg-white opacity-0 absolute left-0 -translate-x-1/2 duration-300 dot' />
                    <div className='w-[clamp(2rem,10vw,5rem)] bg-white rounded-2xl rounded-r-none h-2 ' />
                  </div>
                </li>
              );
            })}
          </ul>
          <div className='h-[calc(75%+5px)] self-center max-h-full w-2 bg-white rounded-l-none rounded-2xl grow'></div>
        </nav>
      </div>
    </>
  );
};
