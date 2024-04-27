import { execQuery } from "../utils/execQuery";

interface Account {
  acc_number: number;
  client_id: number;
  balance: number;
}

export const createAccount = async (account: Account) => {
  try {
    await execQuery({
      query:
        `insert into accounts (acc_number, client_id, balance) values ($1, $2, $3)`,
      values: [
        account.acc_number,
        account.client_id,
        account.balance,
      ],
    });

    console.error("Conta criada com sucesso");
  } catch (err) {
    console.error("Erro ao criar conta", err);
    throw err;
  }
};
