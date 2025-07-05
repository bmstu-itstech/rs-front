'use client';
import type {FC} from 'react';
import Props from './Offcanvas.props';
import React, {useRef, useEffect, useCallback, useState} from 'react';
import {createPortal} from 'react-dom';
import {OffcanvasProvider, useOffcanvas} from './OffcanvasContext';
const OffcanvasData: FC<Props> = ({
  icon,
  hasOverlayShadowing = false,
  className,
  hideIconOnOpen = false,
  children,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const {isOpen, setIsOpen} = useOffcanvas();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const openMenu = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (event.defaultPrevented) return;
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    },
    [setIsOpen],
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        menuRef.current?.classList.add('hidden');
      } else {
        menuRef.current?.classList.remove('hidden');
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [isOpen]);
  useEffect(() => {
    menuRef.current?.classList.add(' hidden ');
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);

  return (
    <>
      <button
        onClick={openMenu}
        className={`${isOpen && hideIconOnOpen ? 'hidden' : ''} ${className}`}>
        {icon}
      </button>
      {isMounted &&
        createPortal(
          <>
            {isOpen && hasOverlayShadowing && (
              <div className='absolute top-0 left-0 h-dvh w-full inset-0 bg-black/50 z-20 transition-opacity duration-300' />
            )}
            <div
              ref={menuRef}
              className={`absolute top-0 right-0 ${
                isOpen ? 'animate-appear ' : 'animate-disappear invisible '
              } transition-all w-dvw lg:min-w-[50rem] lg:w-auto justify-end
            max-h-dvh h-dvh flex items-center lg:items-stretch
            bg-main-orange lg:bg-transparent z-30
            `}>
              {children}
            </div>
          </>,
          document.body,
        )}
    </>
  );
};
export const Offcanvas: FC<Props> = ({children, ...props}) => {
  return (
    <OffcanvasProvider>
      <OffcanvasData {...props}>{children}</OffcanvasData>
    </OffcanvasProvider>
  );
};
