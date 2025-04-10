import type {MouseEventHandler} from 'react';

export interface HardathonCard {
  children: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

