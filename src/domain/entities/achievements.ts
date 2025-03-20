export interface IAchievementsBit {
  id: number;
  title: string;
  description: string;
  album_url: string;
  media_url: string;
  image: string | null;
}

export interface IAchievements {
  count: number;
  page_size: number;
  previous: string | null;
  next: string | null;
  results: IAchievementsBit[];
}
