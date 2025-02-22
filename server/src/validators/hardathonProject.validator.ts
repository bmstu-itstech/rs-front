import Ajv, { JSONSchemaType } from "ajv";
import { HardathonProjectInputModel, IHardathonProject } from "@/app/types";
import { isDict, isString } from "./base";

const ajv = new Ajv();

const rawSchema: JSONSchemaType<HardathonProjectInputModel> = {
    type: "object",
    properties: {
        title: { type: "string" },
        coverUrl: { type: "string" },
        hardathonId: { type: "string" },
        description: { type: "string" },
        scopeUrl: { type: "string" }
    },
    required: [
        "title", "coverUrl", "hardathonId",
        "description", "scopeUrl"
    ],
    additionalProperties: false
};

const validator = ajv.compile(rawSchema);

export function validateRaw(obj: any): HardathonProjectInputModel {
    if (!validator(obj)) {
        throw new Error("Invalid input object");
    };
    return obj;
};

export function validate(obj: any): IHardathonProject {
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
