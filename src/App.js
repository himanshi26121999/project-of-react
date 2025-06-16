import ExpenseItem from "./componenets/ExpenseItem";
function App() {
  return (
    <div>
      <h1>Let's get started</h1>
      <p>I am learning React</p>
      <ExpenseItem 
      date={new Date(2023,1,1)}
      title="Book"
      price="10"
      location="delhi">
      </ExpenseItem>
      <ExpenseItem 
      date={new Date(2023,1,14)}
      title="Travelling"
      price="112"
      location="MP">
      </ExpenseItem>
      <ExpenseItem 
      date={new Date(2023,1,12)}
      title="Paneer"
      price="100"
      location="Locknow">
      </ExpenseItem>
      <ExpenseItem 
      date={new Date(2023,12,1)}
      title="Swimming"
      price="100"
      location="Goa">
      </ExpenseItem>
    </div>
  );
}

export default App;
