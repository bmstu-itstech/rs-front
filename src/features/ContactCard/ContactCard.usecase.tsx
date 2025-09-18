import LinkField from '@/shared/LinkField';
import type {ReactNode} from 'react';

interface Idata {
  title: string;
  value: ReactNode;
  className?: string;
}

export const data: Idata[][] = [
  [
    {
      title: 'Телефон',
      value: '+7 (906) 568-96-73',
    },
    {
      title: 'Email',
      value: 'robotics.bmstu@yandex.ru',
    },
  ],
  [
    {
      title: '',
      value: (
        <LinkField
          title='Политика перс. данных'
          url='https://bmstu.ru/about/obrabotka-dannyh'
        />
      ),
    },
  ],
  [
    {
      title: '',
      value: <LinkField title='Сайт университета' url='https://bmstu.ru/' />,
    },
  ],
  [
    {
      title: 'Адрес',
      value: (
        <LinkField
          title='Схема проезда'
          url='https://yandex.ru/maps/213/moscow/?ll=37.682269%2C55.765475&mode=poi&poi%5Bpoint%5D=37.680720%2C55.765206&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D128334697512&utm_source=share&z=17'
          aria-label='Схема проезда'
        />
      ),
    },
    {
      title: '',
      value: '105005, г. Москва, Бауманская ул., 57Б, стр. 1',
    },
  ],
  [
    {
      title: 'Соцсети',
      value: (
        <div className='flex justify-between w-full flex-wrap'>
          <LinkField title='ВКонтакте' url='https://vk.com/robotics_bmstu' />
          <LinkField title='Телеграм' url='https://t.me/robotics_bmstu' />
        </div>
      ),
      className: 'flex-col',
    },
  ],
];
