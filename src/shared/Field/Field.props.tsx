import type {HTMLAttributes, ReactNode} from 'react';

export default interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string;
  value: ReactNode;
}
