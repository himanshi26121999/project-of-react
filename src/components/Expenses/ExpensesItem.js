import React,{useState} from "react";
import "./ExpensesItem.css";
import ExpensesDate from "./ExpensesDate";
import Card from "../UI/Card";
 
const ExpensesItem=(props)=>{
  const[title,setTitle]=useState(props.title);
  const buttonClickHandler=(event)=> {
    setTitle("New title");
  }
   return(
    <Card className="expense-item">
      <ExpensesDate calenderDate={props.date}/>
        <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={buttonClickHandler}>Change Title</button>
    </Card>
   )
}
 export default ExpensesItem;