import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense=(props)=>{
    const formSubmitHandler=(enterExpenseData)=>{
        const newExpenseData={...enterExpenseData,id:Math.random().toString()};
        console.log(newExpenseData);
        props.onAddExpense(newExpenseData);
    }
return(
<div className="new-expense">
    <ExpenseForm onSubmitNewExpense={formSubmitHandler}/>
</div>
)
}
export default NewExpense;