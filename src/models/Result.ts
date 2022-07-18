import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database';

export const Result = sequelize.define("results", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  input_data: {
    type: DataTypes.JSON,
  },
  result: {
    type: DataTypes.STRING,
  }
}, {
  timestamps: false,
});