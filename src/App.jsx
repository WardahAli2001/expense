// App.js

import React, { useState } from 'react';
import './App.css';
import IncomeExpenseForm from './components/IncomeExpenseForm';
import Balance from './components/Balance';
import TransactionList from './components/TransactionList'; // New component

function App() {
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(0);

  // Function to add new transaction
  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
    // Update balance based on new transaction
    if (newTransaction.type === 'income') {
      setBalance(balance + parseFloat(newTransaction.amount));
    } else if (newTransaction.type === 'expense') {
      setBalance(balance - parseFloat(newTransaction.amount));
    }
  };

  return (
    <div className="App">
      <h1>Personal Account Manager</h1>
      <Balance balance={balance} />
      <IncomeExpenseForm addTransaction={addTransaction} />
     
      <TransactionList transactions={transactions} />
    </div>
  );
}

export default App;
