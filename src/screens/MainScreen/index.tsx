'use client';

import {Container, PrimaryButton} from '@/shared';
import {NextPage} from 'next';

const MainScreen: NextPage = () => {
  return (
    <Container
      title='Центр молодежной робототехники'
      titleClassname='text-balance md:text-9xl font-bold md:font-normal w-full  md:max-w-3/5 md:text-left'
      className=' md:font-normal md:text-left md:text-9rxl text-balance md:pt-[14dvh] '
      id='main'>
      <div className='flex flex-col gap-12 w-full md:max-w-3/5'>
        <p className='caption leading-normal text-balance'>
          Центр Молодежной Робототехники - это инновационное пространство,
          предназначенное для обучения и развития молодых талантов в области
          робототехники, искусственного интеллекта и программирования. Наша
          миссия - предоставить молодежи возможность исследовать и создавать
          будущее с помощью передовых технологий и творчества. Присоединяйтесь к
          нам и откройте для себя мир будущего уже сегодня!
        </p>

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
      </div>
    </Container>
  );
};

MainScreen.displayName = 'MainScreen';

export default MainScreen;
