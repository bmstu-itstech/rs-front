'use client';
import {EventsCarousel} from '@/features';

import './style.css';
import {useGetEvents} from '@/hooks/Events/useGetEvents';
import {PageLayout} from '@/layouts/PageLayout';
import {useCallback} from 'react';
import {EventPageSkeleton} from '@/features/EventsCarousel/EventsCarousel.skeleton';
const EventsScreen = () => {
  const {data, isLoading} = useGetEvents();

  const EventsToShow = useCallback(() => {
    return isLoading || !data ? (
      <EventPageSkeleton />
    ) : (
      <EventsCarousel
        items={data.results}
        // itemsPerSlide={1}
        // count={data.count}
      />
    );
  }, [isLoading, data]);

  return (
    <PageLayout hasBg={false} className='!p-0' isDvh>
      <EventsToShow />
    </PageLayout>
  );
};

export default EventsScreen;
