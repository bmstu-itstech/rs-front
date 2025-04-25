import type { FC } from 'react';
// import type { IPCPartners } from '../../PartnersScreem.props';
import PartnersCarousel from '@/features/PartnersCarousel';
import type { IPartners } from '@/domain/entities/partners';
// import { PartnersPlaceholder } from '@/utilities/placeholders/partners';

interface IMobilePartners {
  data: IPartners;
}
export const MobilePartners: FC<IMobilePartners> = ({data}) => {
  return (
    <div className='w-full'>
      <PartnersCarousel items={data?.results} />
    </div>
  );
};
