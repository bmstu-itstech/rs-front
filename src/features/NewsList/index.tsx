'use client'

import "./style.css";
import {NewsItem} from "@/entities";
import type {INews} from "@/types";
import {FC} from "react";

interface NewsListProps {
    items: INews[]
}

const NewsList: FC<NewsListProps> = ({items}) => {
    return (
        <div className="news-list">
            {items.map(item => <NewsItem {...item} key={item.id}/>)}
        </div>
    );
};

NewsList.displayName = "NewsList";

export default NewsList;