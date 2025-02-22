'use client'

import "./style.css";
import {useIsMobile} from "@/hooks";
import {ArrowButton} from "@/shared";
import type {INews} from "@/types";
import Image from "next/image";
import {FC} from "react";

const NewsItem: FC<INews> = (
    {
        title,
        description,
        actionLink,
        coverUrl,
        caption
    }) => {

    const mobile = useIsMobile();

    if (mobile) {
        return (
            <div
                className="news-item compact"
                style={{backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 20vh, rgba(193, 48, 0, 0.5)), url(${coverUrl})`}}
                onClick={() => window.location.href = actionLink}
            >
                <div className="title">
                    {title}
                </div>
            </div>
        );
    }


    return (
        <div className="news-item">
            <Image className="cover" src={coverUrl} alt="cover" width={500} height={500}/>
            <div className="title-outer">
                <div className="title-inner">
                    {title}
                </div>
            </div>
            <div className="info">
                <div className="description">
                    {description}
                </div>
                <div className="action" onClick={() => window.location.href = actionLink}>
                    <div className="label">{caption}</div>
                    <div className="button">
                        <ArrowButton/>
                    </div>
                </div>
            </div>
        </div>
    )

};

NewsItem.displayName = "NewsItem";

export default NewsItem;