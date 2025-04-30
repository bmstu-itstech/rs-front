'use client';
import {useIsMobile} from '@/hooks';
import {ArrowButton} from '@/shared';
import Image from 'next/image';
import {FC} from 'react';
import {PrimaryButton} from '@/shared';
import {useRouter} from 'next/navigation';
import Props from './NewsItem.props';
import no_photo from '@/assets/no_photo.jpg';

const NewsItem: FC<Props> = ({title, content, href, image, caption}) => {
    const mobile = useIsMobile();
    const router = useRouter();
    const curPhoto = image ?? no_photo.src;

  if (mobile) {
    return (
      <div className='w-5/6 flex flex-col gap-16 h-full'>
        <div
          className={`bg-cover  w-full bg-center h-full border-3 border-main-orange rounded-3rxl overflow-hidden  bg-white bg-opacity-90 relative`}
          style={{
            backgroundImage: `url(${curPhoto})`,
          }}>
          <div className='h-full w-full bg-gradient-to-t from-main-orange-50 to-transparent from-10%' />
          <div className='text-3xl absolute bottom-8 left-1/2 -translate-x-1/2 text-nowrap max-w-5/6 truncate'>
            {title}
          </div>
        </div>
        <PrimaryButton className='w-full' onClick={() => router.push(`${href}`)}>
          Подробнее
        </PrimaryButton>
      </div>
    );
  }
  return (
    <div className='border-3 border-main-orange h-full min-h-full rounded-6xl w-[min(45rem,88vw)] bg-white overflow-hidden bg-opacity-90 flex flex-col relative'>
      <Image
        className='w-full brightness-[0.85] h-full max-h-[23rem] object-cover'
        src={curPhoto}
        alt='cover'
        width={500}
        height={500}
      />
      <div className='py-4 flex bg-main-orange justify-center h-full'>
        <p className='text-center uppercase max-w-5/6 truncate text-4xl'>{title}</p>
      </div>
      <div className='p-6 flex flex-col h-full justify-between'>
        {/* <div className='flex-1 overflow-hidden h-full'> */}
        <p className='text-3xl text-black overflow-y-auto max-h-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
          {content}
        </p>
        {/* </div> */}
        <div
          className='flex justify-between items-center cursor-pointer'
          onClick={() => router.push(`${href}`)}>
          <p className='text-3xl text-black truncate max-w-5/6'>{caption}</p>
          <ArrowButton />
        </div>
      </div>
    </div>
  );
};
NewsItem.displayName = 'NewsItem';
export default NewsItem;
