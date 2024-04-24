import { pool } from "./setDb";

async function getAccountsById(id: number) {
  try {
    const query = "SELECT * FROM account WHERE client_id = $1";
    const values = [id];
    const result = await pool.query(query, values);
    return result.rows;
  } catch (error) {
    console.error("Error retrieving accounts by ID:", error);
    throw error;
  }
}
export { getAccountsById };