import React,{useState} from "react";
import Expenses from "./components/Expenses/ExpensesRender"
import NewExpense from "./components/NewExpense/NewExpense";
const Dummy_List = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2',
   title: 'New TV',
    amount: 799.49, 
    date: new Date(2020, 2, 17) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2022, 3, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2019, 5, 12),
  },
];
const App=()=> {
  const[expenses,setExpenses]=useState(Dummy_List);


   const addExpenseHandler=(expenses)=>{
     setExpenses((previousExpenses)=>{
       return [expenses, ...previousExpenses];
     })
   };
  return (
    
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses}/>
     </div>
  );
}

export default App;
