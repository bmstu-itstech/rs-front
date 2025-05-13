'use client';

import {Container, PrimaryButton} from '@/shared';
import background_main from '@/assets/main_background.png';
import TelegramIcon from '@/shared/TelegramIcon';
import VKIcon from '@/shared/VKIcon';
import React from 'react';

const MainScreen = ({setPageToShow}: {setPageToShow: () => void}) => {
  // console.log('Я загрузил main');
  return (
    <Container
      title='Центр молодежной робототехники'
      hasShadowBetween
      background={background_main.src}
      titleClassname='text-balance !text-7xl lg:!text-9xl font-bold lg:font-normal w-full  lg:max-w-3/5 lg:text-left'
      className=' lg:font-normal lg:text-left  pt-[25%] lg:pt-[10%] text-balance lg:pb-12 '
      id='main'
      onBecomeVisible={setPageToShow}>
      <div className='flex  flex-col h-full justify-around gap-12 w-full '>
        <p className='leading-normal 2xl:max-w-4/5 text-balance xl:text-5xl text-4xl font-normal md:text-left text-center'>
          Центр Молодежной Робототехники - это инновационное пространство, предназначенное для
          обучения и развития молодых талантов в области робототехники, искусственного интеллекта и
          программирования. Наша миссия - предоставить молодежи возможность исследовать и создавать
          будущее с помощью передовых технологий и творчества. Присоединяйтесь к нам и откройте для
          себя мир будущего уже сегодня!
        </p>
        <div className='flex w-full justify-between items-center'>
          <PrimaryButton
            className='w-full'
            onClick={() => {
              const element = document.getElementById('news');
              element?.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
              });
            }}>
            Подробнее
          </PrimaryButton>
          <div className='hidden lg:flex'>
            <TelegramIcon className='me-12 cursor-pointer' />
            <VKIcon className='cursor-pointer' />
          </div>
        </div>
      </div>
    </Container>
  );
};

MainScreen.displayName = 'MainScreen';

export default React.memo(MainScreen);
