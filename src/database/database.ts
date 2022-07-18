import { Sequelize } from "sequelize";

const db = {
  database: process.env.DATABASE,
  user: process.env.USER_DB,
  password: process.env.PASSWORD_DB,
  connection: process.env.CONNECTION_DB,
}

export const sequelize = new Sequelize(db.database, db.user, db.password, {
  host: db.connection,
  dialect: "mysql",
});