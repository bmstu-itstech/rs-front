import { Request, Response } from "express";
import { isNumber, isString } from "../validators/base";
import { sendError } from "../helpers";
import { Event } from "../models";
import validators from "../validators";

async function getEvents(req: Request, res: Response) {
    const offset = Number(req.query.offset);
    if (!isNumber(offset)) {
        return sendError(res, 400, "Неверное смещение");
    };
    const events = await Event.get(offset);
    res.status(200).json(events);
};

async function addEvent(req: Request, res: Response) {
    const rawEvent = validators.event.validateRaw(req.body);
    const event = await Event.add(rawEvent);
    res.status(200).json(event);
};

async function editEvent(req: Request, res: Response) {
    const rawEvent = validators.event.validate(req.body);
    const event = await Event.update(rawEvent);
    res.status(200).json(event);
};

async function removeEvent(req: Request, res: Response) {
    const { eventId } = req.query;
    if (!isString(eventId)) {
        return sendError(res, 400, "Неверный идентификатор мероприятия");
    };
    await Event.remove(eventId);
    res.status(200).json({ result: 1 });
};

export {
    getEvents,
    addEvent,
    editEvent,
    removeEvent
};
