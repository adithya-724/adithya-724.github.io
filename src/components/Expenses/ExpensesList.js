import React from "react";
import "./ExpensesList.css";
import ExpensesItem from "./ExpensesItem";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="no-items">No item found</h2>;
  }
  return (
    <ul className="list">
      {props.items.map((item) => (
        <ExpensesItem
          key={item.id}
          date={item.date}
          price={item.amount}
          title={item.title}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
