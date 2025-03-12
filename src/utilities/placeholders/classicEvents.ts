import type {IClassicEvents} from '@/domain/entities/classic_events';

const classicEventsPlaceholder: IClassicEvents = {
  count: 15,
  total_count: 15,
  next: null,
  classic_events: [
    {title: 'Концерт классической музыки', photo: 'concert1.jpg'},
    {title: 'Выставка живописи', photo: 'exhibition1.jpg'},
    {title: 'Театральная постановка', photo: 'theater1.jpg'},
    {title: 'Фестиваль классической музыки', photo: 'festival1.jpg'},
    {title: 'Лекция по искусству', photo: 'lecture1.jpg'},
    {title: 'Мастер-класс по живописи', photo: 'workshop1.jpg'},
    {title: 'Поэтический вечер', photo: 'poetry1.jpg'},
    {title: 'Классический балет', photo: 'ballet1.jpg'},
    {title: 'Концерт органной музыки', photo: 'organ_concert1.jpg'},
    {title: 'Выставка скульптуры', photo: 'sculpture_exhibition1.jpg'},
    {
      title: 'Классическая музыка на открытом воздухе',
      photo: 'outdoor_concert1.jpg',
    },
    {title: 'Фестиваль камерной музыки', photo: 'chamber_festival1.jpg'},
    {title: 'Творческий вечер композиторов', photo: 'composer_evening1.jpg'},
    {title: 'Выставка фотографий', photo: 'photo_exhibition1.jpg'},
    {title: 'Классическая музыка для детей', photo: 'children_concert1.jpg'},
  ],
};

export {classicEventsPlaceholder};
