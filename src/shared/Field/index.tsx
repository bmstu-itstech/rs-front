import './style.css';
import {type FC} from 'react';
import Props from './Field.props';

const Field: FC<Props> = ({title, value, className, ...props}) => {
  return (
    <div
      className={`field flex gap-x-6 flex-wrap leading-normal ${className}`}
      {...props}>
      {title && <div className='key'>{title}:</div>}
      <div className='value'>{value}</div>
    </div>
  );
};

Field.displayName = 'Field';

export default Field;
