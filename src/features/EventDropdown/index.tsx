import "./style.css";
import {MouseEventHandler} from "react";
import {CardButton} from "@/entities";
import {IEvent} from "@/types";
import Image from "next/image";

interface EventDropdownProps {
    onClose: MouseEventHandler<HTMLImageElement>;
    event: IEvent;
}

function EventDropdown({onClose, event}: EventDropdownProps) {
    return (
        <div className="event-dropdown-bg" onClick={onClose}>
            <div className="event-dropdown-outer" onClick={(e) => e.stopPropagation()}>
                <div className="event-dropdown-inner">
                    <div className="info">
                        <div className="title">Подробнее</div>

                        <CardButton
                            label={`Дата проведения: ${event.date}`}
                            onClick={() => {
                            }}
                        />
                        <CardButton
                            label="Место проведения"
                            onClick={() => window.location.href = event.place}
                        />
                        <CardButton
                            label="Фото"
                            onClick={() => window.location.href = event.photos}
                        />
                        <CardButton
                            label="Упоминания в СМИ"
                            onClick={() => window.location.href = event.mentions}
                        />
                        <CardButton
                            label="Документы"
                            onClick={() => window.location.href = event.docs}
                        />
                    </div>
                    <div className="action">
                        <Image src="/icons/close.svg" onClick={onClose} alt="" width={100} height={100} />
                    </div>
                </div>
            </div>
        </div>
    );

}

export default EventDropdown;
