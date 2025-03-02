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
  const menuRef = useRef<HTMLDivElement>(null); // Создаем ref для меню
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  // Обработчик клика вне меню
  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    // Добавляем обработчик события клика
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      // Убираем обработчик события при размонтировании компонента
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <>
      <button
        onClick={toggleMenu}
        className='p-2 cursor-pointer text-white rounded z-1000 bg-transparent fixed top-12 right-40 translate-x-1/2'>
        {isOpen ? <CloseMenuButton /> : <MenuButton />}
      </button>
      <div
        ref={menuRef} // Привязываем ref к контейнеру меню
        className={`absolute top-0 right-0 z-30 ${
          isOpen ? 'animate-apper' : 'translate-x-full animate-disappear'
        } transition-all duration-300 !pr-40 h-full max-h-dvh flex top-1/6 bg-transparent shadow-lg`}>
        <nav className='flex min-h-1/2 h-1/2'>
          <ul className='flex flex-col justify-around w-fit'>
            {MenuUsecase.map(item => {
              return (
                <li
                  key={item.id}
                  className='w-full justify-end items-center text-right flex menu-el'>
                  <a
                    href={item.href}
                    className='text-white text-7xl align-super transform-all duration-300'>
                    {item.title}
                  </a>
                  <div className='w-[5rem] bg-transparent ' />
                  <div className='flex items-center w-fit relative'>
                    <div className='rounded-full w-10 aspect-square bg-white opacity-0 absolute left-0 -translate-x-1/2 duration-300 dot' />
                    <div className='w-[5rem] bg-white rounded-2xl rounded-r-none h-2 ' />
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
