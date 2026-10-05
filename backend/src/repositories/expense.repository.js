import pool from "../config/database.js";

export async function getAllExpenses() {
  const result = await pool.query(`
    SELECT id, description, amount, category, created_at
    FROM expenses
    ORDER BY created_at DESC, id DESC
  `);

  return result.rows;
}