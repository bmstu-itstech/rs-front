import {useQuery} from '@tanstack/react-query';
import { PartnersPlaceholder } from '@/utilities/placeholders/partners';
import { partnersList } from '@/shared/apis/partners/getPartners';

export const useGetPartners = (): any => {
  const {
    data: data,
    isLoading,
    refetch,
    error,
  } = useQuery({
    queryKey: ['partners'],
    queryFn: partnersList,
    placeholderData: PartnersPlaceholder,
  });

  return {data, isLoading, refetch, error};
};
