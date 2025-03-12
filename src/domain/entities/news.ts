export interface INewsBit {
  // id: number;
  title: string;
  description: string;
  new_url: string;
  photo: string;
}

export interface INews {
  count: number;
  total_count: number;
  next: string | null;
  news: INewsBit[];
}
