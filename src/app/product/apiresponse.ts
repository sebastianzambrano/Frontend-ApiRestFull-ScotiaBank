import { Product } from "./product";

export interface apiresponse {
    status: boolean;
    data: Product[];
    message: string;
  }