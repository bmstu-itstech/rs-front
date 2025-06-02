'use client';
import {memo, type FC} from 'react';
import MainTitle from '@/entities/MainTitle';
import {PrimaryButton} from '@/shared';
import EventDropdown from '../../../EventDropdown';
import Props from './EventItem.props';
import {useIsMobile} from '@/hooks';
import {useRouter} from 'next/navigation';
import {Offcanvas} from '@/layouts/OffcanvasLayout';
const Event: FC<Props> = ({item, className, ...props}) => {
  const isMobile = useIsMobile();
  const router = useRouter();
  return (
    <div
      className={`flex flex-col items-center gap-12 min-h-full justify-between lg:w-2/3 px-12 pt-36 lg:pt-5  mx-auto h-full user-select-none ${
        className ?? ''
      }`} // static
      {...props}>
      <MainTitle>{item.name}</MainTitle>
      <p className='py-10 text-xl leading-normal font-normal md:text-4-5xl sm:text-4xl border-4 w-full lg:h-full
      flex justify-center items-center border-main-orange px-12 lg:px-0 text-center lg:text-start lg:border-0
      rounded-4xl xl:text-5xl 3xl:text-6xl'>
        {item.description}
      </p>

      <div className='flex flex-col lg:flex-col justify-between items-center gap-x-40 gap-y-8 lg:gap-y-5 w-full '>
        <PrimaryButton
          className='!w-full'
          titleClassname='truncate'
          bgFilled={!isMobile}
          onClick={() => router.push(item.registration_url)}>
          Зарегистрироваться
        </PrimaryButton>
        <Offcanvas
          hasOverlayShadowing
          className='select-none uppercase
        lg:bg-main-orange  lg:hover:bg-white lg:hover:border-white
          hover:text-main-orange py-5 lg:py-8 lg:px-34 rounded-6xl
          bg-transparent hover:bg-main-orange border-2 border-main-orange
           w-full lg:w-full cursor-pointer transition-all duration-300 text-3xl lg:text-5xl'
          isClosedObject={<>Подробнее</>}>
          <EventDropdown event={item} />
        </Offcanvas>
      </div>
    </div>
  );
};
export default memo(Event);
