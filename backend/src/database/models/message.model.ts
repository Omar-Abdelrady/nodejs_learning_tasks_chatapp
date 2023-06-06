import { DataTypes, Model, Sequelize } from "sequelize";
import Media from "./media.model";

class Message extends Model {
  public id!: number;
  public message!: string;
  public user_id!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public static initModel(sequelize: Sequelize) {
    this.init(
      {
        message: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "users",
            key: "id",
          },
        },
      },
      {
        sequelize,
        tableName: "messages",
      }
    );
  }

  public static initAssociations() {
    this.hasMany(Media, {
      foreignKey: "mediable_id",
      constraints: false,
      scope: {
        mediable_type: "message",
      },
      as: "media",
    });
  }
}

export default Message;
