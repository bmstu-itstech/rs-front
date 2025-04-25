import type {IEventsBit} from '@/domain/entities/events';
import type {HTMLAttributes} from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  event: IEventsBit;
}

export interface ICardButton {
  label: string;
  onClick?: () => void;
}
