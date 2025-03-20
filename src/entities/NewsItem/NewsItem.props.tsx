import type {HtmlHTMLAttributes} from 'react';
import {INewsBit} from '@/domain/entities/news';
export default interface Props
  extends INewsBit,
    Omit<HtmlHTMLAttributes<HTMLDivElement>, 'content' | 'id' | 'title'> {
  caption: string;
}
