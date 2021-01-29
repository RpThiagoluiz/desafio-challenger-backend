import express from "express";
import cors from "cors";

//Connection -> Database
import "./database/connection";
//Routes
import routes from "./routes";
//ErrorHandler
import errorHandler from "./errors/handler";

const app = express();

app.use(cors()); //If u need can u add origin access, frontend
app.use(express.json());
app.use(routes);
app.use(errorHandler);

app.listen(3333, () => console.log("Server ON"));
