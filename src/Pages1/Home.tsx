'use client';
import React, {useState, FC, useCallback, ReactNode} from 'react';
import MainScreen from '../screens/MainScreen';
import NewsScreen from '../screens/NewsScreen';
import AchievementsScreen from '../screens/AchievementsScreen';
import ContactsScreen from '../screens/ContactsScreen';

const Home: FC = () => {
  const [pages, setPages] = useState<ReactNode[]>([
    <MainScreen key='main' setPageToShow={() => addPage(3)} />,
  ]);
  const addPage = useCallback((page: number) => {
    let newPage: ReactNode = null; // Инициализируем как null
    switch (page) {
      case 3:
        newPage = <NewsScreen key='news' setPageToShow={() => addPage(4)} />;
        break;
      case 4:
        newPage = <AchievementsScreen key='achievements' setPageToShow={() => addPage(5)} />;
        break;
      case 5:
        newPage = <ContactsScreen key='contacts' setPageToShow={() => {}} />;
        break;
      default:
        return; // Если не соответствует, просто выходим
    }

    if (newPage) {
      setPages(prevPages => [...prevPages, newPage]);
    }
  }, []);
  return (
    <div style={{scrollBehavior: 'smooth', overscrollBehavior: 'smooth'}} className='flex flex-col h-dvh snap-y snap-mandatory scroll-smooth overflow-y-auto'>
      {pages}
    </div>
  );
};
Home.displayName = 'HomePage';
export default Home;
