'use client';

import {useEffect, useState} from 'react';
import {Container} from '@/shared';
import {Carousel} from '@/features';
import {NextPage} from 'next';
import {useGetNews} from '@/hooks/News/useGetNews';
// import {NewsPlaceholder} from '@/utilities/placeholders/news';
import { useIsMobile } from '@/hooks';

// import {news} from './News.usecase';

const NewsScreen: NextPage = () => {
  const [itemsCount, setItemsCount] = useState<number>(1);
  const {data, isLoading} = useGetNews();
  const isMobile = useIsMobile()
  useEffect(() => {
    setItemsCount(data?.count ?? 1);
  }, [isLoading, data?.count]);
  useEffect(() => {
    function computeCount() {
      const width = isMobile? window.innerWidth: window.innerWidth * window.devicePixelRatio;
      console.log(width, Math.max(1, Math.min(Math.floor(width / 500), 3)));
      return Math.max(1, Math.min(Math.floor(width / 500), 3));
    }

    setItemsCount(computeCount);
    window.onresize = () => setItemsCount(computeCount);
  }, [data, isLoading, isMobile]);

  return (
    <Container hasShadowBetween title='Новости' id='news'>
      <div className='flex justify-center items-center min-h-[50dvh] lg:min-h-fit h-full max-h-[65dvh]'>
        <Carousel
          itemsPerSlide={itemsCount}
          items={data?.results}
          isLoading={isLoading}
        />
      </div>
    </Container>
  );
};

NewsScreen.displayName = 'NewsScreen';

export default NewsScreen;
