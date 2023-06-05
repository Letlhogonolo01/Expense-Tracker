// import logo from './logo.svg';
import "./App.css";
import AddTransaction from "./Components/Add";
import DisplayTtransaction from "./Components/DisplayTransaction";

import { useState } from "react";

function App() {
  const [transactions, setTransactions] = useState([]);

  const Add = (transactionItem, amount, transactionType) => {
    setTransactions((transactions) => [
      ...transactions,
      {
        transactionItem: transactionItem,
        amount: amount,
        transactionType: transactionType,
      },
    ]);

    console.log(transactions);
  };

  return (
    <div className="Container">
      <DisplayTtransaction transactions={transactions} />

      <AddTransaction Add={Add} />
    </div>
  );
}

export default App;
