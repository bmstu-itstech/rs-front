import type {IEventsBit} from '@/domain/entities/events';
import type {HTMLAttributes} from 'react';

export default interface Props extends HTMLAttributes<HTMLDivElement> {
  items: IEventsBit[];
  // onBackgroundChange: Dispatch<SetStateAction<string>>;
  // itemsPerSlide: number;
  // count: number;
}
