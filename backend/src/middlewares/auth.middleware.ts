import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { sendError } from "../utils/handelResponse";
import { UserService } from "../services";
import { CustomRequest } from "../types/CustomeRequest.type.type";

class AuthMiddleware {
  public userService = new UserService();
  public protect = async (
    req: CustomRequest,
    res: Response,
    next: NextFunction
  ) => {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      try {
        token = req.headers.authorization.split(" ")[1];
        const decode: any = await jwt.verify(
          token,
          process.env.JWT_SECRET as string
        );
        req.user = await this.userService.find({ where: { id: decode.id } });
        next();
      } catch (error: any) {
        next(error.message);
      }
    }
  };
}

export default AuthMiddleware;
