import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    console.log(props.name);
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.name,
    });
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div>
        <span className="badge bg-primary mr-3">${props.cost}</span>
        <TiDelete size="1.5rem" onClick={handleDeleteExpense} />
      </div>
    </li>
  );
};

export default ExpenseItem;
