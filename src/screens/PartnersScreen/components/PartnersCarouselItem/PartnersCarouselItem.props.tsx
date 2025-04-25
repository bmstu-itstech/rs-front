import type {HTMLAttributes} from 'react';


export default interface Props extends HTMLAttributes<HTMLDivElement> {
  name: string;
  url: string;
  logo: string;
}
