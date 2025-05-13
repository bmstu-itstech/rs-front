'use client';

import {useIsMobile} from '@/hooks';
import {PageLayout} from '@/layouts/PageLayout';
import {PrimaryButton} from '@/shared';
import {useRouter} from 'next/navigation';
import bg from '@/assets/group_of_people.jpeg';
import Image from 'next/image';
import { useGetHardathons } from '@/hooks/Hardathons/useGetHardathons';
import { EventPageSkeleton } from '@/features/EventsCarousel/EventsCarousel.skeleton';

function HardathonsScreen() {
  const {data, isLoading} = useGetHardathons();
  const isMobile = useIsMobile();
  const router = useRouter();

  if (isLoading) {
    return (
      <PageLayout background={bg.src} isDvh>
        <EventPageSkeleton /> {/* TODO: replace with HardathonPageSkeleton */}
      </PageLayout>
    )
  };

  const hardathon = data?.results[0];
  if (!hardathon) {
    return (
      <PageLayout background={bg.src} isDvh>
        <div className='flex justify-center items-center w-full h-full'>
          <p className='text-2xl'>Нет хардатонов</p>
        </div>
      </PageLayout>
    )
  };

  return (
    <PageLayout title={hardathon.title} background={hardathon.background_image} isDvh>
      <div className='flex justify-between items-center w-full h-full'>
        {!isMobile && (
          <Image
            alt='speaker'
            className='max-w-2/5 hidden lg:block self-end scale-[1.2] origin-bottom-right'
            src={hardathon.images}
            width={600}
            height={600}
          />
        )}
        <div className='flex flex-col items-center gap-12 2xl:!-mt-24 lg:w-[50dvw]'>
          <div className='flex flex-col w-full lg:gap-10 text-3xl lg:text-5xl h-48r max-sm:w-[90vw] max-sm:h-[50vh] bg-linear-to-b from-transparent to-main-orange rounded-6xl border-2 border-main-orange p-12'>
            <p className='text-wrap text-ellipsis h-full overflow-hidden text-inherit'>
              {hardathon.quote}
            </p>
            <div className='flex flex-col font-bold  items-end justify-end mt-auto'>
              <p className='text-end'>— главный организатор хардатона,</p>
              <p>Балакало Максим</p>
            </div>
          </div>
          <div className='flex max-sm:flex-col justify-between gap-12 h-28 lg:gap-24  w-full'>
            <PrimaryButton
              bgFilled
              className='!w-full'
              onClick={() => router.push(`${hardathon.href}/details`)}>
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
