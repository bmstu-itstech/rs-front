'use client';
import {EventsCarousel} from '@/features';
import {classicEventsPlaceholder} from '@/utilities/placeholders/classicEvents';
import './style.css';
import {useGetEvents} from '@/hooks/Events/useGetEvents';
import {PageLayout} from '@/layouts/PageLayout';
import {useCallback, useState} from 'react';
import background_default from '@/assets/background_original.jpeg';
import {EventPageSkeleton} from '@/features/EventsCarousel/EventsCarousel.skeleton';
const EventsScreen = () => {
  const {data, isLoading} = useGetEvents();
  const [bg, setBg] = useState(background_default.src);

  const EventsToShow = useCallback(() => {
    return isLoading || !data  ? (
      <EventPageSkeleton />
    ) : (
      <EventsCarousel
        items={data.results}
        itemsPerSlide={1}
        count={data.count}
        onBackgroundChange={setBg}
      />
    );
  }, [isLoading, data]);
  console.log(data)
  return (
    <PageLayout background={bg}>
      <EventsToShow />
      <div id={'modal'}></div>
    </PageLayout>
  );
};

export default EventsScreen;
