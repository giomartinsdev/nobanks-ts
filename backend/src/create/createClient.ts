import { pool } from "../utils/setDb";
import { execQuery } from "../utils/execQuery";

interface Client {
  name: string;
  document: string;
  password: string;
  cellphone: string;
  email: string;
}

export const createClient = async (client: Client) => {
  try {
    await execQuery({
      query:
        "INSERT INTO clients (name, document, password, cellphone, email) values ($1, $2, $3, $4, $5)",
      values: [client.name, client.document, client.password, client.cellphone, client.email],
    });
    
    console.log("Cliente criado com sucesso!");
  } catch (err) {
    console.error("Erro ao criar cliente", err);
    throw err;
  }
};
