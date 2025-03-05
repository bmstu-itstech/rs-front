import './style.css';
import {Field} from '@/shared';
import LinkField from '@/shared/LinkField';
import {FC} from 'react';
import {data} from './ContactCard.usecase';

const ContactCard: FC = () => {
  return (
    <div className='contact-card-outer'>
      <div className='flex flex-col p-8 md:p-12 h-full justify-between'>
        {data.map((item, index) => {
          return (
            <div className='flex flex-col md:gap-4' key={index}>
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
