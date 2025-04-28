'use client';

import {CardButton} from '@/entities';
import {ArrowButton} from '@/shared';
import {useRouter} from 'next/navigation';
import {HardathonDetailUsecase} from './HardathonDetailsScreen.usecase';
import {PageLayout} from '@/layouts/PageLayout';
import group_of_people from '@/assets/group_of_people.jpeg';
import {useIsMobile} from '@/hooks';
import {HardathonDetailMainInfoUsecase} from './HardathonDetailsScreen.usecase';
function HardathonDetailsScreen() {
  const router = useRouter();
  const isMobile = useIsMobile();
  const info = [
    'xx.xx.20xx',
    'xx.xx.20xx',
    'xx.xx.20xx',
    'xx.xx.20xx',
    'Адрес/Ссылка',
  ];
  return (
    <PageLayout
      title='Хардатон 2024'
      background={group_of_people.src}
      hasOrangeShadow>
      <div className='relative flex flex-col lg:flex-row gap-12 lg:gap-0 justify-center lg:justify-between items-stretch w-full'>
        <div className={`absolute -top-48 max-lg:hidden left-0 z-9999 cursor-pointer`}>
          <ArrowButton direction='left' onClick={() => router.back()} />
        </div>
        <div
          className='p-20  lg:w-full relative  rounded-6xl border-2 border-main-orange
         bg-black/45 flex flex-col justify-between max-lg:gap-12 max-lg:text-center overflow-hidden
         after:bg-linear-to-t after:from-main-orange-50 after:to-transparent
          after:z-10 after:absolute after:top-0  after:left-0 after:h-full after:w-full md:after:hidden'>
          {info.map((item, ind) => {
            return (
              <div className='text-3xl lg:text-5xl z-20' key={ind}>
                {HardathonDetailMainInfoUsecase[ind].title}: {item}
              </div>
            );
          })}
          {/* <div className='text-3xl lg:text-5xl z-20'>
            Дата проведения: xx.xx.20xx
          </div>
          <div className='text-3xl lg:text-5xl z-20'>
            Старт приёма заявок: xx.xx.20xx
          </div>
          <div className='text-3xl lg:text-5xl z-20'>
            Окончание регистрации: xx.xx.20xx
          </div>
          <div className='text-3xl lg:text-5xl z-20'>
            Подведение итогов: xx.xx.20xx
          </div>
          <div className='flex flex-col gap-2 z-20'>
            <div className='text-3xl lg:text-5xl'>Место проведения:</div>
            <div className='text-3xl lg:text-5xl'>Адрес/Ссылка</div>
          </div> */}
        </div>
        <div className='flex flex-col w-full gap-12 lg:gap-20 lg:ms-32'>
          {HardathonDetailUsecase.map((item, index) => {
            return (
              <CardButton
                isFilled={!isMobile}
                key={index}
                onClick={item.onClick}
                className='!w-full !py-8'>
                {item.children}
              </CardButton>
            );
          })}
        </div>
      </div>
    </PageLayout>
  );
}

export default HardathonDetailsScreen;
