import { pool } from "../utils/setDb";

interface Account {
  acc_number: string;
  client_id: number;
  balance: number;
}

const createAccount = (client: Account) => {
  const insert = `insert into account (acc_number, client_id, balance) values ($1, $2, $3)`;
  pool.query(
    insert,
    [client.acc_number, client.client_id, client.balance],
    (err: any) => {
      if (err) {
        console.error("Erro ao criar conta", err);
      } else {
        console.log("Conta criada com sucesso!");
      }
    }
  );
};

export { createAccount };
