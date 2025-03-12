import './style.css';
import {MouseEventHandler} from 'react';
import {CardButton} from '@/entities';
import {IClassicEventsBit} from '@/domain/entities/classic_events';
import Image from 'next/image';
import {useRouter} from 'next/navigation';
import {Props, ICardButton} from './EventDropdown.props';

function EventDropdown({onClose, event}: Props) {
  const router = useRouter();
  const data: ICardButton[] = [
    {
      label: `Дата проведения: ${'дата'}`, // заглушка
      onClick: () => {},
    },
    {
      label: `Место проведения`, // загрушка
      onClick: () => {
        router.push('урл места');
      }, // заглушка
    },
    {
      label: `Фото`, // загрушка
      onClick: () => {
        router.push('урл фото');
      }, // заглушка
    },
    {
      label: `Документы`, // загрушка
      onClick: () => {
        router.push('урл доков');
      }, // заглушка
    },
  ];

  return (
    <div className='event-dropdown-bg' onClick={onClose}>
      <div className='event-dropdown-outer' onClick={e => e.stopPropagation()}>
        <div className='event-dropdown-inner'>
          <div className='info'>
            <div className='title'>Подробнее</div>
            {data.map((item, index) => {
              return (
                <CardButton
                  key={index}
                  label={item.label}
                  onClick={item.onClick}
                />
              );
            })}
          </div>
          <div className='action'>
            <Image
              src='/icons/close.svg'
              onClick={onClose}
              alt='close'
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDropdown;
