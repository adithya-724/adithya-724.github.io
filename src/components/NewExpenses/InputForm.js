import React, { useState } from "react";
import "./InputForm.css";

const InputForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [state, setState] = useState(true);

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  const priceChangeHandler = (e) => {
    setEnteredPrice(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const formHandler = (e) => {
    e.preventDefault();
    const expensesData = {
      title: enteredTitle,
      amount: +enteredPrice,
      date: new Date(enteredDate),
    };
    props.onSavedData(expensesData);
    setEnteredDate("");
    setEnteredPrice("");
    setEnteredTitle("");
    setState(true);
  };
  const changeStateFalse = () => {
    setState(false);
  };
  const changeStateTrue = () => {
    setState(true);
  };
  if (state) {
    return (
      <button onClick={changeStateFalse} className="add-expense-btn">
        Add New Expense
      </button>
    );
  }
  return (
    <form onSubmit={formHandler}>
      <div className="form-container">
        <div className="form-element">
          <label htmlFor="item-title">Title</label>
          <input
            type="text"
            value={enteredTitle}
            id="item-title"
            onChange={titleChangeHandler}
          />
        </div>
        <div className="form-element">
          <label htmlFor="item-price">Amount</label>
          <input
            type="number"
            id="item-price"
            value={enteredPrice}
            min="1"
            onChange={priceChangeHandler}
          />
        </div>
        <div className="form-element">
          <label htmlFor="date-title">Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-12-01"
            max="2022-12-01"
            onChange={dateChangeHandler}
          />
        </div>
        <div className="form-element button button-element">
          <button type="submit" className="btn">
            Add Expense
          </button>
          <button className="cancel-btn" onClick={changeStateTrue}>
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default InputForm;
