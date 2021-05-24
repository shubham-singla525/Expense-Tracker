import {useState} from "react";
import ExpenseList from "./ExpenseList";
import Card from "../UI/Card"
import "./ExpenseRender.css"
import ExpensesFilter from "../Filter/ExpenseFilter";
import ExpenseChart from "./ExpenseChart";




const Expenses=(props)=>
{
const [selectedYear, setSelectedYear]= useState('2019');

 const filterChangeHandler=filterData=>{
   setSelectedYear(filterData);
 }

 const filteredComponent=props.expenses.filter(items =>{
    return items.date.getFullYear().toString()===selectedYear;
 });

 
    return(
      <div>

  <Card className="expenses">
     <ExpensesFilter 
     selected={selectedYear} 
     onFilterUpdation={filterChangeHandler} 
     />
     <ExpenseChart expenses={filteredComponent} />
     <ExpenseList item={filteredComponent} />
      {/* {filteredComponent.length === 0 && <p>No expense found.</p>}
      {filteredComponent.length > 0 && 
       filteredComponent.map(expense => <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount} 
        date={expense.date}
         />
          ) } */}
      
       {/* {filteredComponent.length === 0 ? (
         <p>No expenses found.</p>
       ):(
        filteredComponent.map(expense => <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount} 
          date={expense.date}
           />
            )
       )} */}

       
 
       
      </Card>
       
      </div>
      
    );
}

export default Expenses;