"use client"
import React, {FC, useState} from 'react';
import cl from "../moduleStyles/AchievementsBlock.module.css"
import Image from "next/image";
import ExampleImage from "@/app/assets/achievement-example.jpeg"
import image1 from '@/assets/achievement_1.png';
import image2 from '@/assets/achievement_2.png';
import image3 from '@/assets/achievement_3.png';
import image4 from '@/assets/achievement_4.jpg';
import {AchievementItem} from "@/app/models/achievementItem";
import AcElement from "@/app/models/acElement";
import PageLayout from '@/app/layouts/Page';

export const defaultItems: AchievementItem[] = [
    {
        name: "Победители «Боя роботов» 1,5 кг",
        id: 86451,
        description: `Команда «Гурманы» одержала серию из 5 побед битв
        Robot Fight Club, что дало им звание чемпионов 23 сезона. Команда
        выступила с роботом «Lilcheese» весом 1,5 кг и вооружённого барабанным спиннером`,
        isDefault: true,
        button: [{label: "Фото", url: "#"}, {label: "СМИ", url: "#"}],
        imageUrl: image1.src
    },
    {
        name: "Призёры Скат 2024",
        id: 245,
        description: `Команда «Покорители Неба» стала призёром всероссийский соревнований СКАТ2024.
        Ребята спроектировали и изготовили БПЛА на базе ЦМР.
        Летательный аппарат успешно выполнил задание и занял третье место основного трека.`,
        isDefault: false,
        button: [{label: "СМИ", url: "#"}, {label: "О НАС", url: "#"}],
        imageUrl: image2.src
    },
    {
        name: "«АэроТех»",
        id: 36736,
        description: `Проект направлен на развитие студенческого научно-технического творчества в сфере
        беспилотных летательных аппаратов и предполагает создание специализированной площадки для обучения
        работе с БПЛА и проведения лекций.`,
        isDefault: false,
        button: [{label: "СМИ", url: "#"}, {label: "О НАС", url: "#"}],
        imageUrl: image3.src
    },
    {
        name: "Хардатон «Инженерный вызов»",
        id: 435467,
        description: "В этом году участие приняли 11 лучших команд Бауманки и МТКП, которые на практике показали, что могут студенты лучшего технического университета.",
        isDefault: false,
        button: [{label: "СМИ", url: "#"}, {label: "О НАС", url: "#"}],
        imageUrl: image4.src
    }
];

interface IProps {
    list: AchievementItem[] | undefined;
}

const AchievementsBlock: FC<IProps> = ({list}) => {
    if (!list) list = defaultItems;
    list = list.slice(0, 4);
    const [activeBlock, setActiveBlock] = useState<AchievementItem | undefined>(list.find((el) => el.isDefault));
    const [otherItems, setOtherItems] = useState(list.filter((el) => !el.isDefault));
    const changeValue = (el: AchievementItem) => {
        if (activeBlock) {
            for (let i = 0; i < list?.length; i++) {
                if (el?.id === otherItems[i]?.id) {
                    const temp = otherItems[i];
                    const newM = otherItems

                    newM[i] = activeBlock;
                    setOtherItems(newM);
                    setActiveBlock(temp);
                    location.hash = "main";
                    if (!document) return;
                    document.getElementById("main")?.scrollIntoView();

                }
            }
        }
    }

    return (
        <PageLayout title="Достижения">
            <div className="content">

                <div className={cl.cont} id="main">
                    <div className={`${cl.bl1}`}>
                        <div className={cl.black}></div>
                        <div/>
                        <div className={`${cl.leftBl} grid grid-cols-2 grid-rows-3`}>
                            <div className={"w-[550px] grid col-span-1 row-span-2 text-ellipsis"}>
                                <div className={cl.t1}>
                                    {activeBlock?.name}
                                </div>
                                <div className={cl.t2}>
                                    {activeBlock?.description}
                                </div>
                            </div>
                            <div className={`${cl.btn} flex row-span-1 row-start-3 self-end`}>
                                {activeBlock?.button.map((el, i) => (
                                    <a key={i} href={el.url}>
                                        <div className={cl.btn1}><span
                                            className="text text-white block  max-w-[90vw] h-fit">{el.label}</span>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                        <Image src={activeBlock?.imageUrl ? activeBlock?.imageUrl : ExampleImage} alt={""}
                               className={cl.img}
                               width={861}
                               height={650}/>
                    </div>

                    <div className={`${cl.cc2} grid grid-cols-3`}>
                        {otherItems?.map((el) => (
                            <div key={el.id} className={"grid col-span-1 z-10"}>
                                <AcElement activeBlock={el} onClick={() => changeValue(el)} t={1}/>
                            </div>
                        ))}
                    </div>

                    <div className={cl.ccMobile}>
                        {activeBlock ? <AcElement activeBlock={activeBlock} t={0} c={2}/> : <></>}
                        {otherItems?.map((el, i) => (
                            <AcElement activeBlock={el} key={el.id} t={0} c={i+3}/>
                        ))}
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default AchievementsBlock;