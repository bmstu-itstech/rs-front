interface IData {
  title: string;
  description: string;
  photo_album_url: string;
  link_to_media: string;
  photo: string | null;
}

export interface IAchievements {
  count: number;
  len: number;
  next: string | null;
  achievements: IData[];
}
