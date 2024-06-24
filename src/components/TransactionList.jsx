// TransactionList.js

import React from 'react';
import './TransactionList.css'; // Import CSS file for styling

function TransactionList({ transactions }) {
  return (
    <div className="transaction-list">
      <h3>Transaction History</h3>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index} className={transaction.type}>
            <span>{transaction.description}</span>
            <span className="amount">{transaction.type === 'income' ? `+$${transaction.amount}` : `-$${transaction.amount}`}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
