import { createUser, listUser } from "./http/userController";
import { Server } from "./server/server";

const server = new Server();

server.addRoutes("GET", "/list-users", listUser);

server.addRoutes("POST", "/create-user", createUser);

server.addRoutes("PUT", "/update-user/:id", (req, res) => {
  console.log("encontro la ruta");
  res.end();
});

server.addRoutes("GET", "/user/:id/data/:name", () => {});

server.start(3000, () => {
  console.log("Server running on port 3000");
});
