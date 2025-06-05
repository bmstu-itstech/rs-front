'use client';
import {useEffect, useMemo, useState} from 'react';
import {Container} from '@/shared';
import {Carousel} from '@/features';
import {useGetNews} from '@/hooks/News/useGetNews';
import React from 'react';
import bg_origin_3 from '@/assets/background_origin_3.jpg'

const NewsScreen = ({setPageToShow}: {setPageToShow: () => void}) => {
  // console.log('Я загрузил news');
  const {data, isLoading} = useGetNews();

  const [itemsCount, setItemsCount] = useState<number>(1);
  const computeCount = () => {
    const availableWidth = window.innerWidth * 0.6;
    return Math.max(1, Math.min(Math.floor(availableWidth / 354), 3));
  };
  useEffect(() => {
    const handleResize = () => {
      setItemsCount(computeCount());
    };
    setItemsCount(computeCount());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const Content = useMemo(
    () => (
      <div className='flex justify-center items-center min-h-[50dvh] lg:min-h-fit h-full max-h-[65dvh]'>
        <Carousel itemsPerSlide={itemsCount} items={data?.results} isLoading={isLoading} />
      </div>
    ),
    [isLoading, itemsCount, data],
  );
  return (
    <Container
      background={bg_origin_3.src}
      // hasShadowBetween
      title='Новости'
      id='news'
      onBecomeVisible={setPageToShow}>
      {Content}
    </Container>
  );
};
NewsScreen.displayName = 'NewsScreen';
export default React.memo(NewsScreen);
