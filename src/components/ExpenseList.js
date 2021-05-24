import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import ExpenseTransactions from "./ExpenseTransaction";

export const ExpenseList = () => {
  const { expenseTransactions } = useContext(GlobalContext);

  console.log(expenseTransactions);
  return (
    <div className="transactions transactions-expense">
      <h2>支出一覧</h2>
      <ul className="transaction-list">
        {expenseTransactions.map((expenseTransaction) => (
          <ExpenseTransactions
            key={expenseTransaction.id}
            expenseTransaction={expenseTransaction}
          />
        ))}
      </ul>
    </div>
  );
};
