import Image from 'next/image';
import type {FC} from 'react';
import type Props from './Images.props';
import ArrowRight from '@/app/components/icons/ArrowRight';

const CarouselItem: FC<Props> = ({
  item,
  index,
  className,
  ...props
}) => {
  return (
    <div
      className={`aspect-[10/11] w-full max-w-picture flex-grow-0 rounded-6xl overflow-hidden border-5 border-orange_main flex flex-col ${className}`}
      {...props}>
      <div className=' h-[42%] w-full select-none'>
        <Image
          src={item.coverUrl}
          width={300}
          height={200}
          alt={`${index}`}
          className='cover'
          style={{
            width: '100%',
            height: '100%',
            objectPosition: 'center',
            objectFit: 'cover',
          }}
        />
      </div>
      <div className='bg-orange_main flex justify-center py-1 text-white_abs w-full select-none'>
        <p className='w-2/3 items-center text-2xl mx-auto justify-center line-clamp-2 text-center max-w-96 select-none'>
          {item.title}
        </p>
      </div>
      <div className='w-full flex flex-col justify-between items-center px-6 py-3 bg-white h-full'>
        <p className='w-full flex-1 text-black text-lg line-clamp-3 max-h-full  font-normal select-none'>
          {item.description}
        </p>
        <div
          className='flex items-center justify-between h-fit w-full text-black text-base select-none cursor-pointer'
          onClick={() => window.location.href = item.actionLink}
        >
          <p className='line-clamp-1'>{item.caption}</p>
          <ArrowRight className='w-10 cursor-pointer' />
        </div>
      </div>
    </div>
  );
};

export {CarouselItem};
