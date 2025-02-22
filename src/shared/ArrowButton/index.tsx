import "./style.css";
import {MouseEventHandler} from "react";
import {NextPage} from "next";
import Image from "next/image";

interface ArrowButtonProps {
    direction?: "right" | "left";
    onClick?: MouseEventHandler<HTMLDivElement>;
}

const ArrowButton: NextPage<ArrowButtonProps> = (
    {
        direction = "right",
        onClick = () => {}
    }) => {

    return (
        <div
            className={`arrow-button ${direction}`}
            onClick={onClick}
        >
            <Image src="/icons/arrow-right.svg" alt='' width={29} height={30}/>
        </div>
    );

};

ArrowButton.displayName = "ArrowButton";

export default ArrowButton;