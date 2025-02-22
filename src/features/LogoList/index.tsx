import "./style.css";
import { Logo } from "@/entities";
import {FC} from "react";
import Link from "next/link";

const LogoList: FC = () => {

    return (
        <div className="logo-list">
            <Link href={"https://bmstu.ru"}>
                <Logo
                    src="./logo/bmstu.svg"
                    alt="logo of university"
                />
            </Link>
            <Link href={"/404"}>
                <Logo
                    src="./logo/crown.svg"
                    alt="logo of company"
                />
            </Link>
            <Link href={"/"}>
                <Logo
                    src="./logo/rs.svg"
                    alt="logo of robotics center"
                />
            </Link>
        </div>
    );
};

LogoList.displayName = "LogoList";

export default LogoList;
