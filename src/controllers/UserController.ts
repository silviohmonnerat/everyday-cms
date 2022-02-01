import { Request, Response } from "express";

import { getRedis } from "../services/redis";

type User = {
  id: string;
  email: string;
  name: string;
  password: string;
};

export class UserController {
  async handle(request: Request, response: Response) {
    const { userId } = request;
    console.time();

    const userRedis = await getRedis(`user-${userId}`);
    const user: User = JSON.parse(userRedis);

    console.timeEnd();

    return response.json(user);
  }
}
