import React, {useState}from "react";
import "./ExpenseForm.css";

const ExpenseForm=()=>{
    const[enteredTitle,setEnteredTitle]=useState("");
    const[enteredamount,setEnteredAmount]=useState("");
    const[enteredDate,setEnteredDate]=useState("");

    const titleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value);
    };
return(
 <form>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" onChange={titleChangeHandler}/>
      </div>
      <div className="new-expense__control">
        <lebel>Amount</lebel>
        <input type="number" onChange={amountChangeHandler}/>
      </div>
     <div className="new-expense__control">
        <label>Date</label>
        <input type="date" min="2023-01-01"max="2024-12-31" onChange={dateChangeHandler}/>
     </div>
     <div className="new-expense__actions">
        <button type="submit">Submit</button>
     </div>
    </div>
  </form>
)
};
export default ExpenseForm;