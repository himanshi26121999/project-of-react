import React from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesItem from "./ExpensesItem";

const Expenses=(props)=>{
    return(
        <Card className="expenses">
            {props.expenses.map((expense)=>{
       return(
        <ExpensesItem key={expense.id} date={expense.date} title={expense.title} amount={expense.amount} />
       )
    })}
        </Card>
    )

}

export default Expenses;