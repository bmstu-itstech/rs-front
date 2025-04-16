'use client';
import type {FC} from 'react';
import Props from './Offcanvas.props';
import React, {useState, useRef, useEffect, useCallback} from 'react';

export const Offcanvas: FC<Props> = ({isOpenedObject, isClosedObject, className, children}) => {
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

  const SwitchableIcon = useCallback(
    ({isOpen}: {isOpen: boolean}) => {
      return isOpen ? isOpenedObject : isClosedObject;
    },
    [isOpen],
  );

  return (
    <>
      <button
        onClick={toggleMenu}
        className='p-2 cursor-pointer text-white rounded z-1000 bg-transparent fixed top-16 lg:top-20 right-20 lg:right-52 translate-x-1/2'>
        {isClosedObject && isOpenedObject ? <SwitchableIcon isOpen={isOpen} /> : isClosedObject}
      </button>
      <div
        ref={menuRef}
        className={`${className} fixed top-0 right-0 ${
          isOpen ? 'animate-apper' : 'translate-x-full animate-disappear'
        } transition-all duration-300 z-200 w-dvw lg:w-auto justify-end
         !pr-12 lg:!pr-40 h-full max-h-dvh flex items-center lg:items-stretch
           lg:top-1/6 bg-main-orange lg:bg-transparent shadow-lg`}>
        {children}
      </div>
    </>
  );
};
