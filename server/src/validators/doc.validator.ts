import Ajv, { JSONSchemaType } from "ajv";
import { DocInputModel, IDoc } from "@/app/types";
import { isDict, isString } from "./base";

const ajv = new Ajv();

const rawSchema: JSONSchemaType<DocInputModel> = {
    type: "object",
    properties: {
        title: { type: "string" },
        description: { type: "string" },
        format: { type: "string" },
        src: { type: "string" }
    },
    required: ["title", "description", "format", "src"],
    additionalProperties: false
};

const validator = ajv.compile(rawSchema);

export function validateRaw(obj: any): DocInputModel {
    if (!validator(obj)) {
        throw new Error("Invalid input object");
    };
    return obj;
};

export function validate(obj: any): IDoc {
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
