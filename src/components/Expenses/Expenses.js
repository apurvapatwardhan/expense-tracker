import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";
function Expenses({ expenses }) {
  const [year, setYear] = useState("2020");

  const setYearHandler = (yearIncoming) => {
    setYear(yearIncoming);
  };

  const filteredExpenses = expenses.filter(
    (e) => e.date.getFullYear().toString() === year
  );

  return (
    <div>
      {/* <ExpenseFilter /> */}
      <Card className="expenses">
        <ExpensesChart filteredExpenses = {filteredExpenses} />
        <ExpenseFilter onYearSet={setYearHandler} selected={year} />
        <ExpenseList items = {filteredExpenses} filteredYear = {year}/>
      </Card>
    </div>
  );
}

export default Expenses;
