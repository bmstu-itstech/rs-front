import type { MouseEventHandler } from 'react';

interface HardathonCard {
  label: string;
  onClick: MouseEventHandler<HTMLDivElement>;
  primary: boolean;
}

export const HardathonDetailUsecase: HardathonCard[] = [
  {
    label: 'Упоминания в СМИ',
    onClick: () => {},
    primary: true,
  },
  {
    label: 'Проекты',
    onClick: () => {},
    primary: true,
  },
  {
    label: 'Фото',
    onClick: () => {},
    primary: true,
  },
  {
    label: 'Документы',
    onClick: () => {},
    primary: true,
  },
  {
    label: 'Партнёры',
    onClick: () => {},
    primary: true,
  },
];
