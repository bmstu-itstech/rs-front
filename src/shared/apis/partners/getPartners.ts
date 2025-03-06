import {client} from '../axios';
import { IPartners } from '@/domain/entities/partners';

const partnersList: () => Promise<IPartners> = async () => {
  try {
    const response = await client.get(
      `${process.env.NEXT_PUBLIC_API_URL}api/v0/partners/?format=json`,
    );
    return response.data;
  } catch (error) {
    console.log('Ошибка при загрузке partners: ', error);
  }
};
export {partnersList};
