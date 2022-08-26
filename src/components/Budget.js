import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import EditBudget from "./EditBudget";
import ViewBudget from "./ViewBudget";

const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);
  const [budgetWindow, setBudgetWindow] = useState(true);

  const inputBudget = () => {
    setBudgetWindow(false);
  };

  const saveNewBudget = (addBudget) => {
    dispatch({
      type: "CHANGE_BUDGET",
      payload: addBudget,
    });
    setBudgetWindow(true);
  };

  return (
    <div>
      {budgetWindow ? (
        <ViewBudget inputBudget={inputBudget} budget={budget} />
      ) : (
        <EditBudget saveNewBudget={saveNewBudget} budget={budget} />
      )}
    </div>
  );
};

export default Budget;
