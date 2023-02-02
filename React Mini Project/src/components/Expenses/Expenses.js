import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "../../assets/css/Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState();

  const filteChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
    console.log(filterYear);
  };

    const filteredExpenses = props.item.filter((exp) => {
      return exp.date.getFullYear().toString() === filterYear
    });
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          filteChangeHandler={filteChangeHandler}
        />

        {filteredExpenses.length === 0 ? (<p style={{color:"white", textAlign:"center"}}>Bu tarixe uygun hec ne tapilmadi</p>) : 

        filteredExpenses.map((ex) => (
          <ExpenseItem
            key={ex.id}
            title={ex.title}
            price={ex.price}
            date={ex.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
