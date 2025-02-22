import {FC, MouseEventHandler} from "react";
import Image from "next/image";

interface LogoProps {
    src: string;
    alt: string;
    onClick?: MouseEventHandler<HTMLImageElement>;
}

const Logo: FC<LogoProps> = ({ src, alt, onClick }) => {
    return (
        <Image
            className="logo"
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