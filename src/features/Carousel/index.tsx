'use client';

import './style.css';
import {memo, FC, useMemo} from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import {INewsBit} from '@/domain/entities/news';
import {NewsItem} from '@/entities';
import {NewsItemSkeleton} from '@/entities/NewsItem/NewsItem.skeleton';
import {useGroupNewsItems} from '@/hooks/groupNewsItems';
import {useDotButton} from '@/hooks/useDotButtons';
// import {useIsMobile} from "@/hooks";

interface CarouselProps {
  items: INewsBit[] | undefined;
  itemsPerSlide: number;
  isLoading: boolean;
}

const Carousel: FC<CarouselProps> = ({items, itemsPerSlide = 3, isLoading}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({loop: true, align: 'center'});
  const groupedSlides = useGroupNewsItems(items, itemsPerSlide);
  const {emblaDots} = useDotButton(emblaApi);

  const ItemsToShow = useMemo(() => {
    return isLoading || !items || items?.length === 0
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
          <div className='embla__slide !p-0 h-full' key={index}>
            <div className='embla__slide-container h-full'>
              {slideGroup.map(slide => (
                <NewsItem {...slide} key={slide.id} caption='Узнать подробности о мероприятии' />
              ))}
            </div>
          </div>
        ));
  }, [isLoading, items]);

  return (
    <div className='w-full overflow-hidden pb-8 relative  h-full  carousel'>
      <div className='embla h-full' ref={emblaRef}>
        <div className='embla__container h-full'>{ItemsToShow}</div>
      </div>
      {emblaDots}
    </div>
  );
};

Carousel.displayName = 'Carousel';

export default memo(Carousel);
