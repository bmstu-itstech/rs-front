"use client"
import React, {FC, useState} from 'react';
import cl from "../components/moduleStyles/AchievementsBlock.module.css";
import Image from "next/image";
import ExampleImage from "@/app/assets/achievement-example.jpeg"
import GroupImage from "@/assets/Group 52.svg"
import {AchievementItem} from "@/app/models/achievementItem";

interface Props {
    activeBlock: AchievementItem;
    t: number;
    c?: number;
    onClick?: () => void
}

const AcElement: FC<Props> = ({activeBlock, onClick, t, c}) => {
    const [isHovered, setIsHovered] = useState(false);

    if (t == 1)
        return (

            <div className={cl.card1}
                 onMouseEnter={() => setIsHovered(true)}
                 onMouseLeave={() => setIsHovered(false)}
                 onClick={onClick}
            >
                <div className={cl.blf}/>
                <div className={cl.rHover}/>
                <Image src={activeBlock?.imageUrl ? activeBlock?.imageUrl : ExampleImage} alt={""} className={cl.img2}
                       width={390}
                       height={280}/>
                <div className={cl.tt3}><span
                    className={"text text-white block  max-w-[90vw] h-fit uppercase"}
                    style={{visibility: isHovered ? 'hidden' : 'visible'}}>{activeBlock.name}</span></div>
                <div className={cl.tt3}><span
                    className={"text text-white block  max-w-[90vw] h-fit"}
                    style={{visibility: isHovered ? 'visible' : 'hidden', color: "#F5DED6"}}>ПОДРОБНЕЕ</span></div>
            </div>

        );
    if (!c) return null;
    return (
        <a href={activeBlock.button[0].url}>
            <div className={cl.card2}
                 onMouseEnter={() => setIsHovered(true)}
                 onMouseLeave={() => setIsHovered(false)}
            >
                {c % 2 == 0 ? <>
                        <Image src={activeBlock?.imageUrl ? activeBlock?.imageUrl : ExampleImage} alt={""}
                               className={cl.bl + " " + cl.img3}
                               width={390}
                               height={280}

                        />
                        <div className={cl.br + " " + cl.borderLeft + " " + cl.btt}>
                            <div className={cl.tt5}><span
                                className={"text text-white block  max-w-[90vw] h-fit"}
                            >{activeBlock.name}</span></div>
                            <Image src={GroupImage} alt="" className={cl.imgGr}/>
                        </div>


                    </>
                    :
                    <>
                        <div className={cl.bl + " " + cl.borderRight + " " + cl.btt}>
                            <div className={cl.tt5}><span
                                className={"text text-white block  max-w-[90vw] h-fit"}
                            >{activeBlock.name}</span></div>
                            <Image src={GroupImage} alt="" className={cl.imgGr}/>
                        </div>
                        <Image src={activeBlock?.imageUrl ? activeBlock?.imageUrl : ExampleImage} alt={""}
                               className={cl.br + " " + cl.img3}
                               width={200}
                               height={400}

                        />

                    </>
                }


            </div>
        </a>

    )
};

export default AcElement;