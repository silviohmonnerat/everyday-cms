import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import auht from "../config/auth";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticate(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { "everyday.token": token } = request.cookies;

  if (!token) {
    return response.redirect("signin");
  }

  try {
    const { sub } = verify(token, auht.jwt.secret) as IPayload;

    request.userId = sub;

    return next();
  } catch (error) {
    return response.redirect("signin");
  }
}
