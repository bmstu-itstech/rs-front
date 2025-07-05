import type {Metadata} from 'next';
import './globals.css';
import {Navbar} from '@/widgets';
import {ReactNode} from 'react';
import {Providers} from './providers';

import dynamic from 'next/dynamic';

const DynamicFooter = dynamic(() => import('../widgets/Footer'), {
  loading: () => <p>Loading...</p>,
});

export const metadata: Metadata = {
  title: 'Центр молодёжной робототехники\n',
  description:
    'Центр располагается в одном из зданий нового кампуса Университета — в Инжиниринговом центре «Автоматика и робототехника» — приходите знакомиться. Мы уверены, что каждый из вас найдет здесь что-то интересное и полезное для себя.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='ru' className='h-full'>
      <body className='h-full overflow-x-hidden relative'>
        <div className='h-dvh w-dvw snap-y snap-mandatory scroll-smooth overflow-y-auto'>
          <Navbar />
          <Providers>{children}</Providers>
          <DynamicFooter />
        </div>
      </body>
    </html>
  );
}
