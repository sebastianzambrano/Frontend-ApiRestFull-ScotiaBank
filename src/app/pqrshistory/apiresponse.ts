
import { Pqrshistory } from "./pqrshistory";

export interface apiresponse {
    status: boolean;
    data: Pqrshistory[];
    message: string;
  }