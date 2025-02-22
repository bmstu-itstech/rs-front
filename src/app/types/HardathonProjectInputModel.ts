export interface HardathonProjectInputModel {
    hardathonId: string;
    title: string;
    coverUrl: string;
    description: string;
    scopeUrl: string;
};

export interface IHardathonProject extends HardathonProjectInputModel {
    id: string;
};
