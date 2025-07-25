import { IncomingMessage, ServerResponse } from "node:http";

export type HttpMethod = "GET" | "POST" | "PUT";
export type RequestHandler = GetRequest | PostRequest;

type GetHandleParams = {
  res: ServerResponse;
  params?: Record<string, string>;
};

type PostHandleParams = {
  res: ServerResponse;
  req: IncomingMessage;
};

export type GetRequest = (args: GetHandleParams) => void;
export type PostRequest = (args: PostHandleParams) => void;
