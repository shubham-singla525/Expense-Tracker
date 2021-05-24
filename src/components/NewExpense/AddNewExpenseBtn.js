import React from "react"
import ExpenseForm from "./ExpenseForm";
import "./ExpenseForm.css"
import "./NewExpense.css"


const AddNewExpenseBtn=() => {

    const fireFunction=(event)=>{
        console.log(<ExpenseForm/>);
    }

return(
    <div className="new-expense__actions">
        <button onClick={fireFunction}>Add New Expense</button>
    </div>
);
};

export default AddNewExpenseBtn;