 import "./ExpenseItem.css";
 import ExpenseDate from "./ExpenseDate";
 import Card from "../WrapperDiv/Card"
function ExpenseItem(props){
    function buttonOnClickHandeler(event){
        console.log("Button clicked");
    }

    return(
      <Card className="expense-item"> 
      <ExpenseDate calenderDate={props.date}/>
        <div className="expense-item__location">{props.location}</div>
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price>">${props.price}</div>
        </div>
        <button onClick={buttonOnClickHandeler}>Change Title</button>
        </Card>
    )
}
export default ExpenseItem;