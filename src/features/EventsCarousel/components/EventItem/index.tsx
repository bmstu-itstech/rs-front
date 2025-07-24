'use client';
import {memo, type FC} from 'react';
import MainTitle from '@/entities/MainTitle';
import {PrimaryButton} from '@/shared';
import Props from './EventItem.props';
import {useIsMobile} from '@/hooks';
import {useRouter} from 'next/navigation';
import {EventOffCanvas} from '../../EventOffcanvas';

const Event: FC<Props> = ({item, className, ...props}) => {
  const isMobile = useIsMobile();
  const router = useRouter();

  return (
    <div
      className={`flex flex-col items-center gap-12 min-h-full justify-between lg:w-2/3 px-12 pt-36 pb-20 lg:pt-5  mx-auto h-full user-select-none ${
        className ?? ''
      }`}
      {...props}>
      <MainTitle>{item.name}</MainTitle>
      <p
        className='py-10 text-5xl whitespace-pre-wrap shrink-0 overflow-ellipsis h-[min(60%,70rem)] lg:max-h-1/2 overflow-auto
          align-top  leading-normal font-normal  border-4 w-full lg:h-full
      flex justify-center border-main-orange px-4 text-pretty lg:px-0 text-center lg:text-start lg:border-0
      rounded-4xl xl:text-5xl 2xl:text-5xl'>
        {item.description}
      </p>

      <div className='flex flex-col lg:flex-row justify-between items-center gap-x-40 gap-y-8 lg:gap-y-5 w-full '>
        <PrimaryButton
          className='!w-full'
          titleClassname='truncate'
          bgFilled={!isMobile}
          onClick={() => router.push(item.registration_url)}>
          Зарегистрироваться
        </PrimaryButton>
        <EventOffCanvas item={item} />
      </div>
    </div>
  );
};
export default memo(Event);
