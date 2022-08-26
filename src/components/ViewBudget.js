import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ViewBudget = (props) => {
  return (
    <div className="d-flex justify-content-between align-items-center alert alert-secondary">
      <span>Budget: ${props.budget}</span>
      <button className="btn btn-primary" onClick={props.inputBudget}>
        Edit
      </button>
    </div>
  );
};

export default ViewBudget;
