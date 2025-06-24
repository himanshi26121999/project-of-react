import Expenses from "./componenets/ExpenseDiv/Expenses"
import NewExpense from "./componenets/NewExpense/NewExpense";
function App() {
  const expenses=[
    {id:"1",date:new Date(2023,7,15),titel:"Insurance",location:"Delhi",price:"100"},
    {id:"2",date:new Date(2023,8,25),titel:"Book",location:"Goa",price:"200"},
  {id:"3",date:new Date(2023,9,5),titel:"Spoon",location:"Hyderabad",price:"10"},
  {id:"4",date:new Date(2023,10,11),titel:"Food",location:"Bangalore",price:"110"},
  {id:"5",date:new Date(2023,11,15),titel:"Mango",location:"Koichi",price:"900"},
  ];
  const addExpenseDataHandler=(expense)=>{
  console.log(expense);
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseDataHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
