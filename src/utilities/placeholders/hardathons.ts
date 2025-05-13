import {IHardathons} from '@/domain/entities/hardathons';
import group_of_people from '@/assets/group_of_people.jpeg';
export const HardathonsPlaceholder: IHardathons = {
  count: 1,
  previous: null,
  next: null,
  results: [
    {
      id: 0,
      title: 'Хакатон',
      date: '2023-10-01',
      start_date: '2023-10-01T10:00:00Z',
      end_date: '2023-10-02T18:00:00Z',
      result_date: '2023-10-05',
      place: 'Университетский кампус',
      media: '/',
      projects: '/',
      images: `/`,
      documents: '/',
      partners: 'Партнер 1, Партнер 2',
      href: '/',
      background_image: `${group_of_people.src}`,
      quote: 'Цитата',
    },
  ],
};
