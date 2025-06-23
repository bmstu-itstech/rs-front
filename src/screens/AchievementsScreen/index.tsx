'use client';
import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Container} from '@/shared';
import {Achievement} from '@/features';
import {FC} from 'react';
import {useGetAchievements} from '@/hooks/Achievements/useGetAchievements';
import {
  MainAchievemtSkeleton,
  SubAchievemtSkeletonPC,
  CompactAchievemtSkeleton,
} from '@/features/Achievement/Achievement.skeleton';
import React from 'react';
import bg_origin_2 from '@/assets/background_origin_2.jpg';
import ArrowButton from '@/shared/ArrowButton';

const AchievementsScreen: FC<{setPageToShow: () => void}> = ({setPageToShow}) => {
  const {data, isLoading} = useGetAchievements();
  const [activeId, setActiveId] = useState<number>(data?.results[0]?.id ?? 1);
  const itemRefs = useRef<Map<number, HTMLDivElement>>(new Map());

  const scrollToItem = useCallback((id: number) => {
    const item = itemRefs.current.get(id);
    if (item) {
      item.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  }, []);

  const scrollDown = useCallback(() => {
    if (!data?.results) return;

    const currentIndex = data.results.findIndex(item => item.id === activeId);
    if (currentIndex < data.results.length - 1) {
      const nextId = data.results[currentIndex + 1].id;
      setActiveId(nextId);
      scrollToItem(nextId);
    }
  }, [data, activeId, scrollToItem]);

  const handleActive = useCallback(
    (id: number) => {
      setActiveId(id);
      scrollToItem(id);
    },
    [scrollToItem],
  );

  const setItemRef = useCallback(
    (id: number) => (el: HTMLDivElement | null) => {
      if (el) {
        itemRefs.current.set(id, el);
      } else {
        itemRefs.current.delete(id);
      }
    },
    [],
  );

  const MainItemToShowPC = useMemo(() => {
    if (isLoading || !data || data.count === 0) {
      return <MainAchievemtSkeleton key={activeId} id={activeId.toString()} className='mb-12' />;
    }
    const ActiveItem = data.results.find(item => item.id === activeId);
    return ActiveItem ? (
      <Achievement className='mb-12 flex-1/3' key={activeId} {...ActiveItem} />
    ) : (
      <Achievement className='mb-12 flex-1/3' key={data.results[0].id} {...data.results[0]} />
    );
  }, [isLoading, activeId, data]);

  const SubItemsToShowPC = useMemo(() => {
    if (isLoading || !data || data.count === 0) {
      return (
        <>
          <SubAchievemtSkeletonPC />
          <SubAchievemtSkeletonPC />
          <SubAchievemtSkeletonPC />
        </>
      );
    }
    return (
      <>
        {data.results
          .filter(v1 => v1.id !== activeId)
          .map(v2 => (
            <Achievement
              compact
              className={`odd:flex-row-reverse`}
              {...v2}
              key={v2.id}
              onClick={() => handleActive(v2.id)}
            />
          ))}
      </>
    );
  }, [isLoading, activeId, data, handleActive]);

  const CompactItemsToShow = useMemo(() => {
    if (isLoading || !data) {
      return (
        <>
          <CompactAchievemtSkeleton />
          <CompactAchievemtSkeleton />
          <CompactAchievemtSkeleton />
        </>
      );
    }
    return data.results.map(v => (
      <Achievement
        compact
        ref={setItemRef(v.id)}
        className={`odd:flex-row-reverse snap-start snap-always`}
        {...v}
        key={v.id}
        onClick={() => handleActive(v.id)}
      />
    ));
  }, [isLoading, data, handleActive, setItemRef]);

  const PCAchivements = useMemo(() => {
    return (
      <div className='hidden lg:flex flex-col mx-auto w-full justify-center md:px-10 lg:px-10 xl:px-30 min-h-240 aspect-[2/1] max-h-280 2xl:max-h-300'>
        {MainItemToShowPC}
        <div className='flex-row auto-rows-[0px] overflow-hidden h-full flex-1 min-h-1/3 lg:grid grid-cols-3 grid-rows-1 items-start justify-center gap-x-12 lg:gap-y-0'>
          {SubItemsToShowPC}
        </div>
      </div>
    );
  }, [MainItemToShowPC, SubItemsToShowPC]);

  const MobileAchievements = useMemo(() => {
    return (
      <div className='flex-col h-full max-h-full overflow-y-hidden flex lg:hidden items-center justify-start gap-y-12 snap-y snap-mandatory'>
        {CompactItemsToShow}
        <div className='absolute bottom-0 w-full h-1/3 from-transparent to-black bg-gradient-to-b pointer-events-none'>
          <button
            onClick={scrollDown}
            className='absolute bottom-24 left-1/2 -translate-x-1/2 pointer-events-auto'>
            <ArrowButton className='!size-32 rotate-90' />
          </button>
        </div>
      </div>
    );
  }, [CompactItemsToShow, scrollDown]);

  return (
    <Container
      background={bg_origin_2.src}
      objectFit='fill'
      title='Достижения'
      id='achievements'
      onBecomeVisible={setPageToShow}>
      {MobileAchievements}
      {PCAchivements}
    </Container>
  );
};

AchievementsScreen.displayName = 'AchievementsScreen';
export default React.memo(AchievementsScreen);
