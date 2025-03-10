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
      // Создаем новый массив с изменёнными элементами
      const updatedData = [...data.achievements];
      [updatedData[originalIndex], updatedData[activeIndex]] = [
        updatedData[activeIndex],
        updatedData[originalIndex],
      ];
      setActive(newId);
    },
    [data, active, mobile],
  );

  return (
    <Container title='Достижения' id='achievements'>
      <div className='flex flex-col gap-y-12 md:gap-y-16  h-fit mx-auto w-full md:w-[min(1400px,94vw)]'>
        <Achievement
          id='1'
          key={active}
          {...(data?.achievements[active] ||
            AchievementsPlaceholder.achievements[0])}
        />
        <div className='flex-col md:flex-row flex items-center justify-center gap-x-16 gap-y-12'>
          {data?.achievements
            .filter((v, index) => index !== active)
            .slice(0, 3)
            .map((v, index) => (
              <Achievement
                compact
                id={`${index}`}
                className={`odd:flex-row-reverse`}
                {...v}
                key={index}
                onClick={() => handleActive(index)}
              />
            ))}
        </div>
      </div>
    </Container>
  );
};

AchievementsScreen.displayName = 'AchievementsScreen';

export default AchievementsScreen;
