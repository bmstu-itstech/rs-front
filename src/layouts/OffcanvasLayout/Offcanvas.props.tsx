import type {HTMLAttributes, ReactElement} from 'react';

export default interface Props extends HTMLAttributes<HTMLDivElement> {
  icon: ReactElement;
  hasOverlayShadowing?: boolean;
  hideIconOnOpen?: boolean;
}
