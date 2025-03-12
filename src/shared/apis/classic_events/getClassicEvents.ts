import {client} from '../axios';
import {IClassicEvents} from '@/domain/entities/classic_events';

const classicEventsList: () => Promise<IClassicEvents> = async () => {
  try {
    const response = await client.get(
      `${process.env.NEXT_PUBLIC_API_URL}api/v0/classic_events/?format=json`,
    );
    return response.data;
  } catch (error) {
    console.log('Ошибка при загрузке classic_events: ', error);
  }
};
export {classicEventsList};
