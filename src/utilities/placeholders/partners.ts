import {IPartners} from '@/domain/entities/partners';

//   id: number;
//   title: string;
//   link: string;
//   photo: string;

export const PartnersPlaceholder: IPartners = {
  count: 3,
  total_count: 3,
  next: null,
  partners: [
    {
      title: 'test-1-fc-risk',
      link: '#',
      photo: '/partners/fc-rsk.png',
    },
    {
      title: 'tech-prosv',
      link: '#',
      photo: '/partners/techprosv.jpg',
    },
    {
      title: 'tbank',
      link: '#',
      photo: '/partners/tbank.png',
    },
    {
      title: 'novikom',
      link: '#',
      photo: '/partners/novikom.png',
    },
    {
      title: 'lipgart',
      link: '#',
      photo: '/partners/lipgart.png',
    },
  ],
};
