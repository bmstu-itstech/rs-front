'use client';

import {Container, PrimaryButton} from '@/shared';
import {NextPage} from 'next';
import background_main from '@/assets/main_background.png';

const MainScreen: NextPage = () => {
  return (
    <Container
      title='Центр молодежной робототехники'
      hasShadowBetween
      background={background_main.src}
      titleClassname='text-balance lg:text-9xl font-bold lg:font-normal w-full  lg:max-w-3/5 lg:text-left'
      className=' lg:font-normal lg:text-left lg:text-9rxl pt-[20%] lg:pt-[10%] text-balance lg:pb-12 '
      id='main'>
      <div className='flex flex-col h-full justify-around gap-12 w-full lg:max-w-3/5'>
        <p className='caption leading-normal text-balance '>
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
