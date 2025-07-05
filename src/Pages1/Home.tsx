import React, {FC} from 'react';
import dynamic from 'next/dynamic';

const DynamicMain = dynamic(() => import('../screens/MainScreen'), {
  loading: () => <p>Loading...</p>,
});
const DynamicNews = dynamic(() => import('../screens/NewsScreen'), {
  loading: () => <p>Loading...</p>,
});
const DynamicAchievements = dynamic(() => import('../screens/AchievementsScreen'), {
  loading: () => <p>Loading...</p>,
});
const DynamicContacts = dynamic(() => import('../screens/ContactsScreen'), {
  loading: () => <p>Loading...</p>,
});

const Home: FC = () => {
  return (
    <>
      <DynamicMain key='main' />
      <DynamicNews key='news' />
      <DynamicAchievements key='achievements' />
      <DynamicContacts key='contacts' />
    </>
  );
};
Home.displayName = 'HomePage';
export default Home;
