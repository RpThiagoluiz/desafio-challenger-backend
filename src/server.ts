import express from "express";

//Connection -> Database
import "./database/connection";
//Routes
import routes from "./routes";

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log("Server ON"));
