import { Request, Response } from "express";
import { isNumber } from "../validators/base";
import { sendError } from "../helpers";
import { News } from "../models";
import validators from "../validators";

async function getNews(req: Request, res: Response) {
    const offset = Number(req.query.offset);
    if (!isNumber(offset)) {
        return sendError(res, 400, "Неверное смещение");
    };
    const news = await News.getNews(offset);
    res.status(200).json(news);
};

async function addNews(req: Request, res: Response) {
    const post = validators.news.validateRaw(req.body);
    const news = await News.addNews(post);
    res.status(200).json(news);
};

async function getNewsById(req: Request, res: Response) {
    const news = await News.getNewsById(req.params.newsId);
    res.status(200).json(news);
};

async function getDrafts(req: Request, res: Response) {
    const offset = Number(req.query.offset);
    if (!isNumber(offset)) {
        return sendError(res, 400, "Неверное смещение");
    };
    const news = await News.getDrafts(offset);
    res.status(200).json(news);
};

async function publishNews(req: Request, res: Response) {
    const news = await News.publish(req.params.newsId);
    res.status(200).json(news);
};

async function editNews(req: Request, res: Response) {
    const post = validators.news.validate(req.body);
    const news = await News.editNews(post);
    res.status(200).json(news);
};

export {
    getNews,
    addNews,
    getNewsById,
    getDrafts,
    publishNews,
    editNews
};
