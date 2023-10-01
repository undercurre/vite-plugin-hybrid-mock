import { IncomingMessage, ServerResponse } from "http";

export type MethodType = "get" | "post" | "put" | "delete" | "patch";

export type Recordable<T = any> = Record<string, T>;

export interface RespThisType {
  req: IncomingMessage;
  res: ServerResponse;
  parseJson: () => any;
}

export interface MockMethod {
  url: string;
  method?: MethodType;
  timeout?: number;
  statusCode?: number;
  response?: (
    this: RespThisType,
    opt: {
      url: Recordable;
      body: Recordable;
      query: Recordable;
      headers: Recordable;
    }
  ) => any;
  rawResponse?: (
    this: RespThisType,
    req: IncomingMessage,
    res: ServerResponse
  ) => void;
}
