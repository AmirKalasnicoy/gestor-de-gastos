function ExpenseList({ expenses }) {
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
          </li>
        ))}
      </ul>
    </section>
  );
}
export default ExpenseList;
