import express from "express";
import { TokenService } from "../services";

export default async function (req: express.Request, res: express.Response, next: express.NextFunction) {
    if (req.method === "OPTIONS") {
        return next();
    };

    try {
        const token = req.headers["access-token"];
        if (!token || typeof token !== "string") {
            res.status(401).json({
                code: 5,
                message: "Unathorized"
            });
            return;
        };
        TokenService.validateAccess(token);
        next();
    } catch (error) {
        res.status(401).json({
            error: {
                code: 5,
                message: "Unathorized"
            }
        });
    };
};
