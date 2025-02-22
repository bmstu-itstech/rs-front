'use client'

import { useState, useCallback, useEffect, memo } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import LeaderCard from "../LeaderCard";
import ContactCard from "../ContactCard";
import {FC} from "react";

const ContactsCarousel: FC = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
    const [selectedIndex, setSelectedIndex] = useState(0);


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
    if(!emblaApi) return;

      emblaApi.scrollTo(index);
    }

    return (
        <div className="carousel">
            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    <div className="embla__slide" key="slide1">
                        <div className="embla__slide-container">
                            <LeaderCard />
                        </div>
                    </div>
                    <div className="embla__slide" key="slide2">
                        <div className="embla__slide-container">
                            <ContactCard />
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel__dots">
                {emblaApi?.scrollSnapList().map((_,index) => {
                    return (
                        <button
                            className={`carousel__dot ${selectedIndex === index? 'carousel__dot--selected': ''}`}
                            key={index}
                            onClick={() => scrollToIndex(index)}
                        />
                    )
                })}
            </div>
        </div>
    );
};

ContactsCarousel.displayName = "ContactsCarousel";

export default memo(ContactsCarousel);

