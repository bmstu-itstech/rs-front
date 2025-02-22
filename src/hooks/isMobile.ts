import {useEffect, useState} from "react";

export default function useIsMobile() {
    const [mobile, setMobile] = useState<boolean>(false);

    useEffect(() => {
        setMobile(() => window.innerWidth <= 950)
        const onResize = () => {
            setMobile(window.innerWidth <= 950);
        };

        window.addEventListener("resize", onResize);

        return () => window.removeEventListener("resize", onResize);

    }, []);

    return mobile;

};
