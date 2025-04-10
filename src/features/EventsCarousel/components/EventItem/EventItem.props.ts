import type {IClassicEventsBit} from '@/domain/entities/events';
import type {HTMLAttributes} from 'react';

export default interface Props extends HTMLAttributes<HTMLDivElement> {
  item: IClassicEventsBit;
  selected: boolean;
}
