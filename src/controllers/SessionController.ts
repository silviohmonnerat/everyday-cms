import { Request, Response, NextFunction } from "express";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";

import auth from "../config/auth";
import { prisma } from "../services/prisma";

interface IAuthenticateClient {
  email: string;
  password: string;
}

export class SessionController {
  async index(request: Request, response: Response) {
    response.render("signin");
  }

  async store(request: Request, response: Response) {
    try {
      const { email, password }: IAuthenticateClient = request.body;

      const user = await prisma.user.findFirst({
        where: {
          email,
        },
      });

      if (!user) {
        return response.render("signin", {
          message: "User not found!",
          messageClass: "danger",
        });
      }

      const passwordMatch = await compare(password, user.password);

      if (!passwordMatch) {
        return response.render("signin", {
          message: "Password invalid!",
          messageClass: "danger",
        });
      }

      const token = jwt.sign({ email }, auth.jwt.secret, {
        expiresIn: auth.jwt.expiresIn,
      });

      response.cookie("everyday.token", token);

      return response.redirect("dashboard");
    } catch (error) {
      return response.render("signin", {
        message: "Not allow!",
        messageClass: "danger",
      });
    }
  }

  async destroy(request: Request, response: Response, next: NextFunction) {
    response.clearCookie("everyday.token");
    response.redirect("signin");
  }
}
