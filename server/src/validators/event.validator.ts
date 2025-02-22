import Ajv, { JSONSchemaType } from "ajv";
import { EventInputModel, IEvent } from "@/app/types";
import { isDict, isNumber, isString } from "./base";

const ajv = new Ajv();

const rawSchema: JSONSchemaType<EventInputModel> = {
    type: "object",
    properties: {
        title: { type: "string" },
        date: { type: "string" },
        place: { type: "string" },
        photos: { type: "array", items: { type: "string" } },
        mentions: { type: "array", items: { type: "string" } },
        docs: { type: "array", items: { type: "string" } }
    },
    required: [
        "title", "date", "place",
        "photos", "mentions", "docs"
    ],
    additionalProperties: false
};

const validator = ajv.compile(rawSchema);

export function validateRaw(obj: any): EventInputModel {
    if (!validator(obj)) {
        throw new Error("Invalid input object");
    };
    return obj;
};

export function validate(obj: any): IEvent {
    const validatedRaw = validateRaw(obj);
    if (
        !isString(obj.id)
    ) {
        throw new Error("Invalid input object");
    };
    return {
        id: obj.id,
        ...validatedRaw
    };
};
