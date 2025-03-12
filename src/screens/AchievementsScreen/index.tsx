'use client';

import {useCallback, useState} from 'react';
import {Container} from '@/shared';
import {useIsMobile} from '@/hooks';
import {Achievement} from '@/features';
import {FC} from 'react';
import {AchievementsPlaceholder} from '@/utilities/placeholders/achievements';
import {useGetAchievements} from '@/hooks/Achievements/useGetAchievements';

const AchievementsScreen: FC = () => {
  const mobile = useIsMobile();
  const [active, setActive] = useState(1);
  const {data} = useGetAchievements();

  const handleActive = useCallback(
    (newId: number) => {
      if (!data?.achievements) return;
      const originalIndex = data.achievements.findIndex(
        (vm, index) => index === newId,
      );
      const activeIndex = data.achievements.findIndex(
        (v, index) => index === active,
      );

      console.log(activeIndex, originalIndex);
      if (originalIndex === -1 || activeIndex === -1) return;

      const updatedData = [...data.achievements];
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
      <div className='flex flex-col gap-y-12 lg:gap-y-16  h-fit mx-auto w-full lg:w-[min(140rem,94vw)]'>
        <Achievement
          id='1'
          key={active}
          {...(data?.achievements[active] ||
            AchievementsPlaceholder.achievements[0])}
        />
        <div
          className='
           flex-row auto-rows-[0px] overflow-hidden h-22r  lg:grid
          grid-cols-3 grid-rows-1 tems-start justify-center gap-x-16
         lg:gap-y-0'>
          {(data ?? AchievementsPlaceholder).achievements
            .filter((v, index) => index !== active)
            .map((v, index) => (
              <Achievement
                compact
                id={`${index}`}
                className={`odd:flex-row-reverse `}
                {...v}
                key={index}
                onClick={() => handleActive(index)}
              />
            ))}
        </div>
      </div>
    );
  };

  const MobileAchievements = () => {
    return (
      <div
        className='flex-col max-h-2/3 snap-start snap-mandatory overflow-y-scroll
            flex items-center justify-start gap-y-12 scroll-smooth snap-y'>
        {data?.achievements.map((v, index) => (
          <Achievement
            compact
            id={`${index}`}
            className={`odd:flex-row-reverse snap-start snap-always `}
            {...v}
            key={index}
            onClick={() => handleActive(index)}
          />
        ))}
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
