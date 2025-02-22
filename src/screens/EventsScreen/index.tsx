import {EventsCarousel} from "@/features";
import {IEvent} from "@/types";

import "./style.css";

const data: IEvent[] = [
    {
        id: "1",
        title: "Хардатон «Инженерный вызов»",
        description: `
      Подробное описание того, что за мероприятие,
      зачем оно нужно и почему оно важно
    `,
        photos: "",
        mentions: "",
        docs: "",
        date: "20.01.2025",
        place: "https://maps.yandex.ru"
    },
    {
        id: "2",
        title: "Хардатон «Инженерный вызов 2»",
        description: `
      Подробное описание того, что за мероприятие,
      зачем оно нужно и почему оно важно
    `,
        photos: "",
        mentions: "",
        docs: "",
        date: "20.01.2025",
        place: "https://maps.yandex.ru"
    },
];

const EventsScreen = () => {
    return (
        <div className="events-screen">
            <EventsCarousel items={data} itemsPerSlide={1} >
            </EventsCarousel>
            <div id={'modal'}></div>
        </div>
    );
}

export default EventsScreen;