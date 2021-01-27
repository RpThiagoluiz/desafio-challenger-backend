import express from "express";

const app = express();

app.use(express.json());

app.get("/classificados", (request, response) => {
  return response.json({ message: "Hello World" });
});

app.post("/classificados/criar");

//upTo
app.put("/classificado/:id");
app.delete("/classificado/:id");

app.listen(3333, () => console.log("Server ON"));
