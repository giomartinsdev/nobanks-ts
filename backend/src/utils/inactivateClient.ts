import { execQuery } from "./execQuery";
interface ClientToInactivate {
  id: number;
}

export const inactivateClientbyId = async (ClientToInactivate: ClientToInactivate) => {
  try {
    await execQuery({
      query: `UPDATE accounts SET status = 'inactive' WHERE client_id = $1`,
      values: [ClientToInactivate.id],
    });
    
    return `Updated accounts with ID ${ClientToInactivate.id} to have status of inactive`;
  } catch (error) {
    console.error("Error updating account:", error);
    throw error;
  }
};

