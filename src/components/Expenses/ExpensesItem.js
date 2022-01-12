import React from "react";

import "./ExpensesItem.css";
import ExpensesDate from "./ExpensesDate";
import Card from "../UI/Card";

const ExpensesItem = (props) => {
  return (
    <li>
      <Card className="container flex">
        <ExpensesDate date={props.date} />
        <div className="items">
          <h2>{props.title}</h2>
          <div className="price">${props.price}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpensesItem;
