interface IData {
  id: number;
  title: string;
  link: string;
  photo: string;
}

export interface IPartners {
  count: number;
  partners: IData[];
}
