import {AchievementsScreen, ContactsScreen, MainScreen, NewsScreen} from "../screens";
import {FC} from "react";

const Home: FC = () => {

    return (
        <>
            <MainScreen/>
            <NewsScreen/>
            <AchievementsScreen/>
            <ContactsScreen/>
        </>
    );
}

Home.displayName = "HomePage";

export default Home;