import { HttpMethod, RequestHandler } from "../types/routes";
import { URL } from "node:url";

interface Route {
  method: HttpMethod;
  pattern: RegExp;
  path: string;
  handler: RequestHandler;
}

export class Router {
  private routes: Route[] = [];

  save(method: HttpMethod, path: string, handler: RequestHandler) {
    const pattern = this.convertToPattern(path);
    this.routes.push({ method, pattern, path, handler });
  }

  convertToPattern(originalPath: string) {
    return new RegExp(
      `^${originalPath.replace(/\//g, "\\/").replace(/\:\w+/g, "([^/]+)")}$`
    );
  }

  searchRoute(method: HttpMethod, path: string): undefined | Route {
    const routesFilterByMethod = this.routes.filter((r) => r.method === method);

    const route = routesFilterByMethod.find((route) =>
      path.match(route.pattern)
    );

    if (!route) return undefined;

    return route;
  }

  extractParams(url: URL, route: Route): Record<string, string> {
    let params: Record<string, string> = {};
    const pathParts = url.pathname.match(route.pattern).filter(Boolean);
    const dinamicKeys = route.path.match(route.pattern).filter(Boolean);

    //Get the key and value of dynamic params in route (example: /user/:id)
    for (let i = 1; i < pathParts.length && i < dinamicKeys.length; i++) {
      params[dinamicKeys[i].replace(/\:/, "")] = pathParts[i];
    }

    //Get the query param of the url (example: /user?name=Aleksander)
    for (const [key, value] of url.searchParams.entries()) {
      params[key] = value;
    }

    return params;
  }

  mergeParams(
    routeParams: Record<string, string>,
    searchParams: URLSearchParams
  ): Record<string, string> {
    return {
      ...Object.fromEntries(searchParams.entries()), // Query params
      ...routeParams, // Los parámetros de ruta tienen prioridad
    };
  }
}
