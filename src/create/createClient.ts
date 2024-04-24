import { pool } from "../utils/setDb";

interface Client {
  name: string;
  document: string;
  password: string;
  cellphone: string;
  email: string;
}

const createClient = (client: Client) => {
  const insert = `insert into clients (name, document, password, cellphone, email) values ($1, $2, $3, $4, $5)`;
  pool.query(
    insert,
    [
      client.name,
      client.document,
      client.password,
      client.cellphone,
      client.email,
    ],
    (err: any) => {
      if (err) {
        console.error("Erro ao criar cliente", err);
      } else {
        console.log("Cliente criado com sucesso!");
      }
    }
  );
};

export { createClient };
