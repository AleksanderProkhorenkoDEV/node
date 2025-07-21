import { UserRepository } from "../repository/userRepository";
import { GetRequest, PostRequest } from "../types/routes";
import { UserService } from "../services/userService";

const repository = new UserRepository();
const service = new UserService(repository);

export const listUser: GetRequest = async ({ res, params }) => {
  try {
    const users = await service.findAll();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users.map((user) => user.toJson())));
  } catch (error) {
    res.writeHead(400);
    res.end(JSON.stringify({ error: error.message }));
  }
};

export const createUser: PostRequest = async ({ req, res }) => {
  let body = "";
  req.on("data", (chunk) => (body += chunk.toString()));

  req.on("end", async () => {
    if (!body.trim()) {
      res.writeHead(400);
      return res.end(JSON.stringify({ error: "Cuerpo de la solicitud vacío" }));
    }

    try {
      const userData = JSON.parse(body);
      const user = await service.createUser(userData);

      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify(user));
    } catch (error) {
      res.writeHead(400);
      res.end(JSON.stringify({ error: error.message }));
    }
  });
};

export const updateUser: PostRequest = async ({ req, res }) => {
  res.end();
};
