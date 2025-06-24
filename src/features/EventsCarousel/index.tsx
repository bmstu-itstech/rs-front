'use client';
import {memo} from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Event from './components/EventItem';
import {ArrowButton} from '@/shared';
import {NextPage} from 'next';
import Props from './EventsCarousel.props';
import { useDotButton } from '@/hooks/useDotButtons';

const Carousel: NextPage<Props> = ({items}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({loop: true, align: 'center'});
  const {emblaDots} = useDotButton(emblaApi);

  return (
    <div className='embla h-full relative' ref={emblaRef}>
      <div className='embla__container h-full'>
        {items.map((item) => (
          <div
            className='embla__slide max-w-[calc(100dvw-30rem)] min-h-[51vh] lg:!py-12 w-full h-full z-10  overflow-hidden'
            key={item.id}
            style={{
              backgroundImage: `url(${item.background_img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>
            <div className='absolute -z-10 top-0 left-0 h-full w-full bg-black opacity-75' />
            <div className='absolute top-1/2  left-0 hidden lg:block px-12 lg:px-20 cursor-pointer'>
              <ArrowButton
                direction='left'
                className='translate-x-1/2 cursor-pointer'
                onClick={() => {
                  emblaApi?.scrollPrev();
                }}
              />
            </div>
            <div className='absolute top-1/2  right-0 hidden lg:block px-12 lg:px-20 cursor-pointer'>
              <ArrowButton
                direction='right'
                className='-translate-x-1/2 cursor-pointer'
                onClick={() => {
                  emblaApi?.scrollNext();
                }}
              />
            </div>
            <Event item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};
Carousel.displayName = 'Carousel';
export default memo(Carousel);
