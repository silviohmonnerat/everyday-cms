import { Request, Response } from "express";

export class DashboardController {
  async index(request: Request, response: Response) {
    response.render("dashboard");
  }
}
