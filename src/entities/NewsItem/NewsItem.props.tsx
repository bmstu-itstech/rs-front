import type {HtmlHTMLAttributes} from 'react';

export default interface Props extends HtmlHTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  photo: string | null;
  new_url: string;
  caption: string;
}
