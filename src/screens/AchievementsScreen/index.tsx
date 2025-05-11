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
  const [active, setActive] = useState(0);
  const {data, isLoading} = useGetAchievements();

  const handleActive = useCallback(
    (newId: number) => {
      setActive(newId);
    },
    [mobile, active],
  );

  const MainItemToShowPC = useCallback(() => {
    if (isLoading || !data) {
      return <MainAchievemtSkeleton className='mb-12' />;
    } else {
      const ActiveItem = data.results.find(item => item.id == active);
      return ActiveItem ? (
        <Achievement className='mb-12 flex-1/3' key={active} {...ActiveItem} />
      ) : (
        <Achievement className='mb-12 flex-1/3' key={active} {...data.results[0]} />
      );
    }
  }, [isLoading, active, data]);

  const SubItemsToShowPC = useCallback(() => {
    return isLoading || !data ? (
      <>
        <SubAchievemtSkeletonPC />
        <SubAchievemtSkeletonPC />
        <SubAchievemtSkeletonPC />
      </>
    ) : (
      <>
        {data?.results
          .filter(v1 => v1.id !== active)
          .map(v2 => (
            <Achievement
              compact
              className={`odd:flex-row-reverse `}
              {...v2}
              key={v2.id}
              onClick={() => {
                handleActive(v2.id);
              }}
            />
          ))}
      </>
    );
  }, [isLoading, active, data, handleActive]);

  const CompactItemsToShow = useCallback(() => {
    return isLoading || !data ? (
      <>
        <CompactAchievemtSkeleton />
        <CompactAchievemtSkeleton />
        <CompactAchievemtSkeleton />
      </>
    ) : (
      <>
        {data?.results.map((v, index) => (
          <Achievement
            compact
            className={`odd:flex-row-reverse snap-start snap-always `}
            {...v}
            key={index}
            onClick={() => handleActive(index)}
          />
        ))}
      </>
    );
  }, [isLoading, data, handleActive]);

  const PCAchivements = () => {
    return (
      <div className='flex flex-col  mx-auto w-full justify-center md:px-10 lg:px-10 xl:px-60 min-h-160 aspect-[2/1] max-h-250'>
        <MainItemToShowPC />
        <div
          className='
           flex-row auto-rows-[0px] overflow-hidden h-full flex-1 min-h-1/3  lg:grid
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
        className='flex-col max-h-2/3 snap-start snap-mandatory overflow-y-auto
            flex items-center justify-start gap-y-12 scroll-smooth snap-y'>
        {<CompactItemsToShow />}
      </div>
    );
  };

  return (
    <Container hasShadowBetween title='Достижения' id='achievements' LoadingScreen={<div>Загрузка...</div>}>
      {mobile ? <MobileAchievements /> : <PCAchivements />}
    </Container>
  );
};

AchievementsScreen.displayName = 'AchievementsScreen';

export default AchievementsScreen;
