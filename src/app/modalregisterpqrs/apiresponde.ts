import { Pqrs } from "./pqrs";

export interface apiresponse {
    status: boolean;
    data: Pqrs[];
    message: string;
  }