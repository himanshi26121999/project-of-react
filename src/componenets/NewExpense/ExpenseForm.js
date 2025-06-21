import React, {useState}from "react";
import "./ExpenseForm.css";

const ExpenseForm=()=>{
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
        event.preventDafault();
        const expenseDate={
            title:enteredTitle,
            amount:enteredamount,
            date:new Date(enteredDate)
        };
        console.log(expenseDate);
        setEnteredAmount("");setEnteredDate("");setEnteredTitle("");
    }
return(
 <form onSubmit={formSubmitEvent}>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text"value={enteredTitle}id="title"onChange={titleChangeHandler}/>
      </div>
      <div className="new-expense__control">
        <lebel>Amount</lebel>
        <input type="number" value={enteredamount}id="amount"onChange={amountChangeHandler}/>
      </div>
     <div className="new-expense__control">
        <label>Date</label>
        <input type="date" value={enteredDate}id="date"min="2023-01-01"max="2024-12-31" onChange={dateChangeHandler}/>
     </div>
     <div className="new-expense__actions">
        <button type="submit">Submit</button>
     </div>
    </div>
  </form>
)
};
export default ExpenseForm;