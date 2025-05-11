import React from 'react';
import {FC} from 'react';

const MainScreenLazy = React.lazy(() => import('../screens/MainScreen'));
const NewsScreenLazy = React.lazy(() => import('../screens/NewsScreen'));
const AchievementsScreenLazy = React.lazy(() => import('../screens/AchievementsScreen'));
const ContactsScreenLazy = React.lazy(() => import('../screens/ContactsScreen'));

const Home: FC = () => {
  return (
    <div className='flex flex-col gap-[6dvh]'>
      <MainScreenLazy />
      <NewsScreenLazy />
      <AchievementsScreenLazy />
      <ContactsScreenLazy />
    </div>
  );
};

Home.displayName = 'HomePage';

export default Home;
