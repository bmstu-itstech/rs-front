'use client';
import {memo, useState, type FC} from 'react';
import MainTitle from '@/entities/MainTitle';
import {PrimaryButton} from '@/shared';
import EventDropdown from '../../../EventDropdown';
import {createPortal} from 'react-dom';
import Props from './EventItem.props';
import {useIsMobile} from '@/hooks';
import {useRouter} from 'next/navigation';
const Event: FC<Props> = ({item, selected, className, ...props}) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const isMobile = useIsMobile();
  const router = useRouter();
  return (
    <div
      className={`flex flex-col items-center gap-12 min-h-full justify-between lg:w-2/3 px-12 pt-36 lg:pt-12  mx-auto h-full user-select-none ${
        className ?? ''
      }`}
      {...props}>
      <MainTitle>{item.name}</MainTitle>
      <p className='text-5xl leading-normal   font-normal border-2 w-full lg:h-full h-3/5 flex justify-center items-center border-main-orange px-12 lg:px-0 text-center lg:text-start lg:border-0 rounded-4xl'>
        {item.description}
      </p>

      <div className='flex flex-col lg:flex-row justify-between items-center gap-x-40 gap-y-8 w-full'>
        <PrimaryButton
          className='!w-full'
          titleClassname='truncate'
          bgFilled={!isMobile}
          onClick={() => router.push('')}>
          Зарегистрироваться
        </PrimaryButton>
        <PrimaryButton
          className='!w-full'
          bgFilled={!isMobile}
          onClick={() => setIsOpened(true)}>
          Подробнее
        </PrimaryButton>
      </div>

      {isOpened &&
        createPortal(
          <EventDropdown onClose={() => setIsOpened(false)} event={item} />,
          document.getElementById('modal') as HTMLElement,
        )}
    </div>
  );
};
export default memo(Event);
