import type {FC} from 'react';
import Props from './PartnersCarouselItem.props';
import Image from 'next/image';
import no_photo from '@/assets/no_photo.jpg';

const PartnersCarouselItem: FC<Props> = ({
  title,
  photo,
  className,
  ...props
}) => {
  const curPhoto = photo ?? no_photo;
  return (
    <div
      className={`w-full h-full p-12 aspect-square rounded-3rxl overflow-hidden flex justify-center items-center  border-2 border-main-orange bg-linear-to-t from-main-orange to-transparent ${
        className ?? ''
      }`}
      {...props}>
      <Image
        src={curPhoto}
        alt={title}
        width={1000}
        height={1000}
        className='rounded-3rxl aspect-square object-cover object-center'
      />
    </div>
  );
};

export {PartnersCarouselItem};
