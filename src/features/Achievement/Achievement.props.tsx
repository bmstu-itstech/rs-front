import type {HTMLAttributes} from 'react';
import {IAchievementsBit} from '@/domain/entities/achievements';
export default interface Props
  extends IAchievementsBit,
    Omit<HTMLAttributes<HTMLDivElement>, 'id' | 'title'> {
  compact?: boolean;
}
