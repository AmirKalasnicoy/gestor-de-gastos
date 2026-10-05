import pool from "../config/database.js";

export async function getAllExpenses() {
  const result = await pool.query(`
    SELECT id, description, amount, category, created_at
    FROM expenses
    ORDER BY created_at DESC, id DESC
  `);

  return result.rows;
}

export async function createExpense({ description, amount, category }) {
  const result = await pool.query(
    `
      INSERT INTO expenses (description, amount, category)
      VALUES ($1, $2, $3)
      RETURNING id, description, amount, category, created_at
    `,
    [description, amount, category]
  );

  return result.rows[0];
}