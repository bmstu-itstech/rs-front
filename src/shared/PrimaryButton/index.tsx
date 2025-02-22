'use client'

import "./style.css";
import {MouseEventHandler} from "react";
import {NextPage} from "next";
import {ReactNode} from "react";

interface PrimaryButtonProps {
    children?: ReactNode;
    onClick?: MouseEventHandler<HTMLDivElement>;
}

const PrimaryButton: NextPage<PrimaryButtonProps> = (
    {
        children,
        onClick = () => {
        }
    }) => {

    return (
        <div className="primary-button" onClick={onClick}>
            <div className="caption">
                {children}
            </div>
        </div>
    );

};

PrimaryButton.displayName = "PrimaryButton";

export default PrimaryButton;