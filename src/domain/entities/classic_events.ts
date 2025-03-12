interface IClassicEventsBit {
  title: string;
  photo: string | null;
}

export interface IClassicEvents {
  count: number;
  total_count: number;
  next: string | null;
  classic_events: IClassicEventsBit[];
}
