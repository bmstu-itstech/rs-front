export interface AchievementItem {
    name: string;
    description: string;
    button: AcButton[];
    isDefault: boolean;
    imageUrl: string;
    id: number;
}
interface AcButton {
    label: string;
    url: string;
}