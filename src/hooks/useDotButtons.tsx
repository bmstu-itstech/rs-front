import React, {useCallback, useEffect, useState} from 'react';
import {UseEmblaCarouselType} from 'embla-carousel-react';

type UseDotButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
  emblaDots: React.ReactElement;
};

export const useDotButton = (emblaApi: UseEmblaCarouselType[1] | undefined): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi],
  );

  const onInit = useCallback((api: UseEmblaCarouselType[1]) => {
    if (!api) return;
    setScrollSnaps(api.scrollSnapList());
  }, []);

  const onSelect = useCallback((api: UseEmblaCarouselType[1]) => {
    if (!api) return;
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  const emblaDots = (
    <div className='embla__dots mx-auto w-fit mt-4'>
      {scrollSnaps.map((_, index) => {
        return (
          <button
            key={index}
            className={`carousel__dot ${selectedIndex === index ? 'carousel__dot--selected' : ''}`}
            onClick={() => onDotButtonClick(index)}
          />
        );
      })}
    </div>
  );

  return {
    emblaDots,
    scrollSnaps,
    onDotButtonClick,
    selectedIndex,
  };
};
