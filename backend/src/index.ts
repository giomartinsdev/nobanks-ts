import express from "express";
import { router } from "./routes";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
