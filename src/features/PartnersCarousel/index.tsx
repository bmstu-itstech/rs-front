'use client';

import {useState, useCallback, useEffect, memo, FC} from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import {IPartnersBit} from '@/domain/entities/partners';
import { PartnersCarouselItem } from '@/screens/PartnersScreen/components/PartnersCarouselItem';
// import {useIsMobile} from "@/hooks";

interface CarouselProps {
  items: IPartnersBit[];
}

const Carousel: FC<CarouselProps> = ({items}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({loop: true, align: 'center'});
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
    if (!emblaApi) return;
    emblaApi.scrollTo(index);
  };
  if (!items.length) return null;

  return (
    <div className='carousel relative'>
      <div className='embla w-full' ref={emblaRef}>
        <div className='embla__container w-full h-[50dvh] md:h-[min(630px,60dvh)] mt-5'>
          {items.map((item, index) => {
            return (
              <div className='embla__slide w-full' key={index}>
                <PartnersCarouselItem {...item} />
              </div>
            );
          })}
        </div>
      </div>
      <div className='carousel__dots !-bottom-12'>
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
