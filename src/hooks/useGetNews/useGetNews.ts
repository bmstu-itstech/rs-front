import {useQuery} from '@tanstack/react-query';
import { NewsPlaceholder } from '@/utilities/placeholders/news';
import {accessList} from '@/shared/apis/access/getAccessData';

export const useGetAccess = (): any => {
  const {
    data: accessData,
    isLoading,
    refetch,
    error,
  } = useQuery({
    queryKey: ['access'],
    queryFn: () => {
      accessList();
    },
    placeholderData: () => {
      access;
    },
  });

  return {accessData, isLoading, refetch, error};
};
