import express from "express";
import errorhandler from "errorhandler";
import indexRoutes from "./routes/index.routes";

const app = express();

app.use(errorhandler());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(indexRoutes);

export { app };