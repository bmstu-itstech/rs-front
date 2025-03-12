export interface IQuestionnaireBit {
  searcher_fio: string;
}

export interface IQuestionnaire {
  count: number;
  total_count: number;
  next: string | null;
  questionnaires: IQuestionnaireBit[];
}
