import "./style.css";
import {Field} from "@/shared";
import LinkField from "@/shared/LinkField";
import {FC} from "react";

interface ContactData {
    email: string;
    privacyPolicyUrl: string;
    universityUrl: string;
    addressUrl: string;
    address: string;
    socials: {
        vk: string;
        telegram: string;
    };
}

const contactData: ContactData = {
    email: "robotics.bmstu@yandex.ru",
    privacyPolicyUrl: "https://bmstu.ru/about/obrabotka-dannyh",
    universityUrl: "https://bmstu.ru/",
    addressUrl: "https://yandex.ru/maps/213/moscow/?ll=37.682269%2C55.765475&mode=poi&poi%5Bpoint%5D=37.680720%2C55.765206&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D128334697512&utm_source=share&z=17",
    address: "105005, г. Москва, Бауманская ул., 57Б, стр. 1",
    socials: {
        vk: "https://vk.com/robotics_bmstu",
        telegram: "https://t.me/robotics_bmstu",
    },
};

const ContactCard: FC = () => {
    return (
        <div className="contact-card-outer">
            <div className="contact-card-inner">
                <div className="block">
                    <Field
                        title="Email"
                        value={contactData.email}
                    />
                </div>
                <div className="block">
                    <LinkField
                        title="Политика перс. данных"
                        url={contactData.privacyPolicyUrl}
                    />
                </div>
                <div className="block">
                    <LinkField
                        title="Сайт университета"
                        url={contactData.universityUrl}
                    />
                </div>
                <div className="block">
                    <Field
                        title="Адрес"
                        value={
                            <LinkField
                                title="Схема проезда"
                                url={contactData.addressUrl}
                                aria-label="Схема проезда"
                            />
                        }
                        aria-label="Адрес"
                    />
                </div>

                <div className="block">
                    {contactData.address}
                </div>

                <div className="block">
                    <Field
                        title="Соцсети"
                        value={null}
                    />
                </div>
                <div className="list">
                    <LinkField title="ВКонтакте" url={contactData.socials.vk}/>
                    <LinkField title="Телеграм" url={contactData.socials.telegram}/>
                </div>
            </div>
        </div>
    );
};

ContactCard.displayName = "ContactCard";

export default ContactCard;