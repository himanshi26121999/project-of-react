import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
 
const NewExpense=(props)=>{
    const saveDataHandaler=(data)=>{
        const expenseData={...data,id:Math.random().toString()};
        props.onSaveUserInput(expenseData);
    }
    return(
        <div className="new-expense">
            <ExpenseForm onSaveEnteredData={saveDataHandaler}/>
        </div>
    )

}
export default NewExpense;