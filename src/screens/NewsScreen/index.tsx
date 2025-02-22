'use client'

import "./style.css";
import {useEffect, useState} from "react";
import {Container} from "@/shared";
import {Carousel} from "@/features";
import {INews} from "@/types/News";
import {NextPage} from "next";
// import {EventsCarousel} from "@/features";


const news: INews[] = [
    {
        id: "1",
        title: "Мы на битве роботов!",
        description: `28 сентября команда «Гурманы» выступила
        на международном чемпионате «Битва Роботов» в Москве. Робот
        «Madcheese», собранный на базе Центра молодёжной робототехники,
        показал достойные результаты`,
        coverUrl: "/mock/news_1.png",
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
        coverUrl: "/mock/news_2.png",
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
        coverUrl: "/mock/news_3.png",
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
        coverUrl: "/mock/news_4.png",
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
        coverUrl: "/mock/news_5.png",
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
        coverUrl: "/mock/news_6.jpg",
        caption: "Узнать подробности",
        actionLink: "https://vk.com/wall-214718314_371",
        isDraft: false
    }
]

const NewsScreen: NextPage = () => {
    const [itemsCount, setItemsCount] = useState<number>(1);

    useEffect(() => {

        function computeCount() {
            const width = window.innerWidth * 0.9;
            return Math.max(1, Math.min(Math.floor(width / 500), 3));
        }

        setItemsCount(computeCount);
        window.onresize = () => setItemsCount(computeCount);
    }, []);

    return (
        <Container id="news">
            <div className="news">
                <div className="subtitle">Новости</div>
                <div className="news-carousel-container">
                    {/*<EventsCarousel itemsPerSlide={itemsCount} items={news}/>*/}
                    <Carousel itemsPerSlide={itemsCount} items={news}/>
                </div>
            </div>
        </Container>
    );

};

NewsScreen.displayName = "NewsScreen";

export default NewsScreen;