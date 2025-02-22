export interface EventInputModel {
  title: string;
  description: string;
  date: string;
  place: string;
  photos: string;
  mentions: string;
  docs: string;
}

export interface IEvent extends EventInputModel {
  id: string;
}
