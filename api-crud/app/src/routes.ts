import { IncomingMessage, ServerResponse } from "node:http";

type RequestHandler = (req: IncomingMessage, res: ServerResponse) => void;

type Methods = "GET" | "POST";
type RoutesApi = {
  [method in Methods]?: {
    [route: string]: RequestHandler;
  };
};

export const routesApi: RoutesApi = {
  GET: {
    "/list-user": (req, res) => {
      console.log("se acabo");
      res.end();
    },
  },
};
