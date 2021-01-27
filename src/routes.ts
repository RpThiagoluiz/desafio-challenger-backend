import { Router } from "express";

//Controller
import NewsController from "./controllers/NewsController";

const routes = Router();

routes.get("/classificados", (request, response) => {
  return response.json({ message: "Hello World" });
});
routes.post("/classificados/criar", NewsController.create);

//upTo
routes.put("/classificado/:id");
routes.delete("/classificado/:id");

export default routes;
