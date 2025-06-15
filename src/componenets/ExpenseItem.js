import "./ExpenseItem.css";
function ExpenseItem(){
    return(
        <div className="expense-item">
        <div>15 Augusgitt 2020</div>
        <div className="expense-item__description">
            <h2>Book</h2>
            <div className="expense-item__price>">$10</div>
        </div>
        </div>
    )
}
export default ExpenseItem;