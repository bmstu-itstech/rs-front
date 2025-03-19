import type { IPartners } from '@/domain/entities/partners';
import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import type { HTMLAttributes } from 'react';

export default interface Props extends HTMLAttributes<HTMLDivElement>{
    
}

export interface IPCPartners {
  data: IPartners | undefined;
  router: AppRouterInstance;
  isLoading: boolean;
}