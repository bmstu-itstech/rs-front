import { Request, Response } from "express";
import { sendError } from "../helpers";
import { Doc } from "../models";
import validators from "../validators";
import { isString } from "../validators/base";

async function getDocs(req: Request, res: Response) {
    const ids = (req.query.ids as string).split(",");
    if (ids.length === 0) {
        return sendError(res, 400, "Передан пустой массив идентификаторов");
    };
    const docs = await Doc.getByIds(ids);
    res.status(200).json(docs);
};

async function addDoc(req: Request, res: Response) {
    const rawDoc = validators.doc.validateRaw(req.body);
    const doc = await Doc.add(rawDoc);
    res.status(200).json(doc);
};

async function removeDoc(req: Request, res: Response) {
    const { docId } = req.query;
    if (!isString(docId)) {
        return sendError(res, 400, "Неверный идентификатор документа");
    };
    await Doc.remove(docId);
    res.status(200).json({ result: 1 });
};

export {
    getDocs,
    addDoc,
    removeDoc
};
