import {useQuery} from '@tanstack/react-query';
import {HardathonsPlaceholder} from '@/utilities/placeholders/hardathons';
import {hardathonsList} from '@/shared/apis/hardathons/getHardathons';

export const useGetHardathons = (): any => {
  const {
    data: data,
    isLoading,
    refetch,
    error,
  } = useQuery({
    queryKey: ['hardathons'],
    queryFn: hardathonsList,
    placeholderData: HardathonsPlaceholder,
  });

  return {data, isLoading, refetch, error};
};
