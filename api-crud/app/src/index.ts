import http from "node:http";
import { routesApi } from "./routes";

const server = http.createServer();

server.on("request", (req, res) => {
  const method = req.method;

  const handler = routesApi[method]?.[req.url];

  if (handler) {
    handler(req, res);
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
});
server.listen(process.env.PORT);
