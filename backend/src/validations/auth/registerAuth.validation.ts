import { body, ValidationChain } from "express-validator";
import { UserService } from "../../services";

class AuthValidation {
  public userService = new UserService();

  public registerAuthValidation: ValidationChain[] = [
    body("email")
      .isEmail()
      .withMessage("Email is not valid")
      .custom(async (email) => {
        const user = await this.userService.find({ where: { email } });
        if (user) throw new Error("Email is already in use");
      }),
    body("password").isLength({ min: 6 }).withMessage("Password is not valid"),
    body("first_name").notEmpty().withMessage("Name is not valid"),
    body("last_name").notEmpty().withMessage("Last name is not valid"),
  ];

  public loginAuthValidation: ValidationChain[] = [
    body("email").isEmail().withMessage("Email is not valid"),
    body("password").isLength({ min: 6 }).withMessage("Password is not valid"),
  ];
}

export default AuthValidation;
