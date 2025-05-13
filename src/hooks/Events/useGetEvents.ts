'use client';
import {useQuery} from '@tanstack/react-query';
import type {IEvents} from '@/domain/entities/events';
import {EventsList} from '@/shared/apis/events/getEvents';
// import {classicEventsPlaceholder} from '@/utilities/placeholders/classicEvents';

export const useGetEvents = () => {
  const {
    data: data,
    isLoading,
    refetch,
    error,
  } = useQuery<IEvents>({
    queryKey: ['Events'],
    queryFn: EventsList,
  });

  return {data, isLoading, refetch, error};
};
