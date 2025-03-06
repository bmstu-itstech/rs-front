import {useQuery} from '@tanstack/react-query';
import {AchievementsPlaceholder} from '@/utilities/placeholders/achievements';
import {achievementsList} from '@/shared/apis/achievements/getAchievements';

export const useGetAchievements = (): any => {
  const {
    data: data,
    isLoading,
    refetch,
    error,
  } = useQuery({
    queryKey: ['achievements'],
    queryFn: achievementsList,
    placeholderData: AchievementsPlaceholder,
  });

  return {data, isLoading, refetch, error};
};
