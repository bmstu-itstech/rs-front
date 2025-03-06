import {useQuery} from '@tanstack/react-query';
import {NewsPlaceholder} from '@/utilities/placeholders/news';
import {newsList} from '@/shared/apis/news/getNews';

export const useGetNews = (): any => {
  const {
    data: data,
    isLoading,
    refetch,
    error,
  } = useQuery({
    queryKey: ['news'],
    queryFn: newsList,
    placeholderData: NewsPlaceholder,
  });

  return {data, isLoading, refetch, error};
};
