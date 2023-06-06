import { DataTypes, Model, Sequelize } from "sequelize";
import UserConversation from "./userConversation.model";
import Message from "./message.model";
import Media from "./media.model";
import { hashPassword } from "../../utils/bcrypt";
import { generateToken } from "../../utils/generateToken";
import { UserType } from "../../types/user.type";
import { getCurrentRoute } from "../../utils/routeUtils";
import { Request } from "express";
class User extends Model {
  public id!: number;
  public first_name!: string;
  public last_name!: string;
  public email!: string;
  public password!: string;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;

  public static initModel(sequelize: Sequelize) {
    User.init(
      {
        first_name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        last_name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: "users",
      }
    );
  }
  public static initAssociations(): void {
    this.hasMany(UserConversation);
    this.hasMany(Message);
    this.hasOne(Media, {
      foreignKey: "mediable_id",
      constraints: false,
      scope: {
        mediable_type: "user",
      },
      as: "media",
    });
  }

  public static initHooks(): void {
    User.beforeCreate(async (user) => {
      user.password = await hashPassword(user.password);
    });
  }
}

export default User;
