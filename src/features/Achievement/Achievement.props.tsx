import type {HTMLAttributes, RefObject} from 'react';
import {IAchievementsBit} from '@/domain/entities/achievements';
export default interface Props
  extends IAchievementsBit,
    Omit<HTMLAttributes<HTMLDivElement>, 'id' | 'title'> {
  compact?: boolean;
}
