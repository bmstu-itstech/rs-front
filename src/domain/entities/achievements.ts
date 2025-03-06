interface IData {
  id: number;
  title: string;
  description: string;
  photo_album_url: string;
  link_to_media: string;
  photo: string;
}

export interface IAchievements {
  count: number;
  data: IData[];
}
