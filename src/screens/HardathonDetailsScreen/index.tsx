'use client';

import {CardButton} from '@/entities';
import {ArrowButton} from '@/shared';
import {useRouter} from 'next/navigation';
import {HardathonDetailUsecase} from './HardathonDetail.usecase';

function HardathonDetailsScreen() {
  const router = useRouter();

  return (
    <div className='!pt-12 mb-40 min-h-[100vh] flex flex-col gap-20 max-sm:!pb-12'>
      <div className='relative'>
        <div className='subtitle'>Хардатон 2024</div>
      </div>
      <div className='relative flex max-lg:flex-col gap-12 lg:gap-32 justify-center items-stretch max-sm:mx-auto max-sm:w-[100vw]'>
        <div
          className={`absolute -top-48 max-lg:hidden`}
          style={{left: 'calc(18vw - (100vw - 1920px) * 0.1)'}}>
          <ArrowButton direction='left' onClick={() => router.back()} />
        </div>
        <div className='!px-12 !py-20 rounded-6xl border-2 border-main-orange bg-black/55 flex flex-col justify-between max-lg:gap-12 max-lg:text-center'>
          <div className='text-2xl lg:text-5xl'>
            Дата проведения: xx.xx.20xx
          </div>
          <div className='text-2xl lg:text-5xl'>
            Старт приёма заявок: xx.xx.20xx
          </div>
          <div className='text-2xl lg:text-5xl'>
            Окончание регистрации: xx.xx.20xx
          </div>
          <div className='text-2xl lg:text-5xl'>
            Подведение итогов: xx.xx.20xx
          </div>
          <div className='flex flex-col gap-2'>
            <div className='text-2xl lg:text-5xl'>Место проведения:</div>
            <div className='text-2xl lg:text-5xl'>Адрес/Ссылка</div>
          </div>
        </div>
        <div className='flex flex-col gap-12 lg:gap-20'>
          {HardathonDetailUsecase.map((item, index) => {
            return (
              <CardButton
                label={item.label}
                key={index}
                onClick={item.onClick}
                primary={item.primary}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HardathonDetailsScreen;
