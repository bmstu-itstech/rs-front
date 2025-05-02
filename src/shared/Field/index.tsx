import './style.css'; // Удалите этот импорт, если больше не используете CSS
import {type FC} from 'react';
import Props from './Field.props';
const Field: FC<Props> = ({title, value, className, ...props}) => {
  return (
    <div className={`flex gap-x-6 w-full flex-wrap leading-normal ${className}`} {...props}>
      {title && <p className='text-white opacity-70 lg:text-5xl text-4xl text-wrap'>{title}:</p>}
      <div className=' lg:text-5xl text-4xl text-wrap w-full truncate'>{value}</div>
    </div>
  );
};
Field.displayName = 'Field';
export default Field;
