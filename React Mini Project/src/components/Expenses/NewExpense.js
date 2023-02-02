import React from 'react';
import '../../assets/css/NewEpense.css'
import FormExpense from './FormExpense';

const NewExpense = (props) => {
   
    const saveExpenseDataHandler = (dataexpanse) => {
        const expenseData = {
            ...dataexpanse,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData)
    } 

  return (
    <div className='new-expense'>
      <FormExpense onSaveExpanseDate = {saveExpenseDataHandler}/>
    </div>
  )
}

export default NewExpense;
