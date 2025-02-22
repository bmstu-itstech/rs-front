import "./style.css";
import {FC} from "react";

const LeaderCard: FC = () => {

    return (
        <div className="leader-card">
            <div className="title">Балакало Максим</div>
            <div className="subtitle">Руководитель ЦМР</div>
            <div className="desc">+7 (906) 568-96-73</div>
            <div className="desc">maks.balakalo@bmstu.ru</div>
        </div>
    );

};

LeaderCard.displayName = "LeaderCard";

export default LeaderCard;