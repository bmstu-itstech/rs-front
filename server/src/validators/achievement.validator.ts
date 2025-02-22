import Ajv, { JSONSchemaType } from "ajv";
import { AchievementInputModel, IAchievement } from "@/app/types";
import { isString } from "./base";

const ajv = new Ajv();

const rawSchema: JSONSchemaType<AchievementInputModel> = {
    type: "object",
    properties: {
        title: { type: "string" },
        description: { type: "string" },
        coverUrl: { type: "string" },
        photos: { type: "array", items: { type: "string" } },
        media: { type: "array", items: { type: "string" } }
    },
    required: ["title", "description", "coverUrl", "photos", "media"],
    additionalProperties: false
};

const validator = ajv.compile(rawSchema);

export function validateRaw(obj: any): AchievementInputModel {
    if (!validator(obj)) {
        throw new Error("Invalid input object");
    };
    return obj;
};

export function validate(obj: any): IAchievement {
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
