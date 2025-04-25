import type { IPartners } from '@/domain/entities/partners';
import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import type { HTMLAttributes } from 'react';

export type Props = HTMLAttributes<HTMLDivElement>;

export interface IPCPartners {
  data: IPartners;
  router: AppRouterInstance;
  isLoading: boolean;
}