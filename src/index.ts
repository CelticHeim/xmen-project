import dotenv from 'dotenv';
dotenv.config();

import { sequelize } from './database/database';
import { app } from "./app";

import "../src/models/ResultModel";

async function main() {
  try {
    await sequelize.authenticate();
    console.log("\nConnection has been established successfully\n");

    await sequelize.sync({ force: false });

    app.listen(3000, function () {
      console.log("\nServer On Port:", 3000);
    });
  } catch (error) {
    console.log("\nUnable to connect the database:", error);
  }
}

main();