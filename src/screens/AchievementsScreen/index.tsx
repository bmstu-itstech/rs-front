'use client';

import {useCallback, useState} from 'react';
import {Container} from '@/shared';
import {useIsMobile} from '@/hooks';
import {Achievement} from '@/features';
import {FC} from 'react';
import {useGetAchievements} from '@/hooks/Achievements/useGetAchievements';
import {
  MainAchievemtSkeleton,
  SubAchievemtSkeletonPC,
  CompactAchievemtSkeleton,
} from '@/features/Achievement/Achievement.skeleton';

const AchievementsScreen: FC = () => {
  const mobile = useIsMobile();
  const [active, setActive] = useState(1);
  const {data, isLoading} = useGetAchievements();

  const MainItemToShowPC = useCallback(() => {
    return isLoading || !data ? (
      <MainAchievemtSkeleton className='mb-12' />
    ) : (
      // <Achievement className='mb-12' key={active} {...data.results[active]} />
      <></>
    );
  }, [isLoading]);

  const SubItemsToShowPC = useCallback(() => {
    return isLoading || !data ? (
      <>
        <SubAchievemtSkeletonPC />
        <SubAchievemtSkeletonPC />
        <SubAchievemtSkeletonPC />
      </>
    ) : (
      <>
        {/* {data?.results
          .filter((v, index) => index !== active)
          .map((v, index) => (
            <Achievement
              compact
              className={`odd:flex-row-reverse `}
              {...v}
              key={index}
              onClick={() => handleActive(index)}
            />
          ))} */}
      </>
    );
  }, [isLoading]);

  const CompactItemsToShow = useCallback(() => {
    return isLoading || !data ? (
      <>
        <CompactAchievemtSkeleton />
        <CompactAchievemtSkeleton />
        <CompactAchievemtSkeleton />
      </>
    ) : (
      <>
        {/* {data?.results.map((v, index) => (
          <Achievement
            compact
            className={`odd:flex-row-reverse snap-start snap-always `}
            {...v}
            key={index}
            onClick={() => handleActive(index)}
          />
        ))} */}
      </>
    );
  }, [isLoading]);

  const handleActive = useCallback(
    (newId: number) => {
      if (!data?.results) return;
      const originalIndex = data.results.findIndex(
        (vm, index) => index === newId,
      );
      const activeIndex = data.results.findIndex(
        (v, index) => index === active,
      );

      if (originalIndex === -1 || activeIndex === -1) return;

      const updatedData = [...data.results];
      [updatedData[originalIndex], updatedData[activeIndex]] = [
        updatedData[activeIndex],
        updatedData[originalIndex],
      ];
      setActive(newId);
    },
    [data, active, mobile],
  );

  const PCAchivements = () => {
    return (
      <div className='flex flex-col h-full mx-auto w-full lg:w-[min(140rem,100%)]'>
        <MainItemToShowPC />
        <div
          className='
           flex-row auto-rows-[0px] overflow-hidden h-22r  lg:grid
          grid-cols-3 grid-rows-1 tems-start justify-center gap-x-12
         lg:gap-y-0'>
          <SubItemsToShowPC />
        </div>
      </div>
    );
  };

  const MobileAchievements = () => {
    return (
      <div
        className='flex-col max-h-2/3 snap-start snap-mandatory overflow-y-scroll
            flex items-center justify-start gap-y-12 scroll-smooth snap-y'>
        {<CompactItemsToShow />}
      </div>
    );
  };

  return (
    <Container hasShadowBetween title='Достижения' id='achievements'>
      {mobile ? <MobileAchievements /> : <PCAchivements />}
    </Container>
  );
};

AchievementsScreen.displayName = 'AchievementsScreen';

export default AchievementsScreen;
