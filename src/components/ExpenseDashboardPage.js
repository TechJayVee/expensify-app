import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './expenseListFilters';
const ExpenseDashboardPage = () => (
  <div>
  {<br/>}
    <ExpenseListFilters /> 
    <ExpenseList />

  </div>
);

export default ExpenseDashboardPage;
