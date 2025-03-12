'use client';
import {useQuery} from '@tanstack/react-query';
import type {IQuestionnaire} from '@/domain/entities/questionnaire';
import {questionnaireList} from '@/shared/apis/questionnaires/getQuestionnaires';
import {questionnairesPlaceholder} from '@/utilities/placeholders/questionnaires';

export const useGetQuestionnaires = () => {
  const {
    data: data,
    isLoading,
    refetch,
    error,
  } = useQuery<IQuestionnaire>({
    queryKey: ['questionnaires'],
    queryFn: questionnaireList,
    placeholderData: questionnairesPlaceholder,
  });

  return {data, isLoading, refetch, error};
};
