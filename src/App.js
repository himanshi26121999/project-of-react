import React,{useState} from "react";  
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const[expenses,setExpenses]=useState([
    {id:1,date:new Date(2023,11,12),title:"Insurance",amount:100},
    {id:2,date:new Date(2024,11,13),title:"Book",amount:10},
    {id:3,date:new Date(2023,9,9),title:"Pen",amount:1},
    {id:4,date:new Date(2025,11,14),title:"Laptop",amount:200},
   ]);

   const saveUserInputHandaler=(expenseData)=>{
     console.log(expenseData);
     setExpenses((preExpenses)=>{
       return[
        expenseData,...preExpenses
       ]
     })
   }
return(
  <>
    <p>lets started react project</p>
    <NewExpense onSaveUserInput={saveUserInputHandaler}/>
    <Expenses expenses={expenses}/>
    </>
    )
  }
export default App;

