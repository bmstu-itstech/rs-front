import type {HTMLAttributes, ReactElement, Ref} from 'react';

export default interface Props extends HTMLAttributes<HTMLDivElement> {
  icon: ReactElement;
  hasOverlayShadowing?: boolean;
  hideIconOnOpen?: boolean;
}
