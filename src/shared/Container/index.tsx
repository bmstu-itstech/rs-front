'use client'

import "./style.css";
import {ReactNode} from "react"
import {useEffect} from "react";
import {useIsMobile} from "@/hooks";
import {NextPage} from "next";

type Ids = "main" | "news" | "achievements" | "contacts";

interface ContainerProps {
    id: Ids;
    children?: ReactNode;
}

const Container: NextPage<ContainerProps> = (
    {
        id,
        children
    }) => {

    const mobile = useIsMobile();

    useEffect(() => {
        const element = document.getElementById(id) as HTMLElement;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                if (mobile) document.documentElement.style.overflowY = "hidden";
                if (id === "main") {
                    requestAnimationFrame(() => {
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        });
                    });
                } else {
                    requestAnimationFrame(() => {
                        element.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });
                    });
                }
                setTimeout(() => document.documentElement.style.overflowY = "scroll", 700);
            });
        }, {});
        observer.observe(element);
        return () => observer.disconnect();
    }, [id, mobile]);

    return (
        <div id={id} className="container-outer">
            <div className="container-inner">
                {children}
            </div>
        </div>
    );

};

Container.displayName = "Container";

export default Container;