import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import IncomeTransactions from "./IncomeTransactions";

export const IncomeList = () => {
  const { incomeTransactions } = useContext(GlobalContext);
  console.log(incomeTransactions);

  return (
    <div className="transactions transactions-income">
      <h2>収入一覧</h2>
      <ul className="transaction-list">
        {incomeTransactions.map((incomeTransaction) => (
          <IncomeTransactions
            key={incomeTransaction.id}
            incomeTransaction={incomeTransaction}
          />
        ))}
      </ul>
    </div>
  );
};
