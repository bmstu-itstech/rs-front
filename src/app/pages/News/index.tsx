'use client';
import type {FC} from 'react';
import Props from './News.props';
import Carousel from '@/components/Carousel';
import PageLayout from '@/app/layouts/Page';

const News: FC<Props> = ({items, className, ...props}) => {
  return (
    <PageLayout title='Новости' className={className} {...props}>
      <Carousel items={items} />
    </PageLayout>
  );
};

export default News;
