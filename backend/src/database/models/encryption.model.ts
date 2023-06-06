import { DataTypes, Model, Sequelize } from "sequelize";
import Conversation from "./conversations.model";

class EncryptionKey extends Model {
  public id!: number;
  public key!: string;
  public conversation_id!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public static initModel(sequelize: Sequelize) {
    EncryptionKey.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        key: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        conversation_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: Conversation,
            key: "id",
          },
        },
      },
      {
        sequelize,
        tableName: "encryption",
      }
    );
  }

  public static initAssociations() {
    this.belongsTo(Conversation);
  }
}

export default EncryptionKey;
