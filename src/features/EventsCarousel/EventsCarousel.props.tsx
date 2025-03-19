import type {IClassicEventsBit} from '@/domain/entities/classic_events';
import type {Dispatch, HTMLAttributes, SetStateAction} from 'react';

export default interface Props extends HTMLAttributes<HTMLDivElement> {
  items: IClassicEventsBit[];
  onBackgroundChange: Dispatch<SetStateAction<string>>;
  itemsPerSlide: number;
}
