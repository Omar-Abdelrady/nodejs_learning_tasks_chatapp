import { DataTypes, Model, Sequelize } from "sequelize";
import User from "./users.model";

class UserConversation extends Model {
  public id!: number;
  public user_id!: number;
  public conversation_id!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public static initModel(sequelize: Sequelize): void {
    this.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "users",
            key: "id",
          },
        },
        conversation_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: "userConversation",
      }
    );
  }

  public static initAssociations(): void {
    this.hasOne(User);
  }
}

export default UserConversation;
