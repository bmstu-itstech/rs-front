'use client'

import "./style.css";
import {useState, MouseEventHandler, FC} from "react";
import {useIsMobile} from "@/hooks";
import LinkField from "@/shared/LinkField";
import Image from "next/image";

interface AchievementProps {
    id: string;
    title: string;
    description: string;
    photoUrl: string;
    mediaUrl: string;
    coverUrl: string;
    compact?: boolean;
    onClick?: MouseEventHandler<HTMLDivElement>;
}

const Achievement: FC<AchievementProps> = (
    {
        title,
        description,
        coverUrl,
        photoUrl,
        mediaUrl,
        compact = false,
        onClick
    }) => {

    const [hovered, setHovered] = useState<boolean>(false);
    const mobile = useIsMobile();

    if (mobile) {
        return (
            <div
                className="achievement-mobile-outer"
            >
                <Image src={coverUrl} alt=""/>
                <div className="v-delimiter"/>
                <div
                    className="info"
                >
                    <div className="title">{title}</div>
                    <div className="h-delimiter"/>
                    <LinkField title="Подробнее" url={photoUrl}/>
                </div>
            </div>
        );
    }


    if (compact) {

        return (
            <div
                className="achievement compact"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                style={{background: `url(${coverUrl}) no-repeat center/cover, ${hovered ? 'rgba(193, 48, 0, 0.4)' : 'rgba(0, 0, 0, 0.5)'}`}}
                onClick={onClick}
            >
                <div className="title">
                    {hovered ? 'Подробнее' : title}
                </div>
            </div>
        );

    }


    return (
        <div
            className="achievement outer"
            style={{backgroundImage: `url(${coverUrl})`}}
            onClick={onClick}
        >
            <div className="inner">
                <div className="info">
                    <div className="title">{title}</div>
                    <div className="description">{description}</div>
                </div>
                <div className="actions">
                    <div
                        className="button"
                        onClick={() => window.location.href = photoUrl}
                    >ФОТО
                    </div>
                    <div
                        className="button"
                        onClick={() => window.location.href = mediaUrl}
                    >СМИ
                    </div>
                </div>
            </div>
        </div>
    );

};

Achievement.displayName = "Achievement";

export default Achievement;
