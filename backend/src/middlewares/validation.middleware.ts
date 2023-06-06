import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

const checkValidations = (req: Request, res: Response, next: NextFunction) => {
    const errors: any = validationResult(req);
    if (!errors.isEmpty()) {
        next(errors.array());
    }
    next();
};

export { checkValidations };
