import './style.css';
import {CardButton} from '@/entities';
import Image from 'next/image';
import {useRouter} from 'next/navigation';
import {Props, ICardButton} from './EventDropdown.props';

function EventDropdown({onClose, event}: Props) {
  const router = useRouter();
  const data: ICardButton[] = [
    {
      label: `Дата проведения: ${event.date}`,
    },
    {
      label: `Место проведения`,
      onClick: () => {
        router.push(event.on_map_url);
      }, // заглушка
    },
    {
      label: `Фото`, // загрушка
      onClick: () => {
        router.push(event.media_url);
      }, // заглушка
    },
    {
      label: `Документы`, // загрушка
      onClick: () => {
        router.push(event.docs_url);
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
              return item.onClick ? (
                <CardButton key={index} onClick={item.onClick}>
                  {item.label}
                </CardButton>
              ) : (
                <p
                  key={index}
                  className='uppercase w-full text-inherit text-center flex justify-center '>
                  {item.label}
                </p>
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
