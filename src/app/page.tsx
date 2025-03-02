import React, {FC} from 'react';
import Home from '@/Pages1/Home';
import {OffcanvasMenu} from '@/features/OffcanvasMenu';

const Page: FC = () => {
  return (
    <>
      <Home />
      <OffcanvasMenu />
    </>
  );
};

export default Page;
