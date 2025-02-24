'use client'

import "./style.css";
import {FC, MouseEventHandler} from "react";

interface CardButtonProps {
    label: string;
    onClick: MouseEventHandler<HTMLDivElement>;
    primary?: boolean;
}

const CardButton: FC<CardButtonProps> = (
    {
        label,
        onClick,
        primary = false
    }) => {
    return (
        <div className={`card-button ${primary ? 'primary' : ''}`} onClick={onClick}>
            {label}
        </div>
    );
};

export default CardButton;
