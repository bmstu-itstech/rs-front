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
        <div className="navbar-outer">
            <div className="navbar-inner">
                <div className="logo-outer" style={{opacity}}>
                    <LogoList/>
                </div>
                {/*<Menu />*/}
            </div>
        </div>
    );

};

Navbar.displayName = "Navbar";

export default Navbar;