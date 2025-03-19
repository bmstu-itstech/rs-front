'use client';
import {useQuery} from '@tanstack/react-query';
import {NewsPlaceholder} from '@/utilities/placeholders/news';
import {newsList} from '@/shared/apis/news/getNews';
import type { INews } from '@/domain/entities/news';

export const useGetNews = () => {
  const {
    data: data,
    isLoading,
    refetch,
    error,
  } = useQuery<INews>({
    queryKey: ['news'],
    queryFn: newsList,
    // placeholderData: NewsPlaceholder,
  });

  return {data, isLoading, refetch, error};
};
