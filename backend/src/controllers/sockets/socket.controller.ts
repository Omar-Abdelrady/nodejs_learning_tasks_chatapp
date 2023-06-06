import { Server, Socket } from "socket.io";
import App from "../../app";
import { NextFunction, Request, Response } from "express";

class SocketController {
  public io: Server;

  constructor(io: Server) {
    this.io = io;
  }
  public message = (req: Request, res: Response, next: NextFunction) => {
    this.io.on("connection", (socket: Socket) => {
      console.log("user connected");
      socket.on("disconnect", () => {
        console.log("user disconnected");
      });
    });
  };
}

export default SocketController;
