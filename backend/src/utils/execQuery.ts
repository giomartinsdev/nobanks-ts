import { pool } from "./setDb";

interface Query {
  query: string;
  values: Array<string | number>;
}

export const execQuery = async (queryData: Query) => {
  try {
    const result =
      queryData.values.length > 0
        ? await pool.query(queryData.query, queryData.values)
        : await pool.query(queryData.query);
    return result.rows;
  } catch (error) {
    console.error("Error executando query:", error);
    throw error;
  }
};