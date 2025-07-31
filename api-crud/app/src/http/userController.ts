import { UserRepository } from "../repository/userRepository";
import { GetRequest, PostRequest, PutRequest } from "../types/routes";
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
      return res.end(JSON.stringify(user));
    } catch (error) {
      res.writeHead(400);
      res.end(JSON.stringify({ error: error.message }));
    }
  });
};

export const updateUser: PutRequest = async ({ req, res, params }) => {
  let body = "";
  req.on("data", (chunk) => (body += chunk.toString()));

  req.on("end", async () => {
    try {
      const { id } = params;
      if (!id) {
        res.statusCode = 400;
        return res.end(JSON.stringify({ error: "User ID is required" }));
      }

      const updateData = JSON.parse(body);
      const updatedUser = await service.updateUser(id, updateData);

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(updatedUser));
    } catch (e) {
      const statusCode = e.message === "User not found" ? 404 : 400;
      res.writeHead(statusCode, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: e.message }));
    }
  });
};

export const findUser: GetRequest = async ({ res, params }) => {
  const user = await service.findUser(params.id);

  if (!user) {
    res.writeHead(404);
    res.end(JSON.stringify({ error: "User not found" }));
  }

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(user));
};
