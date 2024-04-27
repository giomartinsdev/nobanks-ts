import { Sequelize } from "sequelize";

const sequelize = new Sequelize("postgres", "postgres", "senha_segura", {
  host: "postgres",
  dialect: "postgres",
  port: 5432,
  logging: false,
});

export { sequelize };
