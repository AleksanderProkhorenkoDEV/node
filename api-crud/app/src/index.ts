import {
  createUser,
  listUser,
  updateUser,
  findUser,
  deleteUser,
} from "./http/userController";
import { Server } from "./server/server";

const server = new Server();

server.addRoutes("GET", "/list-users", listUser);

server.addRoutes("GET", "/user/:id", findUser);

server.addRoutes("POST", "/create-user", createUser);

server.addRoutes("PUT", "/update-user/:id", updateUser);

server.addRoutes("DELETE", "/delete-user/:id", deleteUser);

server.start(3000, () => {
  console.log("Server running on port 3000");
});
