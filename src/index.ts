import dotenv from 'dotenv';
dotenv.config();

import { sequelize } from './database/database';
import { app } from "./app";

async function main() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully");

    app.listen(3000, function () {
      console.log("Server On Port:", 3000);
    });
  } catch (error) {
    console.log("Unable to connect the database:", error);
  }
}

main();