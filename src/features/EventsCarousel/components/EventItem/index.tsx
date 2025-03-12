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
      <MainTitle>{item.title}</MainTitle>
      <div className='text-5xl font-normal'>{'Описания нет'}</div>
      <div className='flex gap-4 items-center'>
        <div className='w-10 h-10 bg-main-orange rounded-full' />
        <LinkField
          title='Зарегистрироваться'
          url='https://t.me/s/studsovet_iu/748' // заглушка
        />
      </div>
      <PrimaryButton onClick={() => setIsOpened(true)}>Подробнее</PrimaryButton>
      {isOpened &&
        createPortal(
          <EventDropdown onClose={() => setIsOpened(false)} event={item} />,
          document.getElementById('modal') as HTMLElement,
        )}
    </div>
  );
};
export default memo(Event);
