import jwt from "jsonwebtoken";
import { Token } from "../models";

export class TokenService {

    static generate(payload: any) {
        const accessToken = jwt.sign(payload, process.env.ACCESS_SECRET as string, {
            expiresIn: "1d"
        });
        
        const refreshToken = jwt.sign(payload, process.env.REFRESH_SECRET as string);

        return {
            accessToken,
            refreshToken,
            expiresIn: 3600*24
        };
    };

    static async save(login: string, refreshToken: string) {
        const data = await Token.findOne({ login });
        if (data) {
            data.refreshToken = refreshToken;
            return data.save();
        };
        return await Token.create({ login, refreshToken });
    };

    static validateRefresh(refreshToken: string) {
        try {
            return jwt.verify(refreshToken, process.env.REFRESH_SECRET as string);
        } catch (error) {
            return null;
        };
    };

    static validateAccess(accessToken: string) {
        try {
            return jwt.verify(accessToken, process.env.ACCESS_SECRET as string) as { userId: number, refreshToken: string };
        } catch (error) {
            return null;
        };
    };

    static async findToken(refreshToken: string) {
        return await Token.findOne({ refreshToken });
    };

};
