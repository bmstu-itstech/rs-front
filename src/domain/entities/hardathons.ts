interface IData {
  id: number;
  title: string;
  href: string;
  background_image: string;
  date: string;
  start_date: string;
  end_date: string;
  result_date: string;
  place: string;
  media: string;
  projects: string;
  images: string;
  documents: string;
  partners: string;
  quote: string;
}

export interface IHardathons {
  count: number;
  next: string | null;
  previous: string | null;
  results: IData[];
}
