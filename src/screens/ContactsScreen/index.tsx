'use client';

import {Container} from '@/shared';
import {LeaderCard} from '@/features';
import ContactCard from '@/features/ContactCard';
import {useIsMobile} from '@/hooks';
import ContactsCarousel from '@/features/ContactsCarousel';
import {NextPage} from 'next';
import React from 'react';

const ContactsScreen = ({setPageToShow}: {setPageToShow: () => void}) => {
  // console.log('Я загрузил contacts');
  const mobile = useIsMobile();
  return (
    <Container hasShadowBetween title='Контакты' id='contacts' onBecomeVisible={setPageToShow}>
      {mobile ? (
        <ContactsCarousel />
      ) : (
        <div className='flex justify-center items-center gap-28 sm:max-w-5/6 w-full mx-auto h-[70dvh]'>
          <LeaderCard />
          <ContactCard />
        </div>
      )}
    </Container>
  );
};

ContactsScreen.displayName = 'ContactsScreen';

export default React.memo(ContactsScreen);
