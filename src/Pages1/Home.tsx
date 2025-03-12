import {
  AchievementsScreen,
  ContactsScreen,
  MainScreen,
  NewsScreen,
} from '../screens';
import {FC} from 'react';

const Home: FC = () => {
  return (
    <div className='flex flex-col gap-[6dvh]'>
      <MainScreen  />
      <NewsScreen />
      <AchievementsScreen />
      <ContactsScreen />
    </div>
  );
};

Home.displayName = 'HomePage';

export default Home;
