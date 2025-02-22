'use client'

import "./style.css";
import {useIsMobile} from "@/hooks";
import {FC} from "react";

interface MainTitleProps {
    children?: string;
}

const MainTitle: FC<MainTitleProps> = ({children}) => {

    const mobile = useIsMobile();

    return (
        <div className="main-title">
            <div className="content">{children}</div>
            {!mobile && <div className="delimiter"/>}
        </div>
    );
};

MainTitle.displayName = "MainTitle";

export default MainTitle;