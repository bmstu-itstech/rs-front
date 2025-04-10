'use client';
import {useState, useCallback, useEffect, memo} from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Event from './components/EventItem';
import {ArrowButton} from '@/shared';
import {NextPage} from 'next';
import Props from './EventsCarousel.props';
import no_bg from '@/assets/no_photo.jpg';
const Carousel: NextPage<Props> = ({
  items,
  count,
  onBackgroundChange,
  itemsPerSlide = 3,
}) => {
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
  console.log(items)
  return (
    <div className='embla relative h-full max-h-11/12' ref={emblaRef}>
      <div className='embla__container h-full'>
        {items.map((item, index) => (
          <div
            className='embla__slide max-w-[calc(100dvw-30rem)] min-h-[51vh] lg:!px-46 lg:!py-12 w-full h-full'
            key={index}>
            <Event item={item} selected={index === selectedIndex} />
          </div>
        ))}
      </div>
      <div className='absolute top-1/2 left-0 hidden lg:block'>
        <ArrowButton
          direction='left'
          onClick={() => {
            // emblaApi?.scrollPrev();
            // onBackgroundChange(
            //   items[
            //     selectedIndex - 1 >= 0 ? selectedIndex - 1 : count - 1
            //   ].photo ?? no_bg.src,
            // );
          }}
        />
      </div>
      <div className='absolute top-1/2 right-0 hidden lg:block'>
        <ArrowButton
          direction='right'
          onClick={() => {
            emblaApi?.scrollNext();

            // onBackgroundChange(
            //   items[(selectedIndex + 1) % count].photo ?? no_bg.src,
            // );
          }}
        />
      </div>
      <div className='carousel__dots'>
        {emblaApi?.scrollSnapList().map((_, index) => {
          return (
            <button
              className={`carousel__dot ${
                selectedIndex === index ? 'carousel__dot--selected' : ''
              }`}
              key={index}
              onClick={() => {
                scrollToIndex(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
Carousel.displayName = 'Carousel';
export default memo(Carousel);
