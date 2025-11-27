'use client'

import {useState, useCallback, useEffect, useMemo, memo} from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import {IEvent, INews} from '@/types';
import Event from "./Event";
import {ArrowButton} from '@/shared';
import {useIsMobile} from '@/hooks';
import {NextPage} from "next";
import {NewsItem} from "@/entities";

function createGroup<T>(arr: T[], count: number): T[][] {
    if (count <= 0) {
        throw new Error("Count must be a positive number.");
    }
    const result: T[][] = [];
    for (let i = 0; i < arr.length; i += count) {
        result.push(arr.slice(i, i + count));
    }
    return result;
}

const isEvent = (item: IEvent | INews): item is IEvent => {
    return 'mentions' in item;
};

interface CarouselProps {
    items: IEvent[] | INews[],
    itemsPerSlide: number;
}

const Carousel: NextPage<CarouselProps> = ({items, itemsPerSlide = 3}) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true, align: 'center'});
    const [selectedIndex, setSelectedIndex] = useState(0);
    const mobile = useIsMobile();

    const groupedSlides = useMemo(() => {
        return createGroup(items as (IEvent | INews)[], itemsPerSlide);
    }, [items, itemsPerSlide]);


    const handleSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);


    useEffect(() => {
        if (!emblaApi) return;
        handleSelect();
        emblaApi.on('select', handleSelect);
        emblaApi.on('pointerUp', handleSelect);
        return () => {
            emblaApi.off('select', handleSelect);
            emblaApi.off('pointerUp', handleSelect);
        };
    }, [emblaApi, handleSelect]);

    const scrollToIndex = (index: number) => {
        if (!emblaApi) return;
        emblaApi.scrollTo(index);
    }

    const isEventsType = useMemo(() => {
        return items.length > 0 && isEvent(items[0]);
    }, [items]);

    if (!items.length) return null;
    return (
        <div className="carousel events-carousel">
            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    {groupedSlides.map((slideGroup, index) => (
                        <div className="embla__slide" key={index}>
                            <div className="embla__slide-container" style={{width: "75vw"}}>
                                {isEventsType ?
                                    (slideGroup as IEvent[]).map((slide) => (
                                        <div className="event-container" key={slide.id}>
                                            <Event {...slide} />
                                        </div>
                                    ))
                                    :
                                    (slideGroup as INews[]).map((slide) => (
                                        <NewsItem {...slide} key={slide.id} />
                                    ))
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="events-button-left">
                {!mobile && <ArrowButton direction="left" onClick={() => emblaApi?.scrollPrev()}/>}
            </div>
            <div className="events-button-right">
                {!mobile && <ArrowButton direction="right" onClick={() => emblaApi?.scrollNext()}/>}
            </div>

            <div className="carousel__dots">
                {emblaApi?.scrollSnapList().map((_, index) => {
                    return <button
                        className={`carousel__dot ${selectedIndex === index ? 'carousel__dot--selected' : ''}`}
                        key={index}
                        onClick={() => scrollToIndex(index)}
                    />
                })}
            </div>
        </div>
    );
};

Carousel.displayName = "Carousel";

export default memo(Carousel);