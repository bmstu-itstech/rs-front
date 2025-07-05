'use client';
import {useMemo} from 'react';
import {Container} from '@/shared';
import {Carousel} from '@/features';
import {useGetNews} from '@/hooks/News/useGetNews';
import React from 'react';
import bg_origin_3 from '@/assets/background_origin_3.jpg';
import {useCountNewsItems} from '@/hooks/countNewsItems';

const NewsScreen = () => {
  const {data, isLoading} = useGetNews();
  const itemsCount = useCountNewsItems();

  const Content = useMemo(
    () => (
      <div className='flex justify-center items-center min-h-[50dvh] lg:min-h-fit h-full lg:max-h-[min(65dvh,60rem)] max-h-[min(75dvh,100rem)]'>
        <Carousel itemsPerSlide={itemsCount} items={data?.results} isLoading={isLoading} />
      </div>
    ),
    [isLoading, itemsCount, data],
  );
  return (
    <Container background={bg_origin_3.src} objectFit='fill' title='Новости' id='news'>
      {Content}
    </Container>
  );
};
NewsScreen.displayName = 'NewsScreen';
export default React.memo(NewsScreen);
