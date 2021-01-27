import { Router } from "express";

//Controller
import NewsController from "./controllers/NewsController";

const routes = Router();

routes.get("/classificados", NewsController.index);
routes.post("/classificados/criar", NewsController.create);
routes.get("/classificados/:id", NewsController.show);
routes.delete("/classificado/:id", NewsController.delete);

//upTo
//routes.put("/classificado/:id");

export default routes;
