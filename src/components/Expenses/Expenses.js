import React,{useState} from "react";
import ExpensesItem from "./ExpensesItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";

const Expenses = (props) => {
  const[filteredYear,setFilteredYear]=useState("2023");
  const onChangeFilterHandler=(year)=>{
    setFilteredYear(year);
  }

  const filteredExpenses=props.expenses.filter((expense)=>{
    return expense.date.getFullYear().toString() === filteredYear;
  });
  
  return (
    <Card className="expenses">
      <ExpensesFilter selectedYear={filteredYear} onChangeFilter={onChangeFilterHandler}/>
      {filteredExpenses.length === 0 && (<h2>No Expenses Found</h2>)}
      {filteredExpenses.length >0 && filteredExpenses.map((expense) => {
        return (
          <ExpensesItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            price={expense.price}
          />
        );
      })}
    {filteredExpenses.length === 1 && <h2>Only one expense here. Please add more</h2>}
    </Card>
  );
};

export default Expenses;
