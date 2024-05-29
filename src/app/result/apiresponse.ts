import { Result } from "./result";

export interface apiresponse {
    status: boolean;
    data: Result[];
    message: string;
  }