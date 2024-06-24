// Balance.js

import React from 'react';

function Balance({ balance }) {
  return (
    <div className="balance">
      <h3>Current Balance:</h3>
      <p>${balance.toFixed(2)}</p>
    </div>
  );
}

export default Balance;
