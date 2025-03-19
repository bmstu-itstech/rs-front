import type { FC } from 'react';
import type { IPCPartners } from '../../PartnersScreem.props';
import PartnersCarousel from '@/features/PartnersCarousel';
import { PartnersPlaceholder } from '@/utilities/placeholders/partners';

export const MobilePartners: FC<IPCPartners> = ({data, router}) => {
  return (
    <div className='w-full'>
      <PartnersCarousel
        items={data?.partners ?? PartnersPlaceholder.partners}
      />
    </div>
  );
};
