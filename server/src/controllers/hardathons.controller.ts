import { Request, Response } from "express";
import { isNumber, isString } from "../validators/base";
import { sendError } from "../helpers";
import { Hardathon, HardathonProject } from "../models";
import validators from "../validators";

async function getHardathons(req: Request, res: Response) {
    const offset = Number(req.query.offset);
    if (!isNumber(offset)) {
        return sendError(res, 400, "Неверное смещение");
    };
    const hardathons = await Hardathon.get(offset);
    res.status(200).json(hardathons);
};

async function addHardathon(req: Request, res: Response) {
    const rawHardathon = validators.hardathon.validateRaw(req.body);
    const hardathon = await Hardathon.add(rawHardathon);
    res.status(200).json(hardathon);
};

async function editHardathon(req: Request, res: Response) {
    const rawHardathon = validators.hardathon.validate(req.body);
    const hardathon = await Hardathon.update(rawHardathon);
    res.status(200).json(hardathon);
};

async function removeHardathon(req: Request, res: Response) {
    const hardathonId = req.query.hardathonId;
    if (!isString(hardathonId)) {
        return sendError(res, 400, "Неверный идентификатор хардатона");
    };
    await Hardathon.remove(hardathonId);
    res.status(200).json({ result: 1 });
};

async function getHardathonProjects(req: Request, res: Response) {
    const hardathonId = req.query.hardathonId;
    if (!isString(hardathonId)) {
        return sendError(res, 400, "Неверный идентификатор хардатона");
    };
    const offset = Number(req.query.offset);
    if (!isNumber(offset)) {
        return sendError(res, 400, "Неверное смещение");
    };
    const projects = await HardathonProject.get(hardathonId, offset);
    res.status(200).json(projects);
};

async function addHardathonProject(req: Request, res: Response) {
    const rawProject = validators.hardathonProject.validateRaw(req.body);
    const project = await HardathonProject.add(rawProject);
    res.status(200).json(project);
};

async function editHardathonProject(req: Request, res: Response) {
    const rawProject = validators.hardathonProject.validate(req.body);
    const project = await HardathonProject.update(rawProject);
    res.status(200).json(project);
};

async function removeHardathonProject(req: Request, res: Response) {
    const { projectId } = req.params;
    await HardathonProject.remove(projectId);
    res.status(200).json({ result: 1 });
};

export {
    getHardathons,
    addHardathon,
    editHardathon,
    removeHardathon,
    getHardathonProjects,
    addHardathonProject,
    editHardathonProject,
    removeHardathonProject
};
