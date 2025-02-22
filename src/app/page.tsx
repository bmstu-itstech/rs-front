'use client';
import Contacts from './pages/Contacts';
import News from './pages/News';
import { usecase_default } from './components/Carousel/Carousel.usecase';
import {TitleBlock, AchievementsBlock} from "./components/widgets";
import Fullscreen from "./components/shared/Fullscreen";
import Footer from "@/components/Footer";

export default function Home() { // TODO: объединить с Home
  return (
    <>
    <Fullscreen background="/backgrounds/1st.png" needsTopShadow needsBottomShadow>
      <TitleBlock />
    </Fullscreen>
    <Fullscreen background="/backgrounds/2nd.png" needsTopShadow>
        <News
            title="НОВОСТИ" {...usecase_default}
        />
    </Fullscreen>
    <AchievementsBlock list={undefined}/>
    <Contacts/>
    <Footer val={'Developed @ 2024 by ITS Tech'}/>
    </>
  );
};
