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
                <HardathonDetailsSkeleton/>
            </PageLayout>
        );
    }

    const info = [data.date, data.start_date, data.end_date, data.result_date, data.place];

    const links = [data.media, data.projects, data.images, data.documents, data.partners];

    return (
        <PageLayout isDvh={false} background={group_of_people.src} hasOrangeShadow>
            <p
                    className={`lg:text-8xl 2xl:text-9xl font-bold text-6xl mt-20 sm:text-8xl md:text-8xl leading-normal text-center select-none uppercase `}>
                    {data.title}
                </p>
            <div
                className={`absolute px-60 pt-6 items-center hidden lg:flex left-0 z-9999 cursor-pointer`}>
                <ArrowButton direction='left' onClick={() => router.back()}/>
            </div>
            <div
                className='relative flex flex-col h-min lg:flex-row gap-12 lg:gap-0 justify-center lg:justify-between items-stretch w-full'>

                <div
                    className='sm:p-20 p-10 lg:p-10 xl:p-12 2xl:p-20 h-full lg:w-full relative rounded-6xl border-2 border-main-orange
         bg-black/45 flex flex-col justify-between gap-24 lg:gap-20 max-lg:text-center overflow-hidden
         after:bg-linear-to-t after:from-main-orange-50 after:to-transparent
          after:z-10 after:absolute after:top-0 after:left-0 after:h-full after:w-full lg:after:hidden'>
                    {info.map((item, ind) => {
                        return (
                            <div
                                className='text-3xl sm:text-4-5xl md:text-5xl text-start leading-normal lg:text-5xl z-20 line-clamp-3 w-fit max-w-full'
                                key={ind}>
                                {HardathonDetailMainInfoUsecase[ind].title}: {item}
                            </div>
                        );
                    })}
                </div>
                <div className='flex h-fit flex-col w-full gap-12 lg:gap-20 lg:ms-32 mb-10'>
                    {HardathonDetailUsecase.map((item, index) => {
                        return (
                            <CardButton
                                isFilled={!isMobile}
                                key={index}
                                onClick={() => router.push(links[index])}
                                className='!w-full !py-8 text-3xl text-start leading-normal lg:text-5xl sm:text-4-5xl md:text-5xl'>
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
