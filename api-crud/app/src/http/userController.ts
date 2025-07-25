import { UserRepository } from "../repository/userRepository";
import { GetRequest, PostRequest } from "../types/routes";
import { UserService } from "../services/userService";
import { parseParamsUser } from "../utils/helpers";

const repository = new UserRepository();
const service = new UserService(repository);

export const listUser: GetRequest = async ({ res, params }) => {
  try {
    const queryParams = parseParamsUser(params);
    const users = await service.findAll(queryParams);
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

export const findUser: GetRequest = async ({ res, params }) => {
  const user = await service.findUser("2");

  if (!user) {
    res.writeHead(404);
    res.end(JSON.stringify({ error: "User not found" }));
  }

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(user.toJson));
};
