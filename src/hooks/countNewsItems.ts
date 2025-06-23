'use client';
import {useCallback, useEffect, useState} from 'react';

export const useCountNewsItems = () => {
  const [itemsCount, setItemsCount] = useState<number>(1);

  const computeCount = useCallback(() => {
    if (typeof window === 'undefined') return 1;
    const availableWidth = window.innerWidth;
    return Math.max(1, Math.min(Math.floor(availableWidth / 354), 3));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setItemsCount(computeCount());
    };
    setItemsCount(computeCount());

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [computeCount]);

  return itemsCount;
};
