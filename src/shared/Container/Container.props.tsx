import type {HTMLAttributes, ReactNode} from 'react';

type Ids = 'main' | 'news' | 'achievements' | 'contacts';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  id: Ids;
  hasShadowBetween?: boolean;
  titleClassname?: string;
  background?: string;
  title: string;
  onBecomeVisible: () => void;
}
