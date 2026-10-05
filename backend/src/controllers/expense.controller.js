import { getAllExpenses } from "../repositories/expense.repository.js";

export async function listExpenses(_request, response, next) {
  try {
    const expenses = await getAllExpenses();

    response.status(200).json(expenses);
  } catch (error) {
    next(error);
  }
}