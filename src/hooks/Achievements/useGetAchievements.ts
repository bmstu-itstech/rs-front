'use client';
import {useQuery} from '@tanstack/react-query';
import {AchievementsPlaceholder} from '@/utilities/placeholders/achievements';
import {achievementsList} from '@/shared/apis/achievements/getAchievements';
import {IAchievements} from '@/domain/entities/achievements';

export const useGetAchievements = () => {
  const {
    data: data,
    isLoading,
    refetch,
    error,
  } = useQuery<IAchievements>({
    queryKey: ['achievements'],
    queryFn: achievementsList,
    placeholderData: AchievementsPlaceholder,
  });

  return {data, isLoading, refetch, error};
};
