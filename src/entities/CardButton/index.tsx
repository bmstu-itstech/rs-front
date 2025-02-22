'use client'

import "./style.css";
import {FC, MouseEventHandler} from "react";

interface CardButtonProps {
    label: string;
    onClick: MouseEventHandler<HTMLDivElement>;
}

const CardButton: FC<CardButtonProps> = (
    {
        label,
        onClick
    }) => {
    return (
        <div className="card-button" onClick={onClick}>
            {label}
        </div>
    );
};

export default CardButton;
