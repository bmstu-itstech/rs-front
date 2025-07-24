'use client';
import {Container, PrimaryButton} from '@/shared';
import background_main from '@/assets/main_background.png';
import TelegramIcon from '@/shared/TelegramIcon';
import VKIcon from '@/shared/VKIcon';
import React, {useCallback} from 'react';
import Link from 'next/link';

const MainScreen = () => {
  const onClick = useCallback(() => {
    const element = document.getElementById('news');
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  }, []);

  return (
    <Container
      title='Центр молодежной робототехники'
      hasShadowBetween
      background={background_main.src}
      titleClassname='text-balance !text-8xl lg:!text-9xl font-bold lg:font-normal w-full md:!text-8xl md:text-center  md:max-w-4/5 md:mx-auto lg:mx-0 lg:text-start lg:text-left'
      className=' lg:font-normal lg:text-left md:pt-12 lg:pt-[10%] text-balance lg:pb-12 '
      id='main'>
      <div className='flex  flex-col h-full justify-around gap-12 w-full '>
        <p className='leading-normal text-balance lg:text-5xl text-5xl md:text-6xl font-normal text-center'>
          Центр Молодежной Робототехники - это инновационное пространство, предназначенное для
          обучения и развития молодых талантов в области робототехники, искусственного интеллекта и
          программирования. Наша миссия - предоставить молодежи возможность исследовать и создавать
          будущее с помощью передовых технологий и творчества. Присоединяйтесь к нам и откройте для
          себя мир будущего уже сегодня!
        </p>
        <div className='flex w-full justify-between items-center'>
          <PrimaryButton className='w-full text-5xl md:text-6xl md:py-6 ' onClick={onClick}>
            Подробнее
          </PrimaryButton>
          <div className='hidden lg:flex'>
            <Link href={'https://t.me/robotics_bmstu'}>
              <TelegramIcon className='me-12 cursor-pointer' />
            </Link>
            <Link href={'https://vk.com/robotics_bmstu?from=groups'}>
              <VKIcon className='cursor-pointer' />
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

MainScreen.displayName = 'MainScreen';

export default React.memo(MainScreen);
