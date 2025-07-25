import type { HTMLAttributes } from 'react';

export default interface Props extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  titleClassname?: string;
  background?: string;
  isShadowedBack?: boolean;
  hasShadowBetween?: boolean;
  hasOrangeShadow?: boolean;
  hasBg?: boolean;
  isDvh?: boolean;
  objectFit?: 'cover' | 'fill';
}