import ExpenseItem from "./ExpenseItem";
import Card from "../WrapperDiv/Card"
function Expenses(props){
    return(
        <Card className="expenses">
            {props.expenses.map((expense,index)=>{
        return(
          <ExpenseItem key={expense.id}
                      date={expense.date}
                      title={expense.titel}
                      location={expense.location}
                      price={expense.price}></ExpenseItem>
        )
      })}
        </Card>
    )
}
export default Expenses;