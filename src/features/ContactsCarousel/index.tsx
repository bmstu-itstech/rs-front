'use client';

import {memo} from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import LeaderCard from '../LeaderCard';
import ContactCard from '../ContactCard';
import {FC} from 'react';
import {useDotButton} from '@/hooks/useDotButtons';

const ContactsCarousel: FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({loop: true, align: 'center'});
  const {emblaDots} = useDotButton(emblaApi);
  const items = [<LeaderCard key={'leader'} />, <ContactCard key={'contacts'} />];

  return (
    <div className='carousel relative'>
      <div className='embla w-full' ref={emblaRef}>
        <div className='embla__container w-full h-[65dvh] lg:h-[min(63rem,60dvh)] mt-5'>
          {items.map((item, index) => {
            return (
              <div className='embla__slide w-full' key={index}>
                <div className='embla__slide-container h-full'>{item}</div>
              </div>
            );
          })}
        </div>
      </div>
      {emblaDots}
    </div>
  );
};

ContactsCarousel.displayName = 'ContactsCarousel';

export default memo(ContactsCarousel);
