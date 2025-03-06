import {IAchievements} from '@/domain/entities/achievements';

//   id: number;
//   title: string;
//   description: string;
//   photo_album_url: string;
//   link_to_media: string;
//   photo: string;

export const AchievementsPlaceholder: IAchievements = {
  count: 4,
  data: [
    {
      id: 1,
      title: 'Победители «Боя роботов» 1,5 кг',
      description: `Команда «Гурманы» одержала серию из 5 побед битв
        Robot Fight Club, что дало им звание чемпионов 23 сезона. Команда
        выступила с роботом «Lilcheese» весом 1,5 кг и вооружённого барабанным спиннером`,
      photo_album_url: '#',
      link_to_media: '#',
      photo: '/mock/achievement_1.png',
    },
    {
      id: 2,
      title: 'Призёры Скат 2024',
      description: `Команда «Покорители Неба» стала призёром всероссийский соревнований СКАТ2024.
        Ребята спроектировали и изготовили БПЛА на базе ЦМР.
        Летательный аппарат успешно выполнил задание и занял третье место основного трека.`,
      photo_album_url: '#',
      link_to_media: '#',
      photo: '/mock/achievement_2.png',
    },
    {
      id: 3,
      title: '«АэроТех»',
      description: `Проект направлен на развитие студенческого научно-технического творчества в сфере
        беспилотных летательных аппаратов и предполагает создание специализированной площадки для обучения
        работе с БПЛА и проведения лекций.`,
      photo_album_url: '#',
      link_to_media: '#',
      photo: '/mock/achievement_3.png',
    },
    {
      id: 4,
      title: 'Хардатон «Инженерный вызов»',
      description:
        'В этом году участие приняли 11 лучших команд Бауманки и МТКП, которые на практике показали, что могут студенты лучшего технического университета.',
      photo_album_url: '#',
      link_to_media: '#',
      photo: '/mock/achievement_4.jpg',
    },
  ],
};
