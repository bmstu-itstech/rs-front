import {client} from '../axios';
import {INews} from '@/domain/entities/news';
const newsList: () => Promise<INews> = async () => {
  try {
    const response = await client.get(
      `${process.env.NEXT_PUBLIC_API_URL}api/v0/news/?format=json&limit=10`,
    );
    return response.data;
  } catch (error) {
    console.log('Ошибка при загрузке News: ', error);
  }
};
export {newsList};
