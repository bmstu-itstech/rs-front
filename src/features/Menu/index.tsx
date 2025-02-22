'use client'

import "./style.css";
import {FC, useState} from "react";
import Image from "next/image";

const Menu: FC = () => {

    const [isOpened, setIsOpened] = useState<boolean>(false);

    if (!isOpened) {
        return (
            <Image
                className="menu-icon"
                src="/icons/menu-open.svg"
                fill={true}
                alt="menu icon"
                onClick={() => setIsOpened(true)}
            />
        );
    }
};

export default Menu;