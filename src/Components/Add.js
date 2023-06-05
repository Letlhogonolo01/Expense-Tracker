import { useState } from "react";
function AddTransaction(props) {
  const [tranactionItem, setTransactionItem] = useState("");
  const [amount, setAmount] = useState("");
  const [transactionType, setTransactionType] = useState("");

  const Add = () => props.Add(tranactionItem, amount, transactionType);

  return (
    <div>
      <h1>Add a new transaction</h1>

      <input
        type="text"
        placeholder="Enter item"
        onChange={(event) => setTransactionItem(event.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Enter amount"
        onChange={(event) => setAmount(event.target.value)}
      />
      <br />
      <br />
      <select onChange={(event) => setTransactionType(event.target.value)}>
        <br />
        <option>Income</option>
        <option>Expense</option>
      </select>
      <br />
      <button onClick={Add}>Add a transaction</button>
    </div>
  );
}

export default AddTransaction;
