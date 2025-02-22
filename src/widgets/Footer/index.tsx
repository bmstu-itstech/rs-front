import "./style.css";
import {NextPage} from "next";

const Footer: NextPage = () => {

    return (
        <div className="footer-outer">
            <div className="footer-inner">
                <div className="text">Developed @ 2025 by ITS Tech</div>
            </div>
        </div>
    )
};

Footer.displayName = "Footer";

export default Footer;