import type { INewsBit } from '@/domain/entities/news';
import {useCallback, useState, useEffect} from 'react';

export const useGroupNewsItems = (items: INewsBit[], itemsPerSlide: number) => {
  const [groupedItems, setGroupedItems] = useState<INewsBit[][]>([]);

  const createGroup = useCallback(<T>(arr: T[], count: number): T[][] => {
    if (count <= 0) {
      throw new Error('Count must be a positive number.');
    }
    const result: T[][] = [];
    for (let i = 0; i < arr.length; i += count) {
      result.push(arr.slice(i, i + count));
    }
    return result;
  }, []);

  useEffect(() => {
    if (!items || items.length === 0) {
      setGroupedItems([]);
      return;
    }

    const grouped = createGroup(items, itemsPerSlide);
    setGroupedItems(grouped);
  }, [items, itemsPerSlide, createGroup]);

  return groupedItems;
};


