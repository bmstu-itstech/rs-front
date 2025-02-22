import { Response } from "express"

export function sendError(res: Response, status: number, message: string) {
    res.status(status).json({
        code: status,
        message
    });
};
