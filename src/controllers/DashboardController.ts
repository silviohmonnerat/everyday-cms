import { Request, Response } from "express";

import { prisma } from "../services/prisma";

export class DashboardController {
  async index(request: Request, response: Response) {
    try {
      const { userId } = request;

      const archives = await prisma.achive.findMany({
        skip: 15,
        orderBy: {
          createdAt: "desc",
        },
      });

      return response.render("dashboard", {
        archives,
      });
    } catch (error) {
      console.error(error);
    }
  }
}
