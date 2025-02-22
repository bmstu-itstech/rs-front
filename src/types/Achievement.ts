export interface AchievementInputModel {
    title: string;
    description: string;
    coverUrl: string;
    photoUrl: string;
    mediaUrl: string;
}

export interface IAchievement extends AchievementInputModel {
    id: string;
}
