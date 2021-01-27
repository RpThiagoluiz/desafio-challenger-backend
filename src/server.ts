import express from "express";

//Connection -> Database
import "./database/connection";
//Routes
import routes from "./routes";
//ErrorHandler
import errorHandler from "./errors/handler";

const app = express();

app.use(express.json());
app.use(routes);
app.use(errorHandler);

app.listen(3333, () => console.log("Server ON"));
