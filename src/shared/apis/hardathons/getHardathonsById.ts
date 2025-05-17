import {client} from '../axios';
import {type IHardathonsBit} from '@/domain/entities/hardathons';
const hardathonsListById: (id: number) => Promise<IHardathonsBit> = async (id: number) => {
  try {
    const response = await client.get(
      `${process.env.NEXT_PUBLIC_API_URL}api/v0/hardathons/${id}/?format=json`,
    );
    return response.data;
  } catch (error) {
    console.log('Ошибка при загрузке hardathonsBit: ', error);
  }
};
export {hardathonsListById};
