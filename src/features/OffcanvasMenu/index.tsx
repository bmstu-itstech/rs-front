import type {FC} from 'react';
import Props from './OffcanvasMenu.props';
import {CloseMenuButton} from '@/shared/CloseMenuButton';
import {MenuButton} from '@/shared/MenuButton';
import React, {useState} from 'react';
import {MenuUsecase} from './OffcanvasMenu.usecase';

export const OffcanvasMenu: FC<Props> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button
        onClick={toggleMenu}
        className='p-2 bg-blue-500 text-white rounded border border-0'>
        {isOpen ? <CloseMenuButton /> : <MenuButton />}
      </button>
      {isOpen && (
        <div className='fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-4'>
          <nav>
            <ul className='space-y-2'>
              {MenuUsecase.map((item, index) => {
                return (
                  <li key={item.id}>
                    <a href={item.href} className='text-red-500'>
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};
