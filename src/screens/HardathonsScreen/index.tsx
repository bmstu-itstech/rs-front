'use client';

import {PageLayout} from '@/layouts/PageLayout';
import {PrimaryButton} from '@/shared';
import {useRouter} from 'next/navigation';
import bg from '@/assets/group_of_people.jpeg';
import Image from 'next/image';
import {useGetHardathons} from '@/hooks/Hardathons/useGetHardathons';
import { HardathonScreenPageSkeleton } from './HardathonsScreen.skeleton';
import speaker from '@/assets/speaker.png';

function HardathonsScreen() {
  const {data, isLoading} = useGetHardathons();
  const router = useRouter();

  if (isLoading) {
    return (
      <PageLayout background={bg.src} isDvh>
        <HardathonScreenPageSkeleton />
      </PageLayout>
    );
  }

  return (
    <PageLayout title={data?.results[0].title} background={data?.results[0].background_image} isDvh>
      <div className='flex justify-between items-center w-full h-full'>
        {/*Image только для пк */}
        <Image
          alt='speaker'
          className='max-w-2/5 hidden lg:block self-end scale-[1.2] origin-bottom-right'
          src={speaker.src}
          width={600}
          height={600}
        />

        <div className='flex flex-col items-center gap-12 2xl:!-mt-24 lg:w-[50dvw]'>
          <div className='flex flex-col w-full lg:gap-10 text-3xl lg:text-5xl h-48r max-sm:w-[90vw] max-sm:h-[50vh] bg-linear-to-b from-transparent to-main-orange rounded-6xl border-2 border-main-orange p-12'>
            <p className='text-wrap text-ellipsis h-full overflow-hidden text-inherit'>
              {data?.results[0].quote}
            </p>
            <div className='flex flex-col font-bold  items-end justify-end mt-auto'>
              <p className='text-end w-fit max-w-full truncate'>— главный организатор хардатона,</p>
              <p className='w-fit max-w-full truncate'>Балакало Максим</p>
            </div>
          </div>
          <div className='flex max-sm:flex-col justify-between gap-12 h-28 lg:gap-24  w-full'>
            <PrimaryButton
              bgFilled
              className='!w-full'
              onClick={() => router.push(`/hardathons/${data?.results[0].id}/details`)}>
              Подробнее
            </PrimaryButton>
            <PrimaryButton
              className='!w-full text-nowrap'
              onClick={() => router.push(data?.results[0].href ?? '/')}
              bgFilled>
              Подать заявку
            </PrimaryButton>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default HardathonsScreen;
