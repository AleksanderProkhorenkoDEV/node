import http, { IncomingMessage, ServerResponse } from "node:http";

type RequestHandler = (req: IncomingMessage, res: ServerResponse) => void;

type HttpMethod = "GET" | "POST";

type Routes = {
  method: HttpMethod;
  path: string;
  handler: RequestHandler;
};

export class Server {
  private server: http.Server;
  private routes: Routes[];
  constructor() {
    this.routes = [];
    this.server = http.createServer((req, res) => this.requestListener(req, res));
  }

  private requestListener(req: http.IncomingMessage, res: http.ServerResponse) {
    const url = new URL(req.url || "", `http://${req.headers.host}`);
    const path = url.pathname;
    const method = req.method as HttpMethod;

    const route = this.routes.find(
      (r) => r.method === method && r.path === path
    );

    if (route) {
      route.handler(req, res);
    } else {
      res.statusCode = 404;
      res.end("Not Found");
    }
  }

  addRoutes(method: HttpMethod, path: string, handler: RequestHandler) {
    this.routes.push({ method, path, handler });
  }

  start(port: number | string, callback?: () => void) {
    this.server.listen(port, callback);
  }
}
