import { NextFunction, Request, Response } from "express";
import User from "../../database/models/users.model";
import { UserService } from "../../services";
import { sendSuccess } from "../../utils/handelResponse";
import { comparePassword } from "../../utils/bcrypt";
import { generateToken } from "../../utils/generateToken";

class AuthController {
  public userService = new UserService();

  public login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;
      const user = await this.userService.find({
        where: { email },
      });
      if (!user) throw new Error("User not found");
      if (!(await comparePassword(password, user.password))) {
        throw new Error("Password is incorrect");
      }
      delete user.dataValues.password;
      sendSuccess(res, { ...user.dataValues, token: generateToken(user) });
    } catch (err: any) {
      next(err.message);
    }
  };

  public register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await this.userService.create(req.body);
      return res.status(200).json(user);
    } catch (err: any) {
      next(err.message);
    }
  };

  public async logout(req: any, res: any) {
    return res.status(200).json({
      message: "Logout successful",
    });
  }

  public async verifyToken(req: Request, res: Response, next: NextFunction) {
    try {
      sendSuccess(res, "Token verified!");
    } catch (err: any) {
      next(err.message);
    }
  }
}
export default AuthController;
