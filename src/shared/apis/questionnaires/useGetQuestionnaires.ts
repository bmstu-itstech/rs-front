import {client} from '../axios';
import {IQuestionnaire} from '@/domain/entities/questionnaire';

const questionnaireList: () => Promise<IQuestionnaire> = async () => {
  try {
    const response = await client.get(
      `${process.env.NEXT_PUBLIC_API_URL}api/v0/questionnaire/?format=json`,
    );
    return response.data;
  } catch (error) {
    console.log('Ошибка при загрузке questionnaire: ', error);
  }
};
export {questionnaireList};
