export interface IQuestionnaireBit {
  // id:number;
  searcher_fio: string;
}

export interface IQuestionnaire {
  count: number;
  total_count: number;
  next: string | null;
  questionnaires: IQuestionnaireBit[];
}
