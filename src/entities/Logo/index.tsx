import {FC, MouseEventHandler} from "react";
import Image from "next/image";
import style from "./Logo.module.css";

interface LogoProps {
    src: string;
    alt: string;
    onClick?: MouseEventHandler<HTMLImageElement>;
}

const Logo: FC<LogoProps> = ({ src, alt, onClick }) => {
    return (
        <Image
            className={style.logo}
            src={src}
            alt={alt}
            onClick={onClick}
            width={100}
            height={100}
        />
    );
};

Logo.displayName = "Logo";

export default Logo;