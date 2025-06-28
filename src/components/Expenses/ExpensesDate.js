import React from "react";
import "./ExpensesDate.css";

const months=["January","February","March","April","May","June","July","August","September","October","November","December"];

const ExpensesDate=(props)=>{
    const year=props.calenderDate.getFullYear();
    const date=props.calenderDate.getDate();
    const month=months[props.calenderDate.getMonth()];
    return(
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__date">{date}</div>
        </div>
    )
}
export default ExpensesDate;