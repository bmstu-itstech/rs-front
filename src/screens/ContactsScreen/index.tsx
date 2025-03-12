'use client';

import {Container} from '@/shared';
import {LeaderCard} from '@/features';
import ContactCard from '@/features/ContactCard';
import {useIsMobile} from '@/hooks';
import ContactsCarousel from '@/features/ContactsCarousel';
import {NextPage} from 'next';

const ContactsScreen: NextPage = () => {
  const mobile = useIsMobile();

  return (
    <Container hasShadowBetween title='Контакты' id='contacts'>
      <div className='contacts relative'>
        {mobile ? (
          <ContactsCarousel />
        ) : (
          <div className='flex justify-center items-center gap-28 mx-auto max-w-5/6 h-[70dvh]'>
            <LeaderCard />
            <ContactCard />
          </div>
        )}
      </div>
    </Container>
  );
};

ContactsScreen.displayName = 'ContactsScreen';

export default ContactsScreen;
