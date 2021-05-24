import React from "react";
import Card from "../UI/Card"
import ExpenseDate from "./ExpenseDate"
import "./ExpenseItem.css"
const ExpenseItem=(props)=>{
        // const[title,setTitle]=useState(props.title);
    

        
    // const eventHandler=()=>{
    //     setTitle(props.title);
        
    // }
   
    return (
        <li>
        <Card className="expense-item">
           <ExpenseDate date={props.date}/>
            <div className="expense-item-description">
                <h2>{props.title}</h2></div>
            <div className="expense-item__price">${props.amount}</div>
            
            {/* <button onClick={eventHandler}>Change Button</button> */}
        </Card>
        </li>
       
    );
}

export default ExpenseItem;


