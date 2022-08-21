import React from 'react'
import ExpenseItem from './ExpenseItem'

const ExpenseList = () => {
    const expenses = [
        {id:1233, name:'Shopping', cost:50},
        {id:1233, name:'Holiday', cost:240},
        {id:1233, name:'Transport', cost:545},
        {id:1233, name:'Fuel', cost:450},
        {id:1233, name:'Child Care', cost:500},
    ];
  return (
    <div>
        <ul className='list-group'>
            { expenses.map( (expense) => (
            <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost}/>
            ))}
        </ul>
    </div>
  )
}
export default ExpenseList