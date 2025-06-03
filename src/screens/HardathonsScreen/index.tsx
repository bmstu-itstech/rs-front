'use client';

import {PageLayout} from '@/layouts/PageLayout';
import {PrimaryButton} from '@/shared';
import {useRouter} from 'next/navigation';
import bg from '@/assets/group_of_people.jpeg';
import Image from 'next/image';
import {useGetHardathons} from '@/hooks/Hardathons/useGetHardathons';
import {HardathonScreenPageSkeleton} from './HardathonsScreen.skeleton';
import speaker from '@/assets/speaker.png';
import {useIsMobile} from "@/hooks";

function HardathonsScreen() {
    const {data, isLoading} = useGetHardathons();
    const router = useRouter();
    const isMobile = useIsMobile();
    if (isLoading) {
        return (
            <PageLayout background={bg.src} isDvh>
                <HardathonScreenPageSkeleton/>
            </PageLayout>
        );
    }

    return (
        <PageLayout background={data?.results[0].background_image} isDvh>
            <div className='flex justify-between items-center w-full h-full'>


                {/*Image только для пк */}
                <Image
                    alt='speaker'
                    className='max-w-2/5 hidden xl:block self-end scale-[1.2] origin-bottom-right'
                    src={speaker.src}
                    width={600}
                    height={600}
                />

                <div className='flex flex-col items-center justify-center lg:gap-7 gap-12 2xl:!-mt-24 lg:w-[50dvw]'>
                    <p
                        className={`lg:text-7xl 2xl:text-9xl font-bold text-7xl sm:text-8xl md:text-8xl leading-normal text-center select-none uppercase `}>
                        {data?.results[0].title}
                    </p>
                    <div
                        className='flex flex-col w-full lg:gap-10 text-3xl lg:text-5xl h-48r max-sm:w-[90vw]
                        max-sm:h-[50vh] bg-linear-to-b from-transparent to-main-orange rounded-6xl border-2 border-main-orange p-12'>
                        <p className='text-wrap text-ellipsis h-full overflow-hidden text-inherit md:text-4xl'>
                            {data?.results[0].quote}
                        </p>
                        <div className='flex flex-col font-bold  items-end justify-end mt-auto'>
                            <p className='text-end w-fit max-w-full truncate md:text-4xl'>— главный организатор хардатона,</p>
                            <p className='w-fit max-w-full truncate md:text-4xl'>Балакало Максим</p>
                        </div>
                    </div>
                    <div className='flex max-2xl:flex-col justify-between lg:gap-5 gap-12 h-28 w-full'>
                        <PrimaryButton
                            bgFilled={!isMobile}
                            className='!w-full md:text-5xl'
                            onClick={() => router.push(`/hardathons/${data?.results[0].id}/details`)}>
                            Подробнее
                        </PrimaryButton>
                        <PrimaryButton
                            className='!w-full text-nowrap md:text-5xl'
                            onClick={() => router.push(data?.results[0].href ?? '/')}
                            bgFilled={!isMobile}>
                            Подать заявку
                        </PrimaryButton>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}

export default HardathonsScreen;
