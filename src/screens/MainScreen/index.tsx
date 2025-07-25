'use client';
import {Container, PrimaryButton} from '@/shared';
import background_main from '@/assets/main_background.png';
import TelegramIcon from '@/shared/TelegramIcon';
import VKIcon from '@/shared/VKIcon';
import React from 'react';
import Link from 'next/link';

const MainScreen = () => {
  return (
    <Container
      // title='Центр молодежной робототехники'
      hasShadowBetween
      background={background_main.src}
      // titleClassname='text-balance !text-8xl lg:!text-9xl font-bold lg:font-normal w-full md:!text-8xl md:text-center  md:max-w-4/5 md:mx-auto lg:mx-0 lg:text-start lg:text-left'
      className=' lg:font-normal lg:text-left md:pt-12 lg:pt-[10%] text-balance lg:pb-12 '
      id='main'>
      <div className='flex flex-col h-full justify-center lg:justify-between items-center w-full '>
        <div className='-mt-60 md:mt-60 lg:mt-0'>
          <h1 className='w-fit flex flex-col text-center mx-auto'>
            <span
              style={{animationDelay: '0s'}}
              className='animate-text-coloring text-white lg:text-8rxl text-5rxl md:text-8xl leading-[1.5] '>
              Центр
            </span>
            <div className='flex gap-8'>
              <span
                style={{animationDelay: '0.1s'}}
                className='animate-text-coloring text-white lg:text-8rxl text-5rxl md:text-8xl leading-[1.5]'>
                твоего
              </span>
              <span
                style={{animationDelay: '0.2s'}}
                className='animate-text-coloring text-white lg:text-8rxl text-5rxl md:text-8xl leading-[1.5]'>
                старта
              </span>
              <span
                style={{animationDelay: '0.3s'}}
                className='animate-text-coloring text-white lg:text-8rxl text-5rxl md:text-8xl leading-[1.5]'>
                в
              </span>
              <span
                style={{animationDelay: '0.4s'}}
                className='animate-text-coloring text-white lg:text-8rxl text-5rxl md:text-8xl leading-[1.5]'>
                мире
              </span>
            </div>
            <span
              style={{animationDelay: '0.5s'}}
              className=' text-logo-orange animate-text-coloring-highlighted  lg:text-8rxl text-5rxl md:text-8xl leading-[1.5]'>
              робототехники
            </span>
          </h1>
          <p
            className='animate-appearUp mt-48 text-center mx-auto w-fit lg:text-4xl text-4xl md:text-4xl'
            style={{animationDelay: '1s'}}>
            Центр молодежной робототехники МГТУ им. Н.Э. Баумана
          </p>
        </div>

        <div className='hidden lg:flex w-full justify-end items-center'>
          <Link href={'https://t.me/robotics_bmstu'}>
            <TelegramIcon className='me-12 cursor-pointer' />
          </Link>
          <Link href={'https://vk.com/robotics_bmstu?from=groups'}>
            <VKIcon className='cursor-pointer' />
          </Link>
        </div>
      </div>
    </Container>
  );
};

MainScreen.displayName = 'MainScreen';

export default React.memo(MainScreen);
