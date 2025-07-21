import { createUser, listUser, updateUser } from "./http/userController";
import { Server } from "./server/server";

const server = new Server();

server.addRoutes("GET", "/list-users", listUser);

server.addRoutes("POST", "/create-user", createUser);

server.addRoutes("PUT", "/update-user/:id", updateUser);

server.addRoutes("GET", "/user/:id/data/:name", (res) => {res.end()});

server.start(3000, () => {
  console.log("Server running on port 3000");
});
