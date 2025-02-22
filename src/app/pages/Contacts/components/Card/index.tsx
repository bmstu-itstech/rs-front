import type {FC} from 'react';
import {Props} from './Card.props';

const Card: FC<Props> = ({children, className, ...props}) => {
  return (
    <div
      className={`border-orange_main  border-5 rounded-3xl z-10 relative ${className}`}
      {...props}>
      {children}
    </div>
  );
};

export default Card;
