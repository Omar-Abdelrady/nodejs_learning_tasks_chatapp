import { Route } from "../types/routes.type";
import { Router } from "express";
import SocketController from "../controllers/sockets/socket.controller";
import { Server } from "socket.io";

class MessageRoute implements Route {
  public path = "/api/v1/messages";
  public router = Router();
  public socketController;

  constructor(io: Server) {
    this.socketController = new SocketController(io);
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, this.socketController.message);
  }
}
export default MessageRoute;
