import axios from 'axios';
const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 1000,
  headers: {
    'X-Custom-Header': 'foobar',
    'Content-Type': 'application/json', // Убедитесь, что тип содержимого соответствует вашему запросу
    Accept: 'application/json', // Укажите, что ожидаете получить JSON
    // 'Origin': 'https://your-domain.com', // Добавьте этот заголовок, если это необходимо
  },
  withCredentials: true, // Убедитесь, что это значение true, если сервер требует аутентификации
});
export {client};
