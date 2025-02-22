'use client'

import "./style.css";
import {useState, useCallback, useEffect, useMemo, memo, FC} from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { INews } from '@/types';
import { NewsItem } from '@/entities';
// import {useIsMobile} from "@/hooks";

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

interface CarouselProps {
    items: INews[],
    itemsPerSlide: number;
}

const Carousel: FC<CarouselProps> = ({ items, itemsPerSlide = 3 }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
    const [selectedIndex, setSelectedIndex] = useState(0);
    // const mobile = useIsMobile();

    const groupedSlides = useMemo(() => {
        return createGroup(items, itemsPerSlide);
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
    if(!emblaApi) return;
      emblaApi.scrollTo(index);
    }
    if(!items.length) return null;

    return (
        <div className="carousel">
            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    {groupedSlides.map((slideGroup, index) => (
                        <div className="embla__slide" key={index}>
                            <div className="embla__slide-container">
                                {slideGroup.map((slide, idx) => <NewsItem {...slide} key={idx} />)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="carousel__dots">
                {emblaApi?.scrollSnapList().map((_,index) => {
                    return <button className={`carousel__dot ${selectedIndex === index? 'carousel__dot--selected': ''}`}
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