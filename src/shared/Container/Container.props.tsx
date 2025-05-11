import type {HTMLAttributes, ReactElement} from 'react';

type Ids = 'main' | 'news' | 'achievements' | 'contacts';

export default interface Props extends HTMLAttributes<HTMLDivElement> {
  id: Ids;
  hasShadowBetween?: boolean;
  titleClassname?: string;
  background?: string;
  title: string;
  LoadingScreen: ReactElement;
}
