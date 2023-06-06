import { Response } from "express";

const sendSuccess = (res: Response, data: any, statusCode = 200): void => {
  res.status(statusCode).json({ success: true, data });
};

const sendError = (
  res: Response,
  message: string | null,
  statusCode = 500
): void => {
  console.log("omarrrrrrrr");
  res.status(statusCode).json({ success: false, error: message });
};
export { sendSuccess, sendError };
