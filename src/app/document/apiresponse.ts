import { Document } from "./document";

export interface apiresponse {
    status: boolean;
    data: Document[];
    message: string;
  }