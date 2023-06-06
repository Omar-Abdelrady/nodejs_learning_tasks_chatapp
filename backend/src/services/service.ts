import User from "../database/models/users.model";
import { FindOptions, Model, ModelType } from "sequelize";
class Services {
  public model: any;
  constructor(model: any) {
    console.log("asd");
    this.model = model;
  }
  public async findAll(query: FindOptions): Promise<any> {
    try {
      return await this.model.findAll(query);
    } catch (err: any) {
      throw new Error(err.message);
    }
  }

  public async find(query: FindOptions): Promise<any> {
    try {
      return await this.model.findOne(query);
    } catch (err: any) {
      throw new Error(err.message);
    }
  }

  public async create(query: FindOptions): Promise<any> {
    try {
      return await this.model.create(query);
    } catch (err: any) {
      throw new Error(err.message);
    }
  }

  public async update(query: FindOptions): Promise<any> {
    try {
      const result = await this.model.findOne(query);
      if (!result) {
        throw new Error("User not found");
      }
      await result.update({
        ...query,
      });
      return result;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }

  public async delete(query: FindOptions): Promise<any> {
    try {
      const result = await this.model.findOne(query);
      if (!result) {
        throw new Error("User not found");
      }
      await result.destroy();
      return result;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
}
export default Services;
