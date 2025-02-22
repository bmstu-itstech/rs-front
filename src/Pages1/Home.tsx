import {AchievementsScreen, ContactsScreen, MainScreen, NewsScreen} from "../screens";
import {FC} from "react";

const Home: FC = () => {

    return (
        <div className="scroll-container">
            <MainScreen/>
            <NewsScreen/>
            <AchievementsScreen/>
            <ContactsScreen/>
        </div>
    );
}

Home.displayName = "HomePage";

export default Home;