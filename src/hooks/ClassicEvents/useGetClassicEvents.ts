'use client';
import {useQuery} from '@tanstack/react-query';
import type {IClassicEvents} from '@/domain/entities/classic_events';
import {classicEventsList} from '@/shared/apis/classic_events/getClassicEvents';
import {classicEventsPlaceholder} from '@/utilities/placeholders/classicEvents';

export const useGetClassicEvents = () => {
  const {
    data: data,
    isLoading,
    refetch,
    error,
  } = useQuery<IClassicEvents>({
    queryKey: ['classicEvents'],
    queryFn: classicEventsList,
    placeholderData: classicEventsPlaceholder,
  });

  return {data, isLoading, refetch, error};
};
