import type { IClassicEventsBit } from '@/domain/entities/classic_events';
import type { HTMLAttributes } from 'react';

export default interface Props extends HTMLAttributes<HTMLDivElement>  {
  items: IClassicEventsBit[];
  itemsPerSlide: number;
}
