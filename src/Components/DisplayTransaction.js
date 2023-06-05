function DisplayTtransaction(props) {
  return (
    <div>
      <h3>History of your transaction</h3>

      {props.transactions.map((data) => (
        <div>
          <div className="listItem">
            <div>
              <h5>{data.transactionItem}</h5>
            </div>
            <div>
              <h5>{data.amount}</h5>
            </div>
            <div>
              {data.transactionType === "Expense" ? (
                <div className="expenseIndicator"></div>
              ) : (
                <div className="incomeIndicator"></div>
              )}
              <h5>{data.transactionType}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DisplayTtransaction;
