import { Router } from "express";
import bcrypt from "bcryptjs";
import { check } from "express-validator";
import { User } from "../models";
import { TokenService } from "../services";
import { handleErrors } from "../utils";

const router = Router({ mergeParams: true });

function isTokenInvalid(data: any, dbToken: any) {
    return !data || !dbToken || data._id !== dbToken?.user?.toString();
};

router.post("/sign-up", 
    check("login", "Минимальная длина логина - 5 символов").isLength({ min: 5 }),
    check("password", "Минимальная длина пароля - 8 символов").isLength({ min: 8 }),
    check("secret", "Токен не обнаружен").exists(),
    async (req, res) => {
        try {
            const anyError = handleErrors(req as any, res);
            if (anyError) return;

            const { login, password, secret } = req.body;

            if (secret !== process.env.ADMIN_KEY) {
                res.status(401).json({
                    error: {
                        code: 6,
                        message: "Invalid admin key"
                    }
                });
                return;
            };
            
            const existingUser = await User.findOne({ login });
            if (existingUser) {
                res.status(400).json({
                    error: {
                        code: 2,
                        message: "LOGIN_EXISTS"
                    }
                });
                return;
            };

            const hashedPassword = await bcrypt.hash(password, 12);
            const newUser = await User.create({
                login,
                password: hashedPassword
            });

            const tokens = TokenService.generate({ userId: newUser.login });
            await TokenService.save(newUser.login, tokens.refreshToken);
            res.status(201).send({ ...tokens, login });
        } catch (error) {
            res.status(500).json({
                message: "На сервере произошла ошибка. Попробуйте позже."
            });
        };
    }
);

router.post("/sign-in",
    check("login", "Некорректный логин").isLength({ min: 5 }),
    check("password", "Пароль не может быть пустым").exists(),
    async (req, res) => {
        try {
            const anyError = handleErrors(req as any, res);
            if (anyError) return;

            const { login, password } = req.body;

            const existingUser = await User.findOne({ login });
            if (!existingUser) {
                res.status(400).json({
                    error: {
                        code: 3,
                        message: "USER_NOT_FOUND"
                    }
                });
                return;
            };

            const isPasswordEqual = await bcrypt.compare(password, existingUser.password);

            if (!isPasswordEqual) {
                res.status(400).json({
                    error: {
                        code: 4,
                        message: "INVALID_PASSWORD"
                    }
                });
                return;
            };

            const tokens = TokenService.generate({ login });
            await TokenService.save(existingUser.login, tokens.refreshToken);

            res.status(200).json({
                ...tokens,
                login
            });
        } catch (error) {
            res.status(500).json({
                message: "На сервере произошла ошибка. Попробуйте позже."
            });
        };
    }
);

router.post("/token", 
    check("refreshToken", "Не передан refreshToken").exists().isString(),
    async (req, res) => {
        try {
            const { refreshToken } = req.body;
            const data = TokenService.validateRefresh(refreshToken);
            const dbToken = await TokenService.findToken(refreshToken);

            if (isTokenInvalid(data, dbToken)) {
                res.status(401).json({ message: "Unathorized" });
                return;
            };

            const tokens = await TokenService.generate({ login: (data as any).login });

            await TokenService.save((data as any).login, tokens.refreshToken);

            res.status(200).send({ ...tokens, login: (data as any).userId });
        } catch (error) {
            res.status(500).json({
                message: "На сервере произошла ошибка. Попробуйте позже."
            });
        };
    }
);

export default router;
