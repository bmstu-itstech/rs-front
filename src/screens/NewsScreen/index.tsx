'use client';

import {useEffect, useState} from 'react';
import {Container} from '@/shared';
import {Carousel} from '@/features';
import {NextPage} from 'next';
import {news} from './News.usecase';

const NewsScreen: NextPage = () => {
  const [itemsCount, setItemsCount] = useState<number>(1);

  useEffect(() => {
    function computeCount() {
      const width = window.innerWidth * 0.9;
      return Math.max(1, Math.min(Math.floor(width / 500), 3));
    }

    setItemsCount(computeCount);
    window.onresize = () => setItemsCount(computeCount);
  }, []);

  return (
    <Container title='Новости' id='news'>
      <div className='flex justify-center items-center min-h-[50dvh] md:min-h-fit h-96 max-h-[80dvh]]'>
        <Carousel itemsPerSlide={itemsCount} items={news} />
      </div>
    </Container>
  );
};

NewsScreen.displayName = 'NewsScreen';

export default NewsScreen;
