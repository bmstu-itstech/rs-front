import type {IEventsBit} from '@/domain/entities/events';
import type {Dispatch, HTMLAttributes, SetStateAction} from 'react';

export default interface Props extends HTMLAttributes<HTMLDivElement> {
  items: IEventsBit[];
  onBackgroundChange: Dispatch<SetStateAction<string>>;
  itemsPerSlide: number;
  count: number;
}
