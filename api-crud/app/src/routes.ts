import { IncomingMessage, ServerResponse } from "node:http";
import { createUser, listUser } from "./http/userController";

type RequestHandler = (req: IncomingMessage, res: ServerResponse) => void;

type Methods = "GET" | "POST";
type RoutesApi = {
  [method in Methods]?: {
    [route: string]: RequestHandler;
  };
};

export const routesApi: RoutesApi = {
  GET: {
    "/list-user": listUser,
  },
  POST: {
    "/create-user": createUser,
  },
};
