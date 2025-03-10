import type {HTMLAttributes} from 'react';

type Ids = 'main' | 'news' | 'achievements' | 'contacts';

export default interface Props extends HTMLAttributes<HTMLDivElement> {
  id: Ids;
  titleClassname?: string;
  title: string;
}
