import "./style.css";
import {ReactNode} from "react";
import {NextPage} from "next";

interface FieldProps {
    title: string;
    value: ReactNode
}

const Field: NextPage<FieldProps> = ({
    title,
    value
}) => {

    return (
        <div className="field">
            <div className="key">{title}:</div>
            <div className="value">{value}</div>
        </div>
    )

};

Field.displayName = "Field";

export default Field;