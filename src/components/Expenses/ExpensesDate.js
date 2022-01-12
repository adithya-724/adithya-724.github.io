import React from "react";

import "./ExpensesDate.css";

const ExpensesDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <ul className="date">
      <li className="date-month">{month}</li>
      <li className="date-day">{day}</li>
      <li className="date-year">{year}</li>
    </ul>
  );
};

export default ExpensesDate;
