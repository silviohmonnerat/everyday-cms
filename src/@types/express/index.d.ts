declare namespace Express {
  export interface Request {
    id: number;
    userId: string;
    password: string;
  }
}
