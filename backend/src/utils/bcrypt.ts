import { compare, genSaltSync, hashSync } from "bcrypt";

const salt = genSaltSync(10);
const hashPassword = (password: string) => {
  return hashSync(password, salt);
};

const comparePassword = async (enteredPassword: string, password: string) => {
  try {
    return await compare(enteredPassword, password);
  } catch (error) {
    console.log(error);
  }
};

export { hashPassword, comparePassword };
