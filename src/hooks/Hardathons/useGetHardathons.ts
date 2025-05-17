'use client';
import {useQuery} from '@tanstack/react-query';
import {hardathonsList} from '@/shared/apis/hardathons/getHardathons';
import type {IHardathons} from '@/domain/entities/hardathons';

export const useGetHardathons = () => {
  const {
    data: data,
    isLoading,
    refetch,
    error,
  } = useQuery<IHardathons>({
    queryKey: ['hardathons'],
    queryFn: hardathonsList,
  });

  return {data, isLoading, refetch, error};
};
