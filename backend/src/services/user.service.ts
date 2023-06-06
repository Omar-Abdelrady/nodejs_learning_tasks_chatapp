import User from "../database/models/users.model";
import { CreateOptions, FindOptions } from "sequelize";
import { UserType } from "../types/user.type";
class UserService {
  // public async findAll(query: FindOptions): Promise<any> {
  //   try {
  //     return await this.userModel.findAll(query);
  //   } catch (err: any) {
  //     throw new Error(err.message);
  //   }
  // }
  //
  public async find(query: FindOptions): Promise<any> {
    try {
      return await User.findOne(query);
    } catch (err: any) {
      throw new Error(err.message);
    }
  }

  public async create(data: UserType): Promise<UserType> {
    try {
      const user: UserType = await User.create(data);
      return user;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }

  // public async update(query: FindOptions): Promise<any> {
  //   try {
  //     const result = await this.userModel.findOne(query);
  //     if (!result) {
  //       throw new Error("User not found");
  //     }
  //     await result.update({
  //       ...query,
  //     });
  //     return result;
  //   } catch (err: any) {
  //     throw new Error(err.message);
  //   }
  // }
  //
  // public async delete(query: FindOptions): Promise<any> {
  //   try {
  //     const result = await this.userModel.findOne(query);
  //     if (!result) {
  //       throw new Error("User not found");
  //     }
  //     await result.destroy();
  //     return result;
  //   } catch (err: any) {
  //     throw new Error(err.message);
  //   }
  // }
}
export default UserService;
