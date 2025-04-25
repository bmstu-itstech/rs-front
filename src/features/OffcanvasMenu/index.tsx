'use client';
import './style.css';
import type {FC} from 'react';
import Props from './OffcanvasMenu.props';
import {CloseMenuButton} from '@/shared/CloseMenuButton';
import {MenuButton} from '@/shared/MenuButton';
import React from 'react';
import {MenuUsecase} from './OffcanvasMenu.usecase';
import {Offcanvas} from '@/layouts/OffcanvasLayout';
export const OffcanvasMenu: FC<Props> = () => {
  return (
    <Offcanvas
      hasOverlayShadowing
      isOpenedObject={<CloseMenuButton className='lg:w-24 lg:h-24 w-12 h-12' />}
      isClosedObject={<MenuButton className='lg:w-32 lg:h-24 w-24 h-12' />}
      className=' z-10 cursor-pointer text-white rounded  bg-transparent'>
      <nav className='flex h-[max(80dvh,65rem)] !pr-12 lg:!pr-48 lg:pt-52 '>
        <ul className='flex flex-col justify-around w-fit h-full'>
          {MenuUsecase.map((item, index) => {
            return (
              <li key={item.id} className='w-full justify-end items-center text-right flex menu-el'>
                <a
                  href={item.href}
                  className='text-white text-5xl lg:text-7xl align-super transition-transform duration-300'>
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
        <div className='h-[calc(75%+0.5rem)] self-center max-h-full w-2 bg-white rounded-l-none rounded-2xl grow'></div>
      </nav>
    </Offcanvas>
  );
};
