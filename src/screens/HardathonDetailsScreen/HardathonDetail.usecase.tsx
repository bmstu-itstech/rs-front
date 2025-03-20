import type {MouseEventHandler} from 'react';

interface HardathonCard {
  children: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const HardathonDetailUsecase: HardathonCard[] = [
  {
    children: 'Упоминания в СМИ',
    onClick: () => {},
  },
  {
    children: 'Проекты',
    onClick: () => {},
  },
  {
    children: 'Фото',
    onClick: () => {},
  },
  {
    children: 'Документы',
    onClick: () => {},
  },
  {
    children: 'Партнёры',
    onClick: () => {},
  },
];
