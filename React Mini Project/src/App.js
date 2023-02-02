import React, { useState } from "react";
import NewExpense from "./components/Expenses/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "Car",
    date: new Date(2021, 1, 28),
    price: 220,
  },

  {
    id: 2,
    title: "Shoes",
    date: new Date(2020, 1, 29),
    price: 950,
  },

  {
    id: 3,
    title: "Phone",
    date: new Date(2022, 4, 21),
    price: 400,
  },

  {
    id: 4,
    title: "Cap",
    date: new Date(2022, 5, 12),
    price: 690,
  },
];

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpArrays = (expense) => {
    setExpenses( (prev) => {
      return [expense, ...prev];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpArrays} />
      <Expenses item={expenses}></Expenses>
    </div>
  );
}

export default App;
