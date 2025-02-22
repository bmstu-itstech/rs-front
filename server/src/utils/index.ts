import { Request, Response } from "express";
import { validationResult } from "express-validator";

export function handleErrors(req: Request, res: Response) {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({
      error: {
        message: "INVALID_DATA",
        code: 1,
        errors: errors.array()
      }
    });
    return true;
  };
  return false;

};
