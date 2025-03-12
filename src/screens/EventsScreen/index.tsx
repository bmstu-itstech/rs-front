'use client';
import {EventsCarousel} from '@/features';
import {classicEventsPlaceholder} from '@/utilities/placeholders/classicEvents';
import './style.css';
import {useGetClassicEvents} from '@/hooks/ClassicEvents/useGetClassicEvents';
import { PageLayout } from '@/layouts/PageLayout';

const EventsScreen = () => {
  const {data} = useGetClassicEvents();
  return (
    <PageLayout>
      <EventsCarousel
        items={data?.classic_events ?? classicEventsPlaceholder.classic_events}
        itemsPerSlide={1}
      />
      <div id={'modal'}></div>
    </PageLayout>
  );
};

export default EventsScreen;
