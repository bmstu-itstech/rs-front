import {client} from '../axios';
import {IAchievements} from '@/domain/entities/achievements';
const achievementsList: () => Promise<IAchievements> = async () => {
  try {
    const response = await client.get(
      `${process.env.NEXT_PUBLIC_API_URL}api/v0/achievements/?format=json&limit=10`,
    );
    return response.data;
  } catch (error) {
    console.log('Ошибка при загрузке Achievements: ', error);
  }
};
export {achievementsList};
