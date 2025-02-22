import { INews } from '@/app/types';
import test1 from '@/assets/news_1.png';
import test2 from '@/assets/news_2.png';
import test3 from '@/assets/news_3.png';
import test4 from '@/assets/news_4.png';
import test5 from '@/assets/news_5.png';
import test6 from '@/assets/news_6.jpg';

export const usecase_default: {
  items: INews[]
} = {
  items: [
    {
      id: "1",
      title: "Мы на битве роботов!",
      description: `28 сентября команда «Гурманы» выступила
      на международном чемпионате «Битва Роботов» в Москве. Робот
      «Madcheese», собранный на базе Центра молодёжной робототехники,
      показал достойные результаты`,
      coverUrl: test1.src,
      caption: "Узнать подробности",
      actionLink: "https://vk.com/wall-221273536_384",
      isDraft: false
    },
    {
      id: "2",
      title: "Бауманцы покоряют «Кубок РТК»",
      description: `В соревнованиях «Кубок РТК: Высшая лига» приняли
      участие 4 команды от Центра, одна из них заняла 2 место и
      теперь отправится на финал соревнований, который пройдёт в Сочи`,
      coverUrl: test2.src,
      caption: "Узнать подробности",
      actionLink: "https://vk.com/wall-214718314_349",
      isDraft: false
    },
    {
      id: "3",
      title: "Вперёд к победе на «Роснефти»!",
      description: `Команда «Временное решение» прошла в финал
      соревнований Хакатон программистов-робототехников «Роснефти».
      Они создали уникального робота, способного двигаться по вертикальным
      поверхностям!`,
      coverUrl: test3.src,
      caption: "Узнать подробности",
      actionLink: "https://vk.com/wall-214718314_70",
      isDraft: false
    },
    {
      id: "4",
      title: "Соревнования «Евробот»",
      description: `Команда «Айсберг» успешно выступила в Нижнем Новгороде.
      Они провели несколько дней, отлаживая робота, и в итоге набрали 42
      балла, заняв почётное место и получив номинацию «Командный дух»`,
      coverUrl: test4.src,
      caption: "Узнать подробности",
      actionLink: "https://vk.com/wall-214718314_353",
      isDraft: false
    },
    {
      id: "5",
      title: "Турнир «Битва роботов»",
      description: `Студенты продемонстрировали свои навыки, создав
      уникальных роботов, которые сражались в различных дисциплинах.
      Победителем стала команда «А что если?», которая поразила всех своим
      мастерством`,
      coverUrl: test5.src,
      caption: "Узнать подробности",
      actionLink: "https://vk.com/wall-214718314_366",
      isDraft: false
    },
    {
      id: "6",
      title: "Всероссийский форум «Архипелаг»",
      description: `Бауманцы поучаствовали в гонках на техническом
      симуляторе, а затем продемонстрировали свои навыки в реальных полётах
      в классе 200, несмотря на сложные погодные условия — дождь и туман.`,
      coverUrl: test6.src,
      caption: "Узнать подробности",
      actionLink: "https://vk.com/wall-214718314_371",
      isDraft: false
    }
  ]
};
