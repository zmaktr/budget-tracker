import React from "react";

const ViewBudget = (props) => {
  return (
    <div
      className="d-flex justify-content-between align-items-center alert alert-secondary"
      style={{ height: "80px" }}
    >
      <span>Budget: ${props.budget}</span>
      <button className="btn btn-primary" onClick={props.inputBudget}>
        Edit
      </button>
    </div>
  );
};

export default ViewBudget;
