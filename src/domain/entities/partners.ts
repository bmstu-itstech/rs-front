export interface IPartnersBit {
  id: number;
  name: string;
  url: string;
  logo: string;
}

export interface IPartners {
  count: number;
  page_size: number;
  next: string | null;
  previous: string | null;
  results: IPartnersBit[];
}
