import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css"

function ExpenseList({ items, filteredYear }) {

  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">No record found!!</h2>;
  }

  return (
    <ul className="expenses-list">
      {items.map((ele) => {
        return (
          <ExpenseItem
            title={ele.title}
            amount={ele.amount}
            date={ele.date}
            key={ele.id}
          />
        );
      })}
    </ul>
  );
}

export default ExpenseList;
