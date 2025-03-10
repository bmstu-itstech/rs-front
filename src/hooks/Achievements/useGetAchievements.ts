'use client';
import {useQuery, type RefetchOptions} from '@tanstack/react-query';
import {AchievementsPlaceholder} from '@/utilities/placeholders/achievements';
import {achievementsList} from '@/shared/apis/achievements/getAchievements';
import {IAchievements} from '@/domain/entities/achievements';

// interface AchievementsReturnValue {
//   data: IAchievements | undefined;
//   isLoading: boolean;
//   refetch: RefetchOptions | undefined;
//   error: Error | null;
// }

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
