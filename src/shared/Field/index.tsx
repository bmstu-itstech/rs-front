import './style.css'; // Удалите этот импорт, если больше не используете CSS
import {type FC} from 'react';
import Props from './Field.props';
const Field: FC<Props> = ({title, value, className, ...props}) => {
  return (
    <div
      className={`flex gap-x-6 flex-wrap leading-normal ${className}`}
      {...props}>
      {title && (
        <div className='text-white opacity-70 lg:text-5xl text-4xl'>
          {title}:
        </div>
      )}
      <div className=' lg:text-5xl text-4xl '>{value}</div>
    </div>
  );
};
Field.displayName = 'Field';
export default Field;
