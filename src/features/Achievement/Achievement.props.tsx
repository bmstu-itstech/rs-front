import type { HTMLAttributes } from 'react';

export default interface Props extends HTMLAttributes<HTMLDivElement> {
  id: string;
  title: string;
  description: string;
  photoUrl: string;
  mediaUrl: string;
  coverUrl: string;
  compact?: boolean;
}
