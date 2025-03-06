'use client';

import {Container, PrimaryButton} from '@/shared';
import {NextPage} from 'next';

const MainScreen: NextPage = () => {
  return (
    <Container id='main'>
      <div className='main'>
        <div className=' uppercase font-bold md:font-normal text-center md:text-left text-5xl md:text-9rxl leading-normal px-6 md:px-0 text-balance inline-flex'>
          Центр молодежной робототехники
        </div>
        <div className='caption leading-normal px-6 md:px-0 text-balance'>
          Центр Молодежной Робототехники - это инновационное пространство,
          предназначенное для обучения и развития молодых талантов в области
          робототехники, искусственного интеллекта и программирования. Наша
          миссия - предоставить молодежи возможность исследовать и создавать
          будущее с помощью передовых технологий и творчества. Присоединяйтесь к
          нам и откройте для себя мир будущего уже сегодня!
        </div>
        <div className='bottom'>
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
      </div>
    </Container>
  );
};

MainScreen.displayName = 'MainScreen';

export default MainScreen;
