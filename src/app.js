import express from "express";
import indexRoutes from "./routes/index.routes.js";

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(indexRoutes);

export default app;