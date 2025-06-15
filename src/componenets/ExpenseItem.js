import "./ExpenseItem.css";
function ExpenseItem(){
    const expenseDate=new Date(2020,8,15).toISOString();
    const expenseTitle="Book";
    const expensePrice=20;
    const expenseLOcation="Bangalore";
    return(
        <div className="expense-item">
        <div>{expenseDate}</div>
        <div className="expense-item__location">{expenseLOcation}</div>
        <div className="expense-item__description">
            <h2>{expenseTitle}</h2>
            <div className="expense-item__price>">${expensePrice}</div>
        </div>
        </div>
    )
}
export default ExpenseItem;