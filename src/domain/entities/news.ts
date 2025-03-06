interface IData {
  id: number;
  title: string;
  description: string;
  new_url: string;
  photo: string;
}

export interface INews {
  count: number;
  news: IData[];
}
