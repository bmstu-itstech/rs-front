export interface IEventsBit {
  id: number;
  name: string;
  description: string;
  date: string;
  media_url: string;
  album_url: string;
  on_map_url: string;
  docs_url: string;
  background_img: string;
  registration_url: string;
}

export interface IEvents {
  count: number;
  previous: string | null;
  next: string | null;
  results: IEventsBit[];
}
