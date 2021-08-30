import React,{useState} from 'react'
import "./ExpenseForm.css";

export default ExpenseForm;
function ExpenseForm(props) {

    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    const titleChangeHandler = (e) => {
        console.log(e.target.value);
        setEnteredTitle(e.target.value);


    }
    const amountChangeHandler = (e) => {
        console.log(e.target.value);
        setEnteredAmount(e.target.value)


    }

    const dateChangeHandler = (e) => {
        console.log(e.target.value);
        setEnteredDate(e.target.value);


    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('H')
        const expenseData = {
            title:enteredTitle,
            amount:String(enteredAmount),
            date:new Date(enteredDate)
        }
        console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        setEnteredDate("");
        setEnteredTitle("");
        setEnteredAmount("");
        props.uiChangeHandler(true);
    }

    const cancelButtonHandler = (e) => props.uiChangeHandler(true);
 
    return (
        <form className ="new-expense__controls" onSubmit = {submitHandler}> 
            <div className= "new-expense__control">
                <label>Title</label>
                <input type="text"value ={enteredTitle} onChange ={titleChangeHandler}/>
            </div>
            <div className= "new-expense__control">
                <label>Amount</label>
                <input type="number" min = "0.01" step ="0.01"value ={enteredAmount} onChange ={amountChangeHandler}/>
            </div>
            <div className= "new-expense__control">
                <label>Date</label>
                <input type="date"value ={enteredDate} min="2019-01-01"  max ="2022-12-31" onChange ={dateChangeHandler}/>
            </div>
            <div className ="new-expense__actions">
                <button onClick = {cancelButtonHandler} >Cancel</button>
                <button type="submit" >Add Expense</button>
            </div>
        </form>
    )
}
