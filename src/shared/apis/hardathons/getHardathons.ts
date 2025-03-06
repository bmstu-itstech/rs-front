import {client} from '../axios';
import { IHardathons } from '@/domain/entities/hardathons';
const hardathonsList: () => Promise<IHardathons> = async () => {
  try {
    const response = await client.get(
      `${process.env.NEXT_PUBLIC_API_URL}api/v0/hardathons/?format=json`,
    );
    return response.data;
  } catch (error) {
    console.log('Ошибка при загрузке hardathons: ', error);
  }
};
export {hardathonsList};
