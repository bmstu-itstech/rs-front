'use client';

import './style.css';
import {useState, useCallback, useEffect, useMemo, memo, FC} from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import {INewsBit} from '@/domain/entities/news';
import {NewsItem} from '@/entities';
import {NewsItemSkeleton} from '@/entities/NewsItem/NewsItem.skeleton';
// import {useIsMobile} from "@/hooks";

function createGroup<T>(arr: T[], count: number): T[][] {
  if (count <= 0) {
    throw new Error('Count must be a positive number.');
  }

  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += count) {
    result.push(arr.slice(i, i + count));
  }
  return result;
}

interface CarouselProps {
  items: INewsBit[] | undefined;
  itemsPerSlide: number;
  isLoading: boolean;
}

const Carousel: FC<CarouselProps> = ({items, itemsPerSlide = 3, isLoading}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({loop: true, align: 'center'});
  const [selectedIndex, setSelectedIndex] = useState(0);

  const groupedSlides = useMemo(() => {
    if (!items) return [];
    return createGroup(items, itemsPerSlide);
  }, [items, itemsPerSlide]);

  const ItemsToShow = useCallback(() => {
    return isLoading || !items || items.length == 0
      ? [1, 2].map((_, index) => {
          return (
            <div className='embla__slide h-full' key={index}>
              <div className='embla__slide-container h-full'>
                <NewsItemSkeleton />
                <NewsItemSkeleton />
                <NewsItemSkeleton />
              </div>
            </div>
          );
        })
      : groupedSlides.map((slideGroup, index) => (
          <div className='embla__slide h-full' key={index}>
            <div className='embla__slide-container h-full'>
              {slideGroup.map((slide, idx) => (
                <NewsItem {...slide} key={idx} caption='Узнать подробности о мероприятии' />
              ))}
            </div>
          </div>
        ));
  }, [isLoading, itemsPerSlide, groupedSlides, items]);

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
  };

  return (
    <div className='w-full overflow-hidden pb-8 relative  h-full  carousel'>
      <div className='embla h-full' ref={emblaRef}>
        <div className='embla__container h-full'>
          <ItemsToShow />
        </div>
      </div>
      <div className='carousel__dots'>
        {emblaApi?.scrollSnapList().map((_, index) => {
          return (
            <button
              className={`carousel__dot ${
                selectedIndex === index ? 'carousel__dot--selected' : ''
              }`}
              key={index}
              onClick={() => scrollToIndex(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

Carousel.displayName = 'Carousel';

export default memo(Carousel);
