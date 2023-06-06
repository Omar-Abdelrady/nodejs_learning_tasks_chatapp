import { DataTypes, Model, Sequelize } from "sequelize";
import User from "./users.model";
import Message from "./message.model";

class Media extends Model {
  public id!: number;
  public url!: string;
  public medible_id!: number;
  public medible_type!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public static initModel(sequelize: Sequelize) {
    this.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        url: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        medible_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        medible_type: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: "media",
      }
    );
  }

  public static initAssociations() {
    this.belongsTo(User, {
      foreignKey: "medible_id",
      constraints: false,
      scope: { mediable_type: "user" },
      as: "user",
    });
    this.belongsTo(Message, {
      foreignKey: "medible_id",
      constraints: false,
      scope: { mediable_type: "message" },
      as: "message",
    });
  }
}

export default Media;
