import { useState } from "react";

function ExpenseForm({ onAddExpense }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const cleanDescription = description.trim();

    if (!cleanDescription) {
      console.log("La descripción no puede estar vacía");
      setDescription("");
      return;
    }

    const numericAmount = Number(amount);

    if (!Number.isFinite(numericAmount) || numericAmount <= 0) {
      console.log("El monto debe ser un número positivo");
      setAmount("");
      return;
    }

    if(!category) {
      console.log("La categoría no puede estar vacía");
      return;
    }
    
    const expense = {
      description: cleanDescription,
      amount: numericAmount,
      category: category,
    };

    onAddExpense(expense)


    setDescription("");
    setAmount("");
    setCategory("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="description">Descripción</label>
      <input
        type="text"
        id="description"
        name="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        required
      />
      <label htmlFor="amount">Monto</label>
      <input
        type="number"
        id="amount"
        name="amount"
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
        min="0.01"
        step="0.01"
        required
      />
      <label htmlFor="category">Categoría</label>
      <select
        id="category"
        name="category"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
        required
      >
        <option value="">Seleccioná una categoría</option>
        <option value="Alimentos">Alimentos</option>
        <option value="Transporte">Transporte</option>
        <option value="Servicios">Servicios</option>
        <option value="Salud">Salud</option>
        <option value="Entretenimiento">Entretenimiento</option>
        <option value="Otros">Otros</option>
      </select>
      <button type="submit">Agregar gasto</button>
    </form>
  );
}
export default ExpenseForm;
