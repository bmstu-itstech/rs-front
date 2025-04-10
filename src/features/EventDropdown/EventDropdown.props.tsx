import type {IClassicEventsBit} from '@/domain/entities/events';
import type {HTMLAttributes, MouseEventHandler} from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  onClose: MouseEventHandler<HTMLImageElement>;
  event: IClassicEventsBit;
}

export interface ICardButton {
  label: string;
  onClick: VoidFunction;
}
