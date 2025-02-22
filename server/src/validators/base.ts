export const isDict = (v: unknown): v is { [k: string]: any } => v !== undefined && v !== null && v.constructor == Object;
export const isNumber = (v: unknown): v is number => typeof v === "number";
export const isString = (v: unknown): v is string => typeof v === "string";
export const isBoolean = (v: unknown): v is boolean => typeof v === "boolean";
