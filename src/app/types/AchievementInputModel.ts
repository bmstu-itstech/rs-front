export interface AchievementInputModel {
    title: string;
    description: string;
    coverUrl: string;
    photos: string[];
    media: string[];
};

export interface IAchievement extends AchievementInputModel {
    id: string;
};
