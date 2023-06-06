import { Sequelize } from "sequelize";

const env = process.env.NODE_ENV || "development";

// @ts-ignore
import * as configJson from "../config/config.json";
import User from "./users.model";
import Conversation from "./conversations.model";
import UserConversation from "./userConversation.model";
import Message from "./message.model";
import EncryptionKey from "./encryption.model";
import Media from "./media.model";
const config: any = configJson[env as keyof typeof configJson];
const sequelize = config.url
  ? new Sequelize(config.url, config)
  : new Sequelize(config.database, config.username, config.password, config);

const initModals = async (sequelizeInstance: Sequelize) => {
  try {
    console.info("Initializing models...");
    // await Todo.initModel(sequelizeInstance);
    await User.initModel(sequelizeInstance);
    await Conversation.initModel(sequelizeInstance);
    await UserConversation.initModel(sequelizeInstance);
    await Message.initModel(sequelizeInstance);
    await EncryptionKey.initModel(sequelizeInstance);
    await Media.initModel(sequelizeInstance);
    console.info("Models initialized.");
  } catch (err: any) {
    console.error(err.message);
  }
};

const initHooks = async () => {
  try {
    console.info("Initializing sequelize hooks...");
    await User.initHooks();
    console.info("Hooks initialized");
  } catch (err: any) {
    console.error(err.message);
  }
};

const initAssociations = async () => {
  try {
    console.info("Initializing sequelize associations...");
    await User.initAssociations();
    await Conversation.initAssociations();
    await UserConversation.initAssociations();
    await Message.initAssociations();
    await EncryptionKey.initAssociations();
    await Media.initAssociations();
    console.info("Associations initialized");
  } catch (err: any) {
    console.error(err.message);
  }
};

export { Sequelize, sequelize, initModals, initAssociations, initHooks };
