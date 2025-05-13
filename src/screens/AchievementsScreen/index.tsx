'use client';
import {useCallback, useDebugValue, useMemo, useState} from 'react';
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
const AchievementsScreen: FC<{setPageToShow: () => void}> = ({setPageToShow}) => {
  // useDebugValue('AchievementsScreen render');
  // console.log('я отрисовал achievements');

  const [active, setActive] = useState(0);
  const {data, isLoading} = useGetAchievements();
  const handleActive = useCallback((newId: number) => {
    setActive(newId);
  }, []);
  const MainItemToShowPC = useMemo(() => {
    if (isLoading || !data) {
      return <MainAchievemtSkeleton className='mb-12' />;
    } else {
      const ActiveItem = data.results.find(item => item.id === active);
      return ActiveItem ? (
        <Achievement className='mb-12 flex-1/3' key={active} {...ActiveItem} />
      ) : (
        <Achievement className='mb-12 flex-1/3' key={data.results[0].id} {...data.results[0]} />
      );
    }
  }, [isLoading, active, data]);
  const SubItemsToShowPC = useMemo(() => {
    if (isLoading || !data) {
      return (
        <>
          <SubAchievemtSkeletonPC />
          <SubAchievemtSkeletonPC />
          <SubAchievemtSkeletonPC />
        </>
      );
    } else {
      return (
        <>
          {data.results
            .filter(v1 => v1.id !== active)
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
    }
  }, [isLoading, active, data, handleActive]);
  const CompactItemsToShow = useMemo(() => {
    if (isLoading || !data) {
      return (
        <>
          <CompactAchievemtSkeleton />
          <CompactAchievemtSkeleton />
          <CompactAchievemtSkeleton />
        </>
      );
    } else {
      return (
        <>
          {data.results.map((v, index) => (
            <Achievement
              compact
              className={`odd:flex-row-reverse snap-start snap-always`}
              {...v}
              key={v.id}
              onClick={() => handleActive(v.id)}
            />
          ))}
        </>
      );
    }
  }, [isLoading, data, handleActive]);
  const PCAchivements = useMemo(() => {
    return (
      <div className='hidden lg:flex flex-col mx-auto w-full justify-center md:px-10 lg:px-10 xl:px-60 min-h-160 aspect-[2/1] max-h-250'>
        {MainItemToShowPC}
        <div className='flex-row auto-rows-[0px] overflow-hidden h-full flex-1 min-h-1/3 lg:grid grid-cols-3 grid-rows-1 items-start justify-center gap-x-12 lg:gap-y-0'>
          {SubItemsToShowPC}
        </div>
      </div>
    );
  }, [MainItemToShowPC, SubItemsToShowPC]);
  const MobileAchievements = useMemo(() => {
    return (
      <div className='flex-col max-h-2/3 snap-start snap-mandatory overflow-y-auto flex lg:hidden items-center justify-start gap-y-12 scroll-smooth snap-y'>
        {CompactItemsToShow}
      </div>
    );
  }, [CompactItemsToShow]);
  return (
    <Container
      hasShadowBetween
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
