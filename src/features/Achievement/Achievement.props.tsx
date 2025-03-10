import type { HTMLAttributes } from 'react';

export default interface Props extends HTMLAttributes<HTMLDivElement> {
  id: string;
  title: string;
  description: string;
  photo_album_url: string;
  link_to_media: string;
  photo: string | null;
  compact?: boolean;
}
