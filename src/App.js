import ExpenseItem from "./componenets/ExpenseItem";
function App() {
  const expenses=[
    {id:"1",date:new Date(2023,7,15),titel:"Insurance",location:"Delhi",price:"100"},
    {id:"2",date:new Date(2023,8,25),titel:"Book",location:"Goa",price:"200"},
  {id:"3",date:new Date(2023,9,5),titel:"Spoon",location:"Hyderabad",price:"10"},
  {id:"4",date:new Date(2023,10,11),titel:"Food",location:"Bangalore",price:"110"},
  {id:"5",date:new Date(2023,11,15),titel:"Mango",location:"Koichi",price:"900"},
  ]
  return (
    <div>
      <h1>Let's get started</h1>
      <p>I am learning React</p>
      {expenses.map((expense,index)=>{
        return(
          <ExpenseItem key={expense.id}
                      date={expense.date}
                      title={expense.titel}
                      location={expense.location}
                      price={expense.price}></ExpenseItem>
        )
      })}
    </div>
  );
}

export default App;
