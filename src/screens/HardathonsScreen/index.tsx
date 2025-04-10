'use client';

import {useIsMobile} from '@/hooks';
import {PageLayout} from '@/layouts/PageLayout';
import {PrimaryButton} from '@/shared';
import {useRouter} from 'next/navigation';
import bg from '@/assets/group_of_people.jpeg';

function HardathonsScreen() {
  const isMobile = useIsMobile();
  const router = useRouter();

  return (
    <PageLayout title='Хардатон 2024' background={bg.src} isDvh>
      <div className='flex justify-between items-center w-full h-full'>
        {!isMobile && (
          <img
            alt='speaker'
            className='max-w-2/5 hidden lg:block self-end scale-[1.2] origin-bottom-right'
            src='/mock/speaker.png'
          />
        )}
        <div className='flex flex-col items-center gap-12 2xl:!-mt-24 lg:w-[50dvw]'>
          <div className='flex flex-col  lg:gap-10 text-3xl lg:text-5xl h-48r max-sm:w-[90vw] max-sm:h-[50vh] bg-linear-to-b from-transparent to-main-orange rounded-6xl border-2 border-main-orange p-12'>
            <p className='text-wrap text-ellipsis h-full overflow-hidden text-inherit'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              architecto, obcaecati beatae fugiat totam adipisci excepturi harum
              reiciendis necessitatibus ipsum fuga quos id iure dicta fugit quod
            </p>
            <div className='flex flex-col font-bold  items-end justify-end mt-auto'>
              <p className='text-end'>— главный организатор хардатона,</p>
              <p>Валерий Бизиков</p>
            </div>
          </div>
          <div className='flex max-sm:flex-col justify-between gap-12 h-28 lg:gap-24  w-full'>
            <PrimaryButton
              bgFilled
              className='!w-full'
              onClick={() => router.push('/hardathons/1/details')}>
              Подробнее
            </PrimaryButton>
            <PrimaryButton className='!w-full text-nowrap' bgFilled>
              Подать заявку
            </PrimaryButton>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default HardathonsScreen;
