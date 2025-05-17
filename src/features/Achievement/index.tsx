'use client';

import {useState, FC} from 'react';
import {useIsMobile} from '@/hooks';
import LinkField from '@/shared/LinkField';
import Image from 'next/image';
import Props from './Achievement.props';
import {Divider} from './components/Divider';
import no_photo from '@/assets/no_photo.jpg';
import {useRouter} from 'next/navigation';
import React from 'react';

const Achievement: FC<Props> = ({
  title,
  description,
  image,
  album_url,
  media_url,
  compact = false,
  onClick,
  className,
  ...props
}) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const mobile = useIsMobile();
  const router = useRouter();
  const curPhoto = image ?? no_photo.src;
  if (mobile) {
    return (
      <div
        className={`border-2 border-main-orange h-60 max-h-60 rounded-4xl flex overflow-hidden w-full ${className}`}
        {...props}
        id={String(props.id)}>
        <Image
          width={1416}
          height={945}
          src={curPhoto}
          alt='achievement'
          className='w-1/3 h-full min-h-full object-cover object-center'
        />
        <Divider isVertical />
        <div className='flex flex-col items-center justify-evenly flex-1 gap-1 py-2 w-full'>
          <p className='text-5xl text-center uppercase text-ellipsis line-clamp-1 max-w-5/6 w-full'>
            {title}
          </p>
          <Divider />
          <LinkField title='Подробнее' url={album_url} />
        </div>
      </div>
    );
  }
  if (compact) {
    return (
      <div
        className={`w-full h-full border-5 overflow-hidden border-main-orange hover:border-white  transition-all duration-300 flex justify-center items-center md:rounded-[4rem] lg:rounded-[5rem] 2xl:rounded-6xl cursor-pointer bg-cover bg-center bg-blend-multiply ${className}`}
        {...props}
        id={String(props.id)}
        style={{
          backgroundImage: `url(${curPhoto})`,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={onClick}>
        <p className='text-center flex items-center transition-all justify-center text-4xl  lg:text-5xl uppercase bg-gradient-to-b from-[rgba(0,0,0,0.5)] hover:from-main-orange-50 hover:to-main-orange-50 to-transparent from-52%  h-full w-full '>
          {hovered ? 'Подробнее' : title}
        </p>
      </div>
    );
  }
  return (
    <div
      className={` w-full h-full border-5 border-main-orange md:rounded-[4rem] lg:rounded-[5rem] 2xl:rounded-6xl overflow-hidden bg-no-repeat bg-right bg-contain ${className}`}
      style={{
        backgroundImage: `url(${curPhoto})`,
        backgroundSize: '55%', // Устанавливаем ширину фона на 50%
      }}
      {...props}
      id={String(props.id)}
      onClick={onClick}>
      <div className='px-32 py-8 flex flex-col justify-around w-full  bg-gradient-to-r from-black to-transparent from-52% h-full'>
        <div className='lg:text-6xl md:text-5xl 2xl:text-7xl h-fit max-w-full truncate'>
          {title}
        </div>
        <p className='lg:text-3xl md:text-2xl max-w-1/2 my-8  2xl:text-4xl flex-1  overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
          {description}
        </p>
        <div className='flex h-fit gap-6 2xl:gap-14'>
          <button
            className=' w-40 lg:w-60 2xl:w-72 py-5 lg:py-6 xl:py-8 lg:rounded-[3rem] 2xl:rounded-6xl bg-main-orange text-3xl  hover:bg-white hover:text-main-orange flex justify-center items-center cursor-pointer  duration-300 '
            onClick={() => router.push(album_url)}>
            ФОТО
          </button>
          <button
            className='w-40 lg:w-60 2xl:w-72 py-5 lg:py-6 xl:py-8 lg:rounded-[3rem] 2xl:rounded-6xl bg-main-orange hover:bg-white hover:text-main-orange text-white text-3xl flex justify-center items-center cursor-pointer  duration-300'
            onClick={() => router.push(media_url)}>
            СМИ
          </button>
        </div>
      </div>
    </div>
  );
};
Achievement.displayName = 'Achievement';
export default React.memo(Achievement);
