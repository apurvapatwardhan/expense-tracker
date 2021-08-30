import React,{useState} from 'react'
import ExpenseForm from './ExpenseForm'
import "./NewExpense.css"

function NewExpense(props) {

    const [showButton,setShowButton] = useState(true);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        let expenseData = {...enteredExpenseData,id: Math.random().toString()}
        console.log(expenseData);
        props.onAddExpense(expenseData);
    }

    const uiHandler = (value) => setShowButton(value);

    let newExpenseContentDefault = <button onClick = {() => uiHandler(false)}>Add New Expense</button>
    let addExpenseContent = <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} uiChangeHandler = {uiHandler}/>
    return (
        <div className="new-expense">
           {
               showButton ? newExpenseContentDefault : addExpenseContent
           }
        </div>
    )
}

export default NewExpense
