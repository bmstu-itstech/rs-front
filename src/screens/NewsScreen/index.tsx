'use client'

import "./style.css";
import {useEffect, useState} from "react";
import {Container} from "@/shared";
import {Carousel} from "@/features";
import {NextPage} from "next";
import { news } from './News.usecase';



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