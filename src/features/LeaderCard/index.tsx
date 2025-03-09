import {FC} from 'react';
import {data} from './LeaderCard.usecase';
import Props from './LeaderCard.props';

const LeaderCard: FC<Props> = ({className, ...props}) => {
  return (
    <div
      className={`${className} border-4 border-main-orange rounded-3rxl relative overflow-hidden h-full bg-[url(/mock/leader.jpg)] w-[min(550px,90vw)]  flex flex-col text-center pb-7 bg-center bg-cover`}
      {...props}>
      <div className='absolute w-full h-full bg-gradient-to-b from-transparent to-main-orange-50 from-30% to-85%' />
      <div className='mt-auto flex flex-col gap-2 z-10 leading-normal'>
        {data.map((item, index) => {
          return (
            <a key={index} className={`${item.className}`}>
              {item.value}
            </a>
          );
        })}
      </div>
    </div>
  );
};

LeaderCard.displayName = 'LeaderCard';

export default LeaderCard;
