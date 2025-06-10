'use client';

import {CardButton} from '@/entities';
import {ArrowButton} from '@/shared';
import {useParams, useRouter} from 'next/navigation';
import {HardathonDetailUsecase} from './HardathonDetailsScreen.usecase';
import {PageLayout} from '@/layouts/PageLayout';
import group_of_people from '@/assets/group_of_people.jpeg';
import {useIsMobile} from '@/hooks';
import {HardathonDetailMainInfoUsecase} from './HardathonDetailsScreen.usecase';
import {useGetHardathonsById} from '@/hooks/Hardathons/useGetHardathonsById';
import {HardathonDetailsSkeleton} from './HardathonDetail.skeleton';

function HardathonDetailsScreen() {
  const {id} = useParams();
  const {data, isLoading} = useGetHardathonsById(Number(id));
  const router = useRouter();
  const isMobile = useIsMobile();

  if (isLoading || !data) {
    return (
      <PageLayout background={group_of_people.src} isDvh>
        <HardathonDetailsSkeleton />
      </PageLayout>
    );
  }

  const info = [data.date, data.start_date, data.end_date, data.result_date, data.place];

  const links = [data.media, data.projects, data.images, data.documents, data.partners];

  return (
    <PageLayout
      isDvh={false}
      background={group_of_people.src}
      title={data.title}
      titleClassname='lg:!text-8xl !text-7xl mt-20 lg:mt-0'
      hasOrangeShadow>
      <div
        className={`absolute px-60 pt-6 items-center hidden lg:flex left-0 z-9999 cursor-pointer`}>
        <ArrowButton direction='left' onClick={() => router.back()} />
      </div>
      <div className='relative flex flex-col lg:mt-20 lg:h-260 2xl:h-300 lg:flex-row gap-12 lg:gap-0 justify-center lg:justify-between items-stretch w-full'>
        <div
          className='p-20 lg:p-30  2xl:p-30 h-full lg:w-full relative rounded-6xl border-2 border-main-orange
         bg-black/45 flex flex-col justify-between gap-12 lg:gap-20 lg:text-center overflow-hidden
         after:bg-linear-to-t after:from-main-orange-50 after:to-transparent
          after:z-10 after:absolute after:top-0 after:left-0 after:h-full after:w-full lg:after:hidden'>
          {info.map((item, ind) => {
            return (
              <div
                className='text-4xl w-full  md:text-5xl text-center lg:text-start leading-normal lg:text-5xl z-20 line-clamp-3 max-w-full'
                key={ind}>
                {HardathonDetailMainInfoUsecase[ind].title}: {item}
              </div>
            );
          })}
        </div>
        <div className='flex h-full flex-col w-full gap-12 justify-between lg:ms-32 mb-10'>
          {HardathonDetailUsecase.map((item, index) => {
            return (
              <CardButton
                isFilled={!isMobile}
                key={index}
                onClick={() => router.push(links[index])}
                className='!w-full lg:!py-8 2xl:!py-10 !py-6 !text-4xl text-start leading-normal lg:text-5xl  md:text-5xl'>
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
