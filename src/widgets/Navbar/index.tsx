"use client"

import "./style.css";
import {FC, useEffect, useState} from "react";
import {LogoList} from "@/features";

const Navbar: FC = () => {

    const [opacity, setOpacity] = useState("1");

    useEffect(() => {
        window.onscroll = () => {
            setOpacity(window.scrollY > 0 ? "0" : "1");
        };
    }, []);

    return (
        <div className="grid items-center justify-center sticky z-[100] top-0 left-0">
            <div className="mt-[30px] flex justify-between navbar-inner">
                <div className="transition-opacity duration-300" style={{opacity}}>
                    <LogoList/>
                </div>
                {/*<Menu />*/}
            </div>
        </div>
    );

};

Navbar.displayName = "Navbar";

export default Navbar;