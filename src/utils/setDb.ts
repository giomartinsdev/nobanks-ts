import { Pool } from "pg";
export const pool = new Pool({
  user: "postgres",
  host: "postgres",
  database: "postgres",
  password: "senha_segura",
  port: 5432,
});
