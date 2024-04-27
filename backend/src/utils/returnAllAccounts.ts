import { execQuery } from "./execQuery";

interface Account {
  id: number;
}

export const getAccountsByClientId = async (account: Account) => {
  try {
    const result = await execQuery({
      query: "SELECT * FROM accounts WHERE client_id = $1",
      values: [account.id],
    });
    return result;
  } catch (error) {
    console.error("Error retrieving accounts by ID:", error);
    throw error;
  }
};
