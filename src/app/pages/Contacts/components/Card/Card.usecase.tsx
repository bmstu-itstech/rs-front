import ArrowSocial from '@/app/components/icons/ArrowSocial';
import type {FC, HTMLAttributes} from 'react';

export const photoCard_usecase = (
  <>
    <p className='font-normal text-4xl z-10 text-white'>Балакало Максим</p>
    <p className='font-bold text-3xl z-10 text-white'>Руководитель ЦМР</p>
    <p className='font-bold text-2xl z-10 text-white'>+7 (906) 568-96-73</p>
    <p className='font-normal text-2xl z-10 text-white'>maks.balakalo@bmstu.ru</p>
  </>
);

const socials = [
  {
    label: 'ВКонтакте',
    url: 'https://vk.com/robotics_bmstu',
  },
  {
    label: 'Телеграм',
    url: 'https://t.me/robotics_bmstu',
  },
];

interface Props extends HTMLAttributes<HTMLDivElement> {
  name?: string;
  val: string;
  href?: string;
}

const Row: FC<Props> = ({name, val, href, className, ...props}) => {
  return (
    <p className={`flex gap-4 text-3xl font-medium ${className} text-white`} {...props}>
      {name && <span className='text-gray '>{name}: </span>}
      {href ? (
        <a href={href} className='flex gap-1'>
          {val} <ArrowSocial className='self-start' />
        </a>
      ) : (
        <>{val}</>
      )}
    </p>
  );
};

export const textCard_usecase = (
  <div className='flex flex-col w-full gap-7'>
    <div className='flex flex-col gap-4'>
      <Row name='Email' val='robotics.bmstu@yandex.ru' />
    </div>
    <div>
      <Row val='Политика перс. данных' href='https://bmstu.ru/about/obrabotka-dannyh' />
    </div>
    <div>
      <Row val='Сайт Университета' href='https://bmstu.ru/' />
    </div>
    <div className='flex flex-col gap-4'>
      <Row name='Адрес' val='Схема проезда' href='/' />
      <Row val='105005, г. Москва,' />
      <Row val='Бауманская ул., 57Б, стр.1' />
    </div>
    <div className='flex flex-col gap-2'>
      <span className='text-3xl font-medium text-gray'>Соцсети: </span>
      <div className='flex justify-between'>
        {socials.map((social, index) => {
          return <Row key={index} href={social.url} val={social.label} />;
        })}
      </div>
    </div>
  </div>
);
