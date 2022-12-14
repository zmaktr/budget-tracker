import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ExpenseTotal = () => {
  const { budget, expenses } = useContext(AppContext);

  const totalExpense = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  const alertType = totalExpense > budget ? "alert-warning" : "alert-info";
  return (
    <div
      className={`d-flex justify-content-between align-items-center alert ${alertType}`}
      style={{ height: "80px" }}
    >
      <span>Spent so far: ${totalExpense}</span>
    </div>
  );
};

export default ExpenseTotal;
