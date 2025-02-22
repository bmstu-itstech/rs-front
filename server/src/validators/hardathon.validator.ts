import { HardathonInputModel, IHardathon } from "@/app/types";
import { isDict, isString } from "./base";
import Ajv, { JSONSchemaType } from "ajv";

const ajv = new Ajv();

const rawSchema: JSONSchemaType<HardathonInputModel> = {
    type: "object",
    properties: {
        title: { type: "string" },
        coverUrl: { type: "string" },
        startDate: { type: "string" },
        endDate: { type: "string" },
        resultsDate: { type: "string" },
        place: { type: "string" },
        media: { type: "array", items: { type: "string" } },
        photos: { type: "array", items: { type: "string" } },
        docs: { type: "array", items: { type: "string" } },
        partners: { type: "array", items: { type: "string" } },
        rulesUrl: { type: "string" },
        text: { type: "string" },
        avatarUrl: { type: "string" }
    },
    required: [
        "title", "coverUrl", "startDate",
        "endDate", "resultsDate", "place",
        "media", "photos", "docs", "partners",
        "rulesUrl", "text", "avatarUrl"
    ],
    additionalProperties: false
};

const validator = ajv.compile(rawSchema);

export function validateRaw(obj: any): HardathonInputModel {
    if (!validator(obj)) {
        throw new Error("Invalid input object");
    };
    return obj;
};

export function validate(obj: any): IHardathon {
    const validatedRaw = validateRaw(obj);
    if (
        !isString(obj.id)
    ) {
        throw new Error("Invalid input object");
    };
    return {
        id: obj.id,
        ...validatedRaw
    }
};
