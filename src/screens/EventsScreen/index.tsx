import {EventsCarousel} from "@/features";
import { data } from './EventsScreen.usecase';
import "./style.css";


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