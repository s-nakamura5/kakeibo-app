import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const { addIncome, addExpense } = useContext(GlobalContext);

  const [income, setIncome] = useState({
    incomeText: "",
    incomeAmount: 0,
  });

  const { incomeText, incomeAmount } = income;

  const onChangeIncome = (e) => {
    setIncome({ ...income, [e.target.name]: e.target.value });
    console.log(income);
  };

  const onSubmitIncome = (e) => {
    e.preventDefault();

    if (incomeText !== "") {
      const newIncomeTransaction = {
        id: uuidv4(),
        incomeText,
        incomeAmount: incomeAmount * 1,
      };

      addIncome(newIncomeTransaction);

      setIncome({
        incomeText: "",
        incomeAmount: 0,
      });
    }
  };

  const [expense, setExpense] = useState({
    expenseText: "",
    expenseAmount: 0,
  });

  const { expenseText, expenseAmount } = expense;

  const onChangeExpense = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
    console.log(expense);
  };

  const onSubmitExpense = (e) => {
    e.preventDefault();

    if (expenseText !== "") {
      const newExpenseTransaction = {
        id: uuidv4(),
        expenseText,
        expenseAmount: expenseAmount * 1,
      };
      addExpense(newExpenseTransaction);

      setExpense({
        expenseText: "",
        expenseAmount: 0,
      });
    }
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={onSubmitIncome}>
        <div className="input-group income">
          <input
            type="text"
            placeholder="収入内容をご入力ください"
            name="incomeText"
            value={incomeText}
            autoComplete="off"
            onChange={onChangeIncome}
          />
          <input
            type="number"
            placeholder="金額をご入力ください"
            name="incomeAmount"
            value={incomeAmount}
            autoComplete="off"
            onChange={onChangeIncome}
          />
          <input type="submit" value="submit" />
        </div>
      </form>
      <form onSubmit={onSubmitExpense}>
        <div className="input-group expense">
          <input
            type="text"
            placeholder="支出内容をご入力ください"
            name="expenseText"
            value={expenseText}
            autoComplete="off"
            onChange={onChangeExpense}
          />
          <input
            type="number"
            placeholder="金額をご入力ください"
            name="expenseAmount"
            value={expenseAmount}
            autoComplete="off"
            onChange={onChangeExpense}
          />
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
};
