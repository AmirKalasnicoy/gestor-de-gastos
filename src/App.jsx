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
  return (
    <main className="app">
      <header>
        <h1>Gestor de gastos</h1>
        <p>Registrá y organizá tus gastos personales.</p>
      </header>
      <ExpenseForm onAddExpense={handleAddExpense} />
      <p>Gastos registrados: {expenses.length}</p>
      <ExpenseList expenses={expenses} />
    </main>
  );
}

export default App;
