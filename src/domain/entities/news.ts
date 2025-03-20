export interface INewsBit {
  id: number;
  title: string;
  content: string;
  image: string;
  href: string;
}

export interface INews {
  count: number;
  page_size: number;
  previous: string | null;
  next: string | null;
  results: INewsBit[];
}
