import { NextFunction, Request, Response } from "express";

const notFound = (req: Request, res: Response, next: NextFunction) => {
    const error: Error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
};

const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _next: NextFunction
) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    const errorMessage: any = process.env.NODE_ENV === "production" ? null : err;
    res
        .status(statusCode)
        .json({
            success: false,
            error: errorMessage.message ? errorMessage.message : errorMessage,
        });
};

export { notFound, errorHandler };
