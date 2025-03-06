interface IData {
  id: number;
  title: string;
  photo: string;
}

export interface IHardathons {
  count: number;
  hardathons: IData[];
}
