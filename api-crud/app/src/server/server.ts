import http from "node:http";
import { HttpMethod, RequestHandler, Router } from "./router";

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
  }

  addRoutes(method: HttpMethod, path: string, handler: RequestHandler) {
    this.routes.save(method, path, handler);
  }

  start(port: number | string, callback?: () => void) {
    this.server.listen(port, callback);
  }
}
