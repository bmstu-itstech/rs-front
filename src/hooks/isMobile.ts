import {useEffect, useState} from "react";

export default function useIsMobile() {
    const [mobile, setMobile] = useState<boolean>(false);

    useEffect(() => {
        setMobile(() => window.innerWidth <= 1024)
        const onResize = () => {
            setMobile(window.innerWidth <= 1024);
        };

        window.addEventListener("resize", onResize);

        return () => window.removeEventListener("resize", onResize);

    }, []);

    return mobile;

};
