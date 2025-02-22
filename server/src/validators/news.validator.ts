import Ajv, { JSONSchemaType } from "ajv";
import { INews, NewsInputModel } from "@/app/types";
import { isString } from "./base";

const ajv = new Ajv();

const rawSchema: JSONSchemaType<NewsInputModel> = {
    type: "object",
    properties: {
        title: { type: "string" },
        description: { type: "string" },
        caption: { type: "string" },
        actionLink: { type: "string" },
        coverUrl: { type: "string" },
        isDraft: { type: "boolean" }
    },
    required: [
        "title", "description", "caption",
        "actionLink", "coverUrl", "isDraft"
    ],
    additionalProperties: false
};

const validator = ajv.compile(rawSchema);

export function validateRaw(obj: any): NewsInputModel {
    if (!validator(obj)) {
        throw new Error("Invalid input object");
    };
    return obj;
};

export function validate(obj: any): INews {
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
