'use client';

// import { photos } from './Partners.usecase';
import {useGetPartners} from '@/hooks/Partners/useGetPartners';
import no_photo from '@/assets/no_photo.jpg';
import {PageLayout} from '@/layouts/PageLayout';
import Image from 'next/image';
import type {FC} from 'react';
import Props from './PartnersScreem.props';
import {useRouter} from 'next/navigation';
import PartnersCarousel from '@/features/PartnersCarousel';
import {useIsMobile} from '@/hooks';
import {PartnersPlaceholder} from '@/utilities/placeholders/partners';
import type {IPartners} from '@/domain/entities/partners';
import type {AppRouterInstance} from 'next/dist/shared/lib/app-router-context.shared-runtime';

interface IPCPartners {
  data: IPartners | undefined;
  router: AppRouterInstance;
}

const PCPartners: FC<IPCPartners> = ({data, router}) => {
  return (
    <div className='h-full flex flex-wrap justify-around w-full items-center  '>
      {data?.partners.map((item, index) => (
        <Image
          key={index}
          className='min-w-1/4 min-h-1/2 w-full rounded-3rxl h-full max-w-1/4 max-h-1/2 aspect-square object-cover object-center cursor-pointer'
          src={item.photo ?? no_photo.src}
          onClick={() => {
            router.push(item.link);
          }}
          width={1200}
          height={1200}
          alt='logo of the partner'
        />
      ))}
    </div>
  );
};

const MobilePartners: FC<IPCPartners> = ({data, router}) => {
  return (
    <div className='w-full'>
      <PartnersCarousel
        items={data?.partners ?? PartnersPlaceholder.partners}
      />
    </div>
  );
};

const PartnersScreen: FC<Props> = () => {
  const isMobile = useIsMobile();
  const {data} = useGetPartners();
  const router = useRouter();

  return (
    <PageLayout title='Партнёры'>
      {isMobile ? (
        <MobilePartners data={data} router={router} />
      ) : (
        <PCPartners data={data} router={router} />
      )}
    </PageLayout>
  );
};

export default PartnersScreen;
