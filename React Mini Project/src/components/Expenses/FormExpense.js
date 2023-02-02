import React, { useState } from "react";
import "../../assets/css/FormExpense.css";

const FormExpense = (props) => {
  const [Entertitle, setEntertitle] = useState("");
  const [Enteramount, setEnteramount] = useState("");
  const [Enterdate, setEnterdate] = useState("");

  const titleChangeHandler = (event) => {
    setEntertitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteramount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnterdate(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: Entertitle,
      price: Enteramount,
      date: new Date(Enterdate),
    };
    console.log(expenseData);

    props.onSaveExpanseDate(expenseData);
    setEntertitle("");
    setEnteramount("");
    setEnterdate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">

        <div className="new-expense__control">
          <label>Title</label>
          <input
           type="text"
           value={Entertitle} 
           onChange={titleChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Price</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={Enteramount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={Enterdate}
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Adding Expense</button>
      </div>
    </form>
  );
};

export default FormExpense;
