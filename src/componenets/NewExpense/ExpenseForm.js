import React, {useState}from "react";
import "./ExpenseForm.css";

const ExpenseForm=(props)=>{
    const[enteredTitle,setEnteredTitle]=useState("");
    const[enteredamount,setEnteredAmount]=useState("");
    const[enteredDate,setEnteredDate]=useState("");
    //const [userInput,setUserInput]=useState({enteredTitle:"",enteredAmount:"",enteredDate:""});

    const titleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value);
    };

    const formSubmitEvent=(event)=>{
        event.preventDefault();
        const expenseData={
            title:enteredTitle,
            amount:enteredamount,
            date:new Date(enteredDate)
        };
        console.log(expenseData);
        props.onSubmitNewExpense(expenseData);
        setEnteredAmount("");setEnteredDate("");setEnteredTitle("");
    }
return(
 <form onSubmit={formSubmitEvent}>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label htmlFor="inputTitle">Title</label>
        <input type="text" id="inputTitle"value={enteredTitle}onChange={titleChangeHandler}/>
      </div>
      <div className="new-expense__control">
        <label htmlFor="inputAmount">Amount</label>
        <input type="number" value={enteredamount}id="inputAmount"onChange={amountChangeHandler}/>
      </div>
     <div className="new-expense__control">
        <label htmlFor="inputDate">Date</label>
        <input type="date" value={enteredDate}id="inputDate"min="2023-01-01"max="2024-12-31" onChange={dateChangeHandler}/>
     </div>
     <div className="new-expense__actions">
        <button type="submit">Submit</button>
     </div>
    </div>
  </form>
)
};
export default ExpenseForm;