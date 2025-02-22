'use client'

import { Container, PrimaryButton } from "@/shared";
import {NextPage} from "next";

const MainScreen: NextPage = () => {
    
    return (
        <Container id="main">
            <div className="main">
                <div className="title">
                    Центр молодежной робототехники
                </div>
                <div className="caption">
                    Центр Молодежной Робототехники - это инновационное пространство, предназначенное для обучения
                    и развития молодых талантов в области робототехники, искусственного интеллекта и программирования.
                    Наша миссия - предоставить молодежи возможность исследовать и создавать будущее с помощью передовых
                    технологий и творчества. Присоединяйтесь к нам и откройте для себя мир будущего уже сегодня!
                </div>
                <div className="bottom">
                    <PrimaryButton onClick={() => {
                        const element = document.getElementById("news");
                        element?.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        })
                    }}>Подробнее</PrimaryButton>
                </div>
            </div>
        </Container>
    );

};

MainScreen.displayName = "MainScreen";

export default MainScreen;