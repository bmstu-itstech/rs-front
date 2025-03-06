'use client';

import {CardButton} from '@/entities';
import {ArrowButton} from '@/shared';
import {useRouter} from 'next/navigation';
import {HardathonDetailUsecase} from './HardathonDetail.usecase';

function HardathonDetailsScreen() {
  const router = useRouter();

  return (
    <div className='!pt-[30px] mb-[100px] min-h-[100vh] flex flex-col gap-[50px] max-sm:!pb-[30px]'>
      <div className='relative'>
        <div className='subtitle'>Хардатон 2024</div>
      </div>
      <div className='relative flex max-lg:flex-col gap-[30px] md:gap-[80px] justify-center items-stretch max-sm:mx-auto max-sm:w-[100vw]'>
        <div
          className={`absolute top-[-120px] max-lg:hidden`}
          style={{left: 'calc(18vw - (100vw - 1920px) * 0.1)'}}>
          <ArrowButton direction='left' onClick={() => router.back()} />
        </div>
        <div className='!px-[30px] !py-[50px] rounded-[60px] border-[3px] border-[var(--primary-color)] bg-black/55 flex flex-col justify-between max-md:gap-[30px] max-md:text-center'>
          <div className='text-[16px] md:text-[32px]'>
            Дата проведения: xx.xx.20xx
          </div>
          <div className='text-[16px] md:text-[32px]'>
            Старт приёма заявок: xx.xx.20xx
          </div>
          <div className='text-[16px] md:text-[32px]'>
            Окончание регистрации: xx.xx.20xx
          </div>
          <div className='text-[16px] md:text-[32px]'>
            Подведение итогов: xx.xx.20xx
          </div>
          <div className='flex flex-col gap-[5px]'>
            <div className='text-[16px] md:text-[32px]'>Место проведения:</div>
            <div className='text-[16px] md:text-[32px]'>Адрес/Ссылка</div>
          </div>
        </div>
        <div className='flex flex-col gap-[30px] md:gap-[50px]'>
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
