'use client';

import {useCallback, useState} from 'react';
import {Container} from '@/shared';
import {useIsMobile} from '@/hooks';
import {Achievement} from '@/features';
import {FC} from 'react';
import {achievements} from './AchievementsScreen.usecase';

const AchievementsScreen: FC = () => {
  const mobile = useIsMobile();
  const [active, setActive] = useState('1');

  const handleActive = useCallback(
    (newId: string) => {
      const originalIndex = achievements.findIndex(v => v.id === newId);
      const activeIndex = achievements.findIndex(v => v.id === active);
      [achievements[originalIndex], achievements[activeIndex]] = [
        achievements[activeIndex],
        achievements[originalIndex],
      ];
      setActive(newId);
    },
    [mobile, active],
  );

  return (
    <Container title='Достижения' id='achievements'>
      <div className='flex flex-col gap-y-12 md:gap-y-16  h-fit mx-auto w-full md:w-[min(1400px,94vw)]'>
        <Achievement key={active} {...achievements[0]} />
        <div className='flex-col md:flex-row flex items-center justify-center gap-x-16 gap-y-12'>
          {achievements
            .filter(v => v.id !== active)
            .map(v => (
              <Achievement
                compact
                className={`odd:flex-row-reverse`}
                {...v}
                key={v.id}
                onClick={() => handleActive(v.id)}
              />
            ))}
        </div>
      </div>
    </Container>
  );
};

AchievementsScreen.displayName = 'AchievementsScreen';

export default AchievementsScreen;
