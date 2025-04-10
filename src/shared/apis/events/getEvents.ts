import {client} from '../axios';
import {IEvents} from '@/domain/entities/events';

const EventsList: () => Promise<IEvents> = async () => {
  try {
    const response = await client.get(
      `${process.env.NEXT_PUBLIC_API_URL}api/v0/events/`,
    );
    return response.data;
  } catch (error) {
    console.log('Ошибка при загрузке events: ', error);
  }
};
export {EventsList};
