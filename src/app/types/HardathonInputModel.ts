export interface HardathonInputModel {
    title: string;
    coverUrl: string;
    startDate: string;
    endDate: string;
    resultsDate: string;
    place: string;
    media: string[];
    photos: string[];
    docs: string[];
    partners: string[];
    rulesUrl: string;
    text: string;
    avatarUrl: string;
};

export interface IHardathon extends HardathonInputModel {
    id: string;
};
