import PageLayout from '@/app/layouts/Page';
import type {FC} from 'react';
import {Props} from './Contacts.props';
import Card from './components/Card';
import {
  photoCard_usecase,
  textCard_usecase,
} from './components/Card/Card.usecase';
const Contacts: FC<Props> = ({className, ...props}) => {
  return (
      <PageLayout title='Контакты' className={className} {...props}>
        <div className='flex w-full justify-center items-center gap-[5%]'>
          <Card
              className='flex flex-col justify-end gap-2 h-full items-center pb-8 aspect-[5/6] max-w-[35rem] bg-background_director bg-cover relative
          after:absolute after:w-full after:bottom-0 after:rounded-lg
          after:h-1/2 after:bg-gradient-to-t from-orange_main'>
            {photoCard_usecase}
          </Card>
          <Card className='p-16 pe-32 aspect-square max-w-[39rem]'>
            {textCard_usecase}
          </Card>
        </div>
      </PageLayout>
  );
};

export default Contacts;