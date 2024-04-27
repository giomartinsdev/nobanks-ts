import { execQuery } from "./execQuery";

interface Update {
  id: number;
  table: string;
  column: string;
  data: string | number;
}

export const updateAccountOrClient = async (updateData: Update) => {
  try {
    await execQuery({
      query: `UPDATE ${updateData.table} SET "${updateData.column}" = $1 WHERE id = $2`,
      values: [updateData.data, updateData.id],
    });

    return `Updated ${updateData.table} with ID ${updateData.id} to have ${updateData.column} of ${updateData.data}`;
  } catch (error) {
    console.error("Error updating account:", error);
    throw error;
  }
};
