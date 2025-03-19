'use client';
import {useQuery} from '@tanstack/react-query';
import {PartnersPlaceholder} from '@/utilities/placeholders/partners';
import {partnersList} from '@/shared/apis/partners/getPartners';
import type { IPartners } from '@/domain/entities/partners';

export const useGetPartners = () => {
  const {
    data: data,
    isLoading,
    refetch,
    error,
  } = useQuery<IPartners>({
    queryKey: ['partners'],
    queryFn: partnersList,
    // placeholderData: PartnersPlaceholder,
  });

  return {data, isLoading, refetch, error};
};
