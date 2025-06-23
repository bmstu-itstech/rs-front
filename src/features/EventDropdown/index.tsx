import {CardButton} from '@/entities';
import {useRouter} from 'next/navigation';
import {Props, ICardButton} from './EventDropdown.props';

function EventDropdown({event}: Props) {
  const router = useRouter();
  const data: ICardButton[] = [
    {
      label: `Дата проведения: ${event.date}`,
    },
    {
      label: `Место проведения`,
      onClick: () => {
        router.push(event.on_map_url);
      },
    },
    {
      label: `Фото`,
      onClick: () => {
        router.push(event.album_url);
      },
    },
    {
      label: `Упоминания в СМИ`,
      onClick: () => {
        router.push(event.media_url);
      },
    },
    {
      label: `Документы`,
      onClick: () => {
        router.push(event.docs_url);
      },
    },
  ];
  return (
    <div className=' bg-main-orange h-dvh pt-60 w-full lg:w-[50dvw] relative'>
      <div className='flex flex-col lg:ps-64 gap-12 justify-center user-select-none w-3/4 mx-auto lg:w-[40dvw] me-auto'>
        <p className='uppercase select-none lg:text-7xl text-6xl font-semibold text-center xl:text-8xl 2xl:text-9xl white'>
          Подробнее
        </p>
        {data.map((item, index) => {
          return item.onClick ? (
            <CardButton
              isFilled
              className='bg-white text-black !w-full'
              key={index}
              onClick={item.onClick}>
              {item.label}
            </CardButton>
          ) : (
            <p
              key={index}
              className='uppercase w-full text-3xl lg:text-5xl text-inherit text-center flex justify-center'>
              {item.label}
            </p>
          );
        })}
      </div>
    </div>
  );
}
export default EventDropdown;
