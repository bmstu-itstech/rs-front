import './style.css';
import {Field} from '@/shared';
import {FC} from 'react';
import {data} from './ContactCard.usecase';

const ContactCard: FC = () => {
  return (
    <div className='border-3 border-main-orange rounded-3rxl bg-black bg-opacity-80 w-full min-w-1/2 flex-auto h-full flex flex-col'>
      {/* <div className='min-w-[450px] min-h-[464px] max-w-[700px] max-h-[700px] border-3 border-main-orange rounded-3rxl bg-black bg-opacity-80 w-full h-full flex flex-col'> */}
      <div className='flex flex-col p-8 lg:p-12 h-full w-full  justify-evenly lg:justify-between'>
        {data.map((item, index) => {
          return (
            <div className='flex flex-col w-full lg:gap-4' key={index}>
              {item.map((subItem, subIndex) => {
                return (
                  <Field
                    key={subIndex}
                    title={subItem.title}
                    value={subItem.value}
                    className={subItem.className}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

ContactCard.displayName = 'ContactCard';

export default ContactCard;
