import type { HTMLAttributes } from 'react';

export default interface Props extends HTMLAttributes<HTMLDivElement> {
  titleClassname?: string;
  background?: string;
  isShadowedBack?: boolean;
  hasShadowBetween?: boolean;
  hasOrangeShadow?: boolean;
  hasBg?: boolean;
  isDvh?: boolean;
}