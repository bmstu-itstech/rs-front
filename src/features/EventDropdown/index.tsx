import {CardButton} from '@/entities';
import Image from 'next/image';
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
    <div className=' bg-main-orange h-dvh pt-60 w-[50dvw] '>
      <div className='flex flex-col ps-64 gap-12 justify-center user-select-none w-[40dvw] me-auto'>
        <div className='uppercase lg:text-8xl text-6xl font-semibold text-center'>Подробнее</div>
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

        {/* <div className='relative'>
          <Image
            src='/icons/close.svg'
            alt='close'
            width={100}
            height={100}
            className='absolute top-10 right-10 cursor-pointer'
          />
        </div> */}
      </div>
    </div>
  );
}
export default EventDropdown;
