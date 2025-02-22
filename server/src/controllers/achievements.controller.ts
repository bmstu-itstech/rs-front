import { Request, Response } from "express";
import { Achievement } from "../models";
import { isNumber } from "../validators/base";
import { sendError } from "../helpers";
import validators from "../validators";

async function getAchievements(req: Request, res: Response) {
    const offset = Number(req.query.offset);
    if (!isNumber(offset)) {
        return sendError(res, 400, "Неверное смещение");
    };
    const achievements = await Achievement.get(offset);
    res.status(200).json(achievements);
};

async function createAchievement(req: Request, res: Response) {
    const rawAchievement = validators.achievement.validateRaw(req.body);
    const achievement = await Achievement.add(rawAchievement);
    res.status(200).json(achievement);
};

async function editAchievement(req: Request, res: Response) {
    const rawAchievement = validators.achievement.validate(req.body);
    const achievement = await Achievement.update(rawAchievement);
    res.status(200).json(achievement);
};

async function deleteAchievement(req: Request, res: Response) {
    await Achievement.remove(req.params.achievementId);
    res.status(200).json({ result: 1 });
};

async function getAchievementById(req: Request, res: Response) {
    const achievement = await Achievement.getById(req.params.achievementId);
    res.status(200).json(achievement);
};

export {
    getAchievements,
    createAchievement,
    editAchievement,
    deleteAchievement,
    getAchievementById
};
