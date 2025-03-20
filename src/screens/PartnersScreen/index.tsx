'use client';

// import { photos } from './Partners.usecase';
import {useGetPartners} from '@/hooks/Partners/useGetPartners';
import {PageLayout} from '@/layouts/PageLayout';
import type {FC} from 'react';
import Props from './PartnersScreem.props';
import {useRouter} from 'next/navigation';
import {useIsMobile} from '@/hooks';
import {PCPartners} from './components/PCPartners';
import {MobilePartners} from './components/MobilePartners';

const PartnersScreen: FC<Props> = () => {
  const isMobile = useIsMobile();
  const {data, isLoading} = useGetPartners();
  const router = useRouter();

  return (
    <PageLayout title='Партнёры'>
      <PCPartners data={data} router={router} isLoading={isLoading} />
    </PageLayout>
  );
};

export default PartnersScreen;
