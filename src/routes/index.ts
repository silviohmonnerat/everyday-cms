import { Router } from "express";

import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";

import { SessionController } from "../controllers/SessionController";
import { DashboardController } from "../controllers/DashboardController";

const routes = Router();

const sessionController = new SessionController();
const dashboardController = new DashboardController();

routes.get("/signin", sessionController.index);
routes.post("/signin", sessionController.store);

routes.get("/logout", ensureAuthenticate, sessionController.destroy);
routes.get("/dashboard", ensureAuthenticate, dashboardController.index);

export { routes };
