import { pool } from "./setDb";

interface Update {
  id: number;
  table: string;
  column: string;
  data: string | number;
}

export const updateAccount = async (updateData: Update) => {
  try {
    const query = `UPDATE ${updateData.table} SET "${updateData.column}" = $1 WHERE id = $2`;
    const values = [updateData.data, updateData.id];
    const result = await pool.query(query, values);
    return result.rows;
  } catch (error) {
    console.error("Error atualizando account:", error);
   throw error;
  }
};