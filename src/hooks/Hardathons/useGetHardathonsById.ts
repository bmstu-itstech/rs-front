'use client';
import {useQuery} from '@tanstack/react-query';
import type {IHardathonsBit} from '@/domain/entities/hardathons';
import {hardathonsListById} from '@/shared/apis/hardathons/getHardathonsById';

export const useGetHardathonsById = (id: number) => {
  const {
    data: data,
    isLoading,
    refetch,
    error,
  } = useQuery<IHardathonsBit>({
    queryKey: ['hardathonsBit'],
    queryFn: () => hardathonsListById(id),
  });

  return {data, isLoading, refetch, error};
};
