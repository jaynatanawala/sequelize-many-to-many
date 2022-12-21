const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    dialect: "mysql",
    host: process.env.HOST || "localhost",
    pool: {
      max: 5,
      min: 0,
      idle: 10 * 1000,
      acquire: 80 * 1000,
    },
  }
);

module.exports = sequelize;
