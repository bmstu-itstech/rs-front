'use client';
import {memo, useState, type FC} from 'react';
import MainTitle from '@/entities/MainTitle';
import {PrimaryButton} from '@/shared';
import LinkField from '@/shared/LinkField';
import EventDropdown from '../../../EventDropdown';
import {createPortal} from 'react-dom';
import Props from './EventItem.props';

const Event: FC<Props> = ({item, selected, className, ...props}) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <div
      className={`flex flex-col items-center gap-12 min-h-full justify-between w-full mx-auto h-full user-select-none ${
        className ?? ''
      }`}
      {...props}>
      <MainTitle>{item.name}</MainTitle>
      <p className='text-5xl font-normal border-2 w-full h-full flex justify-center items-center border-main-orange lg:border-0 rounded-4xl'>
        {item.description}
      </p>
      <div className='flex flex-col gap-y-8 lg:gap-24 w-full'>
        <div className='flex gap-4 items-center justify-center lg:justify-start'>
          <div className='w-10 h-10 bg-main-orange rounded-full' />
          <LinkField
            title='Зарегистрироваться'
            url='https://t.me/s/studsovet_iu/748' // заглушка
            titleClassname='!uppercase'
          />
        </div>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-x-40 gap-y-8 w-full'>
          <PrimaryButton
            className='!w-full'
            titleClassname='truncate'
            bgFilled
            onClick={() => setIsOpened(true)}>
            Список команд
          </PrimaryButton>
          <PrimaryButton
            className='!w-full'
            bgFilled
            onClick={() => setIsOpened(true)}>
            Подробнее
          </PrimaryButton>
        </div>
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
