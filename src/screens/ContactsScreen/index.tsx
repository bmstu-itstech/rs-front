'use client'

import "./style.css";
import {Container} from "@/shared";
import {LeaderCard} from "@/features";
import ContactCard from "@/features/ContactCard";
import {useIsMobile} from "@/hooks";
import ContactsCarousel from "@/features/ContactsCarousel";
import {NextPage} from "next";

const ContactsScreen: NextPage = () => {

    const mobile = useIsMobile();

    return (
        <Container id="contacts">
            <div className="contacts">
                <div className="subtitle">Контакты</div>
                {mobile && <ContactsCarousel/>}
                {!mobile && <div className="cards">
                    <LeaderCard/>
                    <ContactCard/>
                </div>}
            </div>
        </Container>
    )

};

ContactsScreen.displayName = "ContactsScreen";

export default ContactsScreen;