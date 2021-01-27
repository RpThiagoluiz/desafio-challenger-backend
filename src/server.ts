import express from "express";
import { getRepository } from "typeorm";
import News from "./models/News";

//Connection -> Database
import "./database/connection";

const app = express();

app.use(express.json());

app.get("/classificados", (request, response) => {
  return response.json({ message: "Hello World" });
});

app.post("/classificados/criar", async (request, response) => {
  console.log(request.body);
  const { title, description } = request.body;
  const newsRepository = getRepository(News);

  const createNew = newsRepository.create({
    title,
    description,
  });

  await newsRepository.save(createNew);

  return response.json({ message: "Criado" });
});

//upTo
app.put("/classificado/:id");
app.delete("/classificado/:id");

app.listen(3333, () => console.log("Server ON"));
