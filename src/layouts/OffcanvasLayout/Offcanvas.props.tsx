import type {HTMLAttributes, ReactElement} from 'react';

export default interface Props extends HTMLAttributes<HTMLDivElement> {
  isClosedObject?: ReactElement;
  isOpenedObject?: ReactElement;
  hasOverlayShadowing?:boolean;
}
