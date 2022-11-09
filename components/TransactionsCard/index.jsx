import React, { useState } from "react";
import DatePicker from "../DatePicker";
import TransactionRow from "../TransactionRow";
import "./TransactionsCard.css";

function TransactionsCard({ title }) {
  const allTransactions = [
    { name: "Netlify", amount: 5000, date: "2022-01-05" },
    { name: "AWS", amount: 20000, date: "2022-02-14" },
    { name: "Google", amount: 3000, date: "2022-03-19" },
  ];
  const [transactions, setTransactions] = useState(allTransactions);

  function datePickerChange(date) {
    if (date) {
      const relevantTransactions = allTransactions.filter(
        (t) => new Date(t["date"]) < date
      );
      setTransactions(relevantTransactions);
    } else {
      setTransactions(allTransactions);
    }
  }

  return (
    <div className="transactions-card">
      <div className="flex-row">
        <div className="title-2 valign-text-middle poppins-normal-heavy-metal-20px">
          {title}
        </div>
        <DatePicker onChange={datePickerChange} />
      </div>
      <img className="divider" src="/img/divider@2x.svg" />
      <div className="list">
        {transactions.map((transaction) => (
          <TransactionRow
            key={transaction.name}
            title={transaction.name}
            date={transaction.date}
            value={transaction.amount}
          />
        ))}
      </div>
    </div>
  );
}

export default TransactionsCard;
