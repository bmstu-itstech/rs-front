import {useCallback, useEffect, useState, type FC} from 'react';
import Props from './ProgressBar.props';
import {EmblaCarouselType} from 'embla-carousel';

export const useSelectedSnapDisplay = (
  emblaApi: EmblaCarouselType | undefined,
): Props => {
  const [selectedSnap, setSelectedSnap] = useState(0);
  const [snapCount, setSnapCount] = useState(0);

  const updateScrollSnapState = useCallback((emblaApi: EmblaCarouselType) => {
    setSnapCount(emblaApi.scrollSnapList().length);
    setSelectedSnap(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    updateScrollSnapState(emblaApi);
    emblaApi.on('select', updateScrollSnapState);
    emblaApi.on('reInit', updateScrollSnapState);
  }, [emblaApi, updateScrollSnapState]);

  return {
    selectedSnap,
    snapCount,
  };
};

const ProgressBar: FC<Props> = ({
  selectedSnap,
  snapCount,
  className,
  ...props
}) => {
  const progress = ((selectedSnap + 1) / snapCount) * 100;
  return (
    <div
      className={`w-3/5 mx-auto bg-white_abs rounded-full h-fit p-1 ${className}`}
      {...props}>
      <div
        className='bg-orange_main h-2.5 rounded-full duration-200 transition-all ease-out'
        style={{width: `${progress}%`}}
      />
    </div>
  );
};

export default ProgressBar;
