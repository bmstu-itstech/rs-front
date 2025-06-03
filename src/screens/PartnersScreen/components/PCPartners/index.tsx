import type {FC} from 'react';
import type {IPCPartners} from '../../PartnersScreem.props';
import Image from 'next/image';
import no_photo from '@/assets/no_photo.jpg';
import {PCPartnersSkeleton} from './PCPartners.skeletons';

export const PCPartners: FC<IPCPartners> = ({data, isLoading, router}) => {
    return (
        <div
            className='h-full flex flex-col md:flex-row  md:flex-wrap md:justify-around gap-6 md:gap-0 w-full items-center  '>
            {isLoading || !data || data.results.length == 0 ? (
                <div className='flex flex-wrap lg:justify-around gap-8 lg:gap-0 justify-center  w-full'>
                    <PCPartnersSkeleton/>
                    <PCPartnersSkeleton/>
                    <PCPartnersSkeleton/>
                </div>
            ) : (
                data.results.map((item, index) => (
                    <Image
                        key={index}
                        className='md:min-w-1/4 md:min-h-1/2 w-1/2
             rounded-3rxl  md:max-w-1/4 md:max-h-1/2
              aspect-square object-cover object-center cursor-pointer'
                        src={item.logo ?? no_photo.src}
                        onClick={() => {
                            router.push(item.url);
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
