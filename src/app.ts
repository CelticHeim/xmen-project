import express from "express";
// import bodyParser from "body-parser";

import indexRoutes from "./routes/index.routes";

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(indexRoutes);

export { app };