import {IPartners} from '@/domain/entities/partners';

//   id: number;
//   title: string;
//   link: string;
//   photo: string;

export const PartnersPlaceholder: IPartners = {
  count: 3,
  partners: [
    {
      id: 1,
      title: 'test-1-fc-risk',
      link: '#',
      photo: '/partners/fc-rsk.png',
    },
    {
      id: 2,
      title: 'tech-prosv',
      link: '#',
      photo: '/partners/techprosv.jpg',
    },
    {
      id: 3,
      title: 'tbank',
      link: '#',
      photo: '/partners/tbank.png',
    },
    {
      id: 4,
      title: 'novikom',
      link: '#',
      photo: '/partners/novikom.png',
    },
    {
      id: 5,
      title: 'lipgart',
      link: '#',
      photo: '/partners/lipgart.png',
    },
  ],
};
