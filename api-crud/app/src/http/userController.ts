import { UserRepository } from "../repository/userRepository";
import { UserService } from "../services/userService";

const repository = new UserRepository();
const service = new UserService(repository);

export const listUser = async (req: any, res: any) => {
  try {
    const users = await service.findAll();
    console.log(users);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users.map((user) => user.toJson())));
  } catch (error) {
    res.writeHead(400);
    res.end(JSON.stringify({ error: error.message }));
  }
};

export const createUser = async (req: any, res: any) => {
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
