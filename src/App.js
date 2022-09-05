import React, { useState, useEffect } from "react";
import "./App.css";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/New Expenses/NewExpense";


let DUMMY_EXPENSE = [];

const App = () => {
  
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  useEffect( () => {
    fetch("http://localhost/data.php").then(
    response => {
      return response.json();
    }
  ).then(
    data => {
      // console.log(data);
      setExpenses(data);
    }
  );
},[]);

  const addExpenseHandler = (expense) => {
    setExpenses([expense, ...expenses]);
  };

  return (
    <div>
      <h2 className="title">Expense Calculator</h2>
      <NewExpense onAddExpense = { addExpenseHandler } />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;