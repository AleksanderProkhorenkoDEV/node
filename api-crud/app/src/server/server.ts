import http from "node:http";
import { Router } from "./router";
import {
  GetRequest,
  HttpMethod,
  PostRequest,
  PutRequest,
  RequestHandler,
} from "../types/routes";

export class Server {
  private server: http.Server;
  private routes: Router;

  constructor() {
    this.routes = new Router();
    this.server = http.createServer((req, res) =>
      this.requestListener(req, res)
    );
  }

  private requestListener(req: http.IncomingMessage, res: http.ServerResponse) {
    const url = new URL(req.url || "", `http://${req.headers.host}`);
    const path = url.pathname;
    const method = req.method as HttpMethod;

    const route = this.routes.searchRoute(method, path);

    if (!route) {
      res.writeHead(404, {
        "Content-Type": "application/json",
      });
      return res.end(
        JSON.stringify({
          error: "Route not found",
          path: req.url,
          statusCode: 404,
        })
      );
    }

    const mergeParams = this.routes.mergeParams(
      this.routes.extractParams(url, route),
      url.searchParams
    );

    switch (method) {
      case "GET":
        const getHandler = route.handler as GetRequest;
        getHandler({
          res: res,
          params: mergeParams,
        });
        break;
      case "POST":
        console.log("SE EJECUTA");

        const postHandler = route.handler as PostRequest;
        postHandler({
          res: res,
          req: req,
        });
        break;
      case "PUT":
        const putHandler = route.handler as PutRequest;
        putHandler({
          res: res,
          req: req,
          params: mergeParams,
        });
        break;
    }
  }

  addRoutes(method: HttpMethod, path: string, handler: RequestHandler) {
    this.routes.save(method, path, handler);
  }

  start(port: number | string, callback?: () => void) {
    this.server.listen(port, callback);
  }
}
