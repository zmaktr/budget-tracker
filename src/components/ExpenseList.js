import React from 'react'
import ExpenseItem from './ExpenseItem'

const ExpenseList = () => {
    const expenses = [
        {id:45, name:'Shopping', cost:50},
        {id:48, name:'Holiday', cost:240},
        {id:33, name:'Transport', cost:545},
        {id:63, name:'Fuel', cost:450},
        {id:12, name:'Child Care', cost:500},
    ];
  return (
    <div>
        <ul className='list-group'>
            { expenses.map( (expense) => (
            <ExpenseItem key={expense.id} name={expense.name} cost={expense.cost}/>
            ))}
        </ul>
    </div>
  )
}
export default ExpenseList