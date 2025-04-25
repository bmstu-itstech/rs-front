'use client';
import type {FC} from 'react';
import Props from './Offcanvas.props';
import React, {useState, useRef, useEffect, useCallback} from 'react';
import {Divider} from '@/features/Achievement/components/Divider';

export const Offcanvas: FC<Props> = ({
  isOpenedObject,
  hasOverlayShadowing = false,
  isClosedObject,
  className,
  children,
}) => {
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
      <button onClick={toggleMenu} className={`${className}`}>
        {isClosedObject && isOpenedObject ? <SwitchableIcon isOpen={isOpen} /> : isClosedObject}
      </button>
      {hasOverlayShadowing && isOpen && (
        <div className='absolute top-0 left-0 h-dvh w-full inset-0 bg-black/50  z-0 transition-opacity duration-300' />
      )}
      <div
        ref={menuRef}
        className={` absolute top-0 right-0 ${
          isOpen ? 'animate-appear' : ' animate-disappear invisible'
        } transition-all  w-dvw lg:min-w-[50rem]  lg:w-auto justify-end
         max-h-dvh flex items-center lg:items-stretch
            bg-main-orange lg:bg-transparent 
              `}>
        {children}
      </div>
    </>
  );
};
