import React,{useState} from "react";
import "./ExpenseForm.css";
 
const ExpenseForm=(props)=>{
    const[enteredTitle,setEnteredTitle]=useState("");
    const[enteredAmount,setEnteredAmount]=useState("");
    const[enteredDate,setEnteredDate]=useState("");
    
    const onChangeTitleHandaler=(event)=>{
        setEnteredTitle(event.target.value);
    }

    const onChangeAmountHandaler=(event)=>{
        setEnteredAmount(event.target.value);
    }

    const onChangeDateHandaler=(event)=>{
        setEnteredDate(event.target.value);
    }

    const formSubmitHandaler=(event)=>{
        event.preventDefault();
        const expenseData={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        };
        props.onSaveEnteredData(expenseData);
        setEnteredTitle("");setEnteredAmount("");setEnteredDate("");
    }

    return(
        <form onSubmit={formSubmitHandaler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label htmlFor="title">Title</label>
                <input type="text" value={enteredTitle} id="title" onChange={onChangeTitleHandaler}/>
            </div>
                <div className="new-expense__control">
                <label htmlFor="amount">Amount</label>
                <input type="number" value={enteredAmount} id="amount" onChange={onChangeAmountHandaler}/>
            </div>
                <div className="new-expense__control">
                <label htmlFor="date">Date</label>
                <input type="date" value={enteredDate} id="date" onChange={onChangeDateHandaler} min="2023-01-01"
            max="2024-12-31"/>
            </div>
           <button type="submit" className="new-expense__actions">Add Expense</button>
        </div>
        </form>
    )
}
export default ExpenseForm;