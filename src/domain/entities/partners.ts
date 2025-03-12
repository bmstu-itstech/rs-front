export interface IPartnersBit {
  // id: number;
  title: string;
  link: string;
  photo: string;
}

export interface IPartners {
  count: number;
  total_count: number;
  next: string | null;
  partners: IPartnersBit[];
}
