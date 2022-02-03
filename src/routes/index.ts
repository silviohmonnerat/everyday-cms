import { Router } from "express";

import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";

import { SessionController } from "../controllers/SessionController";
import { DashboardController } from "../controllers/DashboardController";
import { ArchiveController } from "../controllers/ArchiveController";

const routes = Router();

const sessionController = new SessionController();
const dashboardController = new DashboardController();
const archiveController = new ArchiveController();

routes.get("/signin", sessionController.index);
routes.post("/signin", sessionController.store);

routes.get("/logout", ensureAuthenticate, sessionController.destroy);
routes.get("/dashboard", ensureAuthenticate, dashboardController.index);

routes.get("/archives", ensureAuthenticate, archiveController.index);
routes.get("/archives/create", ensureAuthenticate, archiveController.create);
routes.post("/archives", ensureAuthenticate, archiveController.store);
routes.get("/archives/:id", ensureAuthenticate, archiveController.show);
routes.get("/archives/:id/edit", ensureAuthenticate, archiveController.edit);
routes.put("/archives/:id", ensureAuthenticate, archiveController.update);
routes.delete("/archives/:id", ensureAuthenticate, archiveController.destroy);

export { routes };
