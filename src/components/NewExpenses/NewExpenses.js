import React from "react";
import Card from "../UI/Card";
import InputForm from "./InputForm";
import "./NewExpenses.css";

const NewExpenses = (props) => {
  const expenseDateHandler = (enteredExpensesData) => {
    const expensesData = {
      ...enteredExpensesData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expensesData);
  };
  return (
    <Card className="new-expenses">
      <InputForm onSavedData={expenseDateHandler} />
    </Card>
  );
};

export default NewExpenses;
