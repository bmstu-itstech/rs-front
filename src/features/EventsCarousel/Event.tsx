'use client'

import "./style.css";
import {memo, useState} from "react";
import MainTitle from "@/entities/MainTitle";
import {PrimaryButton} from "@/shared";
import LinkField from "@/shared/LinkField";
import {IEvent} from "@/types";
import EventDropdown from "../EventDropdown";
import {createPortal} from "react-dom";

function Event(item: IEvent) {

    const [isOpened, setIsOpened] = useState<boolean>(false);

    return (
        <div className="event">
            <MainTitle>{item.title}</MainTitle>
            <div className="description">
                {item.description}
            </div>
            <div className="flex">
                <div className="circle"/>
                <LinkField title="Зарегистрироваться" url=""/>
            </div>
            <PrimaryButton
                onClick={() => setIsOpened(true)}
            >Подробнее</PrimaryButton>
            {isOpened && createPortal(<EventDropdown
                onClose={() => setIsOpened(false)}
                event={item}
            />, document.getElementById("modal") as HTMLElement)}
        </div>
    );
}

export default memo(Event);
