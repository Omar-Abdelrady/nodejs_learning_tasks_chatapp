import { Route } from "../types/routes.type";
Array;
import AuthController from "../controllers/auth/authController.controller";
import { Router } from "express";
import AuthValidation from "../validations/auth/registerAuth.validation";
import { checkValidations } from "../middlewares/validation.middleware";
import AuthMiddleware from "../middlewares/auth.middleware";

class AuthRoute implements Route {
  public path = "/api/v1/auth";
  controller = new AuthController();
  router = Router();
  validation = new AuthValidation();
  authMiddleware = new AuthMiddleware();
  constructor() {
    this.initializeRoutes();
  }
  initializeRoutes() {
    this.router.post(
      `${this.path}/register`,
      this.validation.registerAuthValidation,
      checkValidations,
      this.controller.register
    );

    this.router.post(
      `${this.path}/login`,
      this.validation.loginAuthValidation,
      checkValidations,
      this.controller.login
    );
    this.router.get(
      `${this.path}/verify-token`,
      this.authMiddleware.protect,
      this.controller.verifyToken
    );
  }
}
export default AuthRoute;
