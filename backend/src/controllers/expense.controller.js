import { getAllExpenses , createExpense,} from "../repositories/expense.repository.js";

export async function listExpenses(_request, response, next) {
  try {
    const expenses = await getAllExpenses();

    response.status(200).json(expenses);
  } catch (error) {
    next(error);
  }
}

export async function addExpense(request, response, next) {
  try {
    const { description, amount, category } = request.body ?? {};

    if (
      typeof description !== "string" ||
      !description.trim() ||
      description.trim().length > 120
    ) {
      return response.status(400).json({
        message: "La descripción debe tener entre 1 y 120 caracteres.",
      });
    }

    if (
      typeof amount !== "number" ||
      !Number.isFinite(amount) ||
      amount <= 0 ||
      amount > 9999999999.99
    ) {
      return response.status(400).json({
        message: "El monto debe ser un número positivo y válido.",
      });
    }

    const categories = [
      "Alimentos",
      "Transporte",
      "Servicios",
      "Salud",
      "Entretenimiento",
      "Otros",
    ];

    if (!categories.includes(category)) {
      return response.status(400).json({
        message: "Seleccioná una categoría válida.",
      });
    }

    const expense = await createExpense({
      description: description.trim(),
      amount,
      category,
    });

    return response.status(201).json(expense);
  } catch (error) {
    next(error);
  }
}