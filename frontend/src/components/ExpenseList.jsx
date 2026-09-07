function ExpenseList({ expenses, onDeleteExpense, onDeleteAllExpenses }) {
  if (expenses.length === 0) {
    return <p>No hay gastos registrados.</p>;
  }
  return (
    <section className="expense-list">
      <h2>Registro de gastos</h2>

      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            <strong>{expense.description}</strong>
            <span>${expense.amount}</span>
            <span>{expense.category}</span>
            <button
              type="button"
              onClick={() => onDeleteExpense(expense.id)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>

      <button
        className="delete-all-button"
        type="button"
        onClick={onDeleteAllExpenses}
      >
        Vaciar registro
      </button>
    </section>
  );
}
export default ExpenseList;
