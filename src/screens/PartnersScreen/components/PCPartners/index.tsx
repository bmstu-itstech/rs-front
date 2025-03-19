import type {FC} from 'react';
import type {IPCPartners} from '../../PartnersScreem.props';
import Image from 'next/image';
import no_photo from '@/assets/no_photo.jpg';
import {PCPartnersSkeleton} from './PCPartners.skeletons';
export const PCPartners: FC<IPCPartners> = ({data, isLoading, router}) => {
  return (
    <div className='h-full flex flex-wrap justify-around w-full items-center  '>
      {isLoading || !data ? (
        <>
          <PCPartnersSkeleton />
          <PCPartnersSkeleton />
          <PCPartnersSkeleton />
        </>
      ) : (
        data.partners.map((item, index) => (
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
        ))
      )}
    </div>
  );
};
