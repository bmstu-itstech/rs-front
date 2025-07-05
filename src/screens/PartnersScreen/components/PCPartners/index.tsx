import {useCallback, type FC} from 'react';
import type {IPCPartners} from '../../PartnersScreem.props';
import Image from 'next/image';
import no_photo from '@/assets/no_photo.jpg';
import {PCPartnersSkeleton} from './PCPartners.skeletons';
import {IPartnersBit} from '@/domain/entities/partners';

export const PCPartners: FC<IPCPartners> = ({data, isLoading, router}) => {
  const onClick = useCallback(
    (item: IPartnersBit) => {
      router.push(item.url);
    },
    [router],
  );
  //   grid-template-rows: 1fr 1fr; /* Две строки равной высоты */
  //   grid-auto-columns: 1fr; /* Колонки растягиваются равномерно */
  //   grid-auto-flow: column; /* Элементы заполняются по столбцам */
  return (
    <div
      className={`w-fit mx-auto my-auto grid gap-16 mb-20 grid-flow-rows grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center`}>
      {isLoading || !data || data.results.length == 0 ? (
        <>
          <PCPartnersSkeleton />
          <PCPartnersSkeleton />
          <PCPartnersSkeleton />
          <PCPartnersSkeleton />
          <PCPartnersSkeleton />
          <PCPartnersSkeleton />
        </>
      ) : (
        data.results.map(item => (
          <div className='' key={item.id}>
            <Image
              className='rounded-3rxl w-full h-full  mx-auto aspect-square object-cover object-center cursor-pointer '
              src={item.logo ?? no_photo.src}
              onClick={() => onClick(item)}
              width={1200}
              height={1200}
              alt='logo of the partner'
            />
          </div>
        ))
      )}
    </div>
  );
};
