import { pool } from "./setDb";

interface Account {
  id: number;
}
export const getAccountsById = async (account: Account) => { 
  try {
    const query = "SELECT * FROM account WHERE client_id = $1";
    const values = [account.id];
    const result = await pool.query(query, values);
    
    return result.rows;
  } catch (error) {
    console.error("Error retrieving accounts by ID:", error);
    throw error;
  }
}
