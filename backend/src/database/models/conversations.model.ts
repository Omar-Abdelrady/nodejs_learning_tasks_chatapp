import { DataTypes, Model, Sequelize } from "sequelize";
import UserConversation from "./userConversation.model";
import Message from "./message.model";
import EncryptionKey from "./encryption.model";

class Conversation extends Model {
  public id!: number;
  public conversation_name!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public static initModel(sequelize: Sequelize) {
    Conversation.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        conversation_name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: "conversations",
      }
    );
  }

  public static initAssociations(): void {
    this.hasMany(UserConversation);
    this.hasMany(Message);
    this.hasOne(EncryptionKey);
  }
}
export default Conversation;
