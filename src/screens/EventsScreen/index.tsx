'use client';
import {EventsCarousel} from '@/features';
import {classicEventsPlaceholder} from '@/utilities/placeholders/classicEvents';
import './style.css';
import {useGetClassicEvents} from '@/hooks/ClassicEvents/useGetClassicEvents';
import {PageLayout} from '@/layouts/PageLayout';
import {useState} from 'react';
import background_default from '@/assets/background_original.jpeg';

const EventsScreen = () => {
  const {data} = useGetClassicEvents();
  const [bg, setBg] = useState(background_default.src);
  return (
    <PageLayout background={bg}>
      <EventsCarousel
        items={data?.classic_events ?? classicEventsPlaceholder.classic_events}
        itemsPerSlide={1}
        onBackgroundChange = {setBg}
      />
      <div id={'modal'}></div>
    </PageLayout>
  );
};

export default EventsScreen;
