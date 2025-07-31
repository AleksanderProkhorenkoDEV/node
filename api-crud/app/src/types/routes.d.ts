import { IncomingMessage, ServerResponse } from "node:http";

export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
export type RequestHandler = GetRequest | PostRequest;

type GetHandleParams = {
  res: ServerResponse;
  params?: Record<string, string>;
};

type PostHandleParams = {
  res: ServerResponse;
  req: IncomingMessage;
};

type PutHandleParams = {
  res: ServerResponse;
  req: IncomingMessage;
  params: Record<string, string>;
};

export type GetRequest = (args: GetHandleParams) => void;
export type PostRequest = (args: PostHandleParams) => void;
export type PutRequest = (args: PutHandleParams) => void;
