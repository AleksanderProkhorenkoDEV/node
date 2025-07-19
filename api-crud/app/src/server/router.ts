import { IncomingMessage, ServerResponse } from "node:http";

export type HttpMethod = "GET" | "POST" | "PUT";
export type RequestHandler = (
  req: IncomingMessage,
  res: ServerResponse
) => void;

interface Route {
  method: HttpMethod;
  pathPattern: string;
  regex: RegExp;
  paramNames: string[];
  handler: RequestHandler;
}

export class Router {
  private routes: Route[] = [];

  save(method: HttpMethod, path: string, handler: RequestHandler) {
    this.convertToPattern(path);
  }

  convertToPattern(originalPath: string) {
    const dividePath = originalPath.split("/");
    console.log(dividePath);
  }
}
