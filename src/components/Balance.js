import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
  const { incomeTransactions, expenseTransactions } = useContext(GlobalContext);
  const incomeAmounts = incomeTransactions.map(
    (incomeTransaction) => incomeTransaction.incomeAmount
  );

  const expenseAmounts = expenseTransactions.map(
    (expenseTransaction) => expenseTransaction.expenseAmount
  );
  const totalIncome = incomeAmounts.reduce((acc, item) => (acc += item), 0);
  const totalExpense = expenseAmounts.reduce((acc, item) => (acc += item), 0);
  return (
    <div className="balance">
      <h2>家計バランス</h2>
      <h3>￥{totalIncome - totalExpense}円</h3>
      <div className="income-expense">
        <div className="plus">
          <h3>収入</h3>
          <p>+¥{totalIncome}円</p>
        </div>
        <div className="minus">
          <h3>支出</h3>
          <p>-¥{totalExpense}円</p>
        </div>
      </div>
    </div>
  );
};
