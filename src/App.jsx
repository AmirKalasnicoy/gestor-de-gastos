import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import "./App.css";
import { useState } from "react";


function App() {
  const [expenses, setExpenses] = useState([]);

  function handleAddExpense(expense) {
    const newExpense = {
      ...expense,
      id: crypto.randomUUID(),
    };
    setExpenses((currentExpenses) => [...currentExpenses, newExpense]);
  }
  const totalExpenses = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  function handleDeleteExpense(expenseId) {
    setExpenses((currentExpenses) =>
      currentExpenses.filter((expense) => expense.id !== expenseId)
    );
  }
  function handleDeleteAllExpenses() {
    setExpenses([]);
  }

  return (
    <main className="app">
      <header>
        <h1>Gestor de gastos</h1>
        <p>Registrá y organizá tus gastos personales.</p>
      </header>
      <ExpenseForm onAddExpense={handleAddExpense} />
      <p>Gastos registrados: {expenses.length}</p>
      <p>Total gastado: ${totalExpenses}</p>
      <ExpenseList 
        expenses={expenses} 
        onDeleteExpense={handleDeleteExpense} 
        onDeleteAllExpenses={handleDeleteAllExpenses} 
      />
    </main>
  );
}

export default App;
