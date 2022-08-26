import React from "react";

const EditBudget = (props) => {
  return (
    <div className="d-flex justify-content-between align-items-center alert alert-secondary">
      <input
        required="required"
        type="number"
        className="form-control mr-2"
        placeholder={props.budget}
      ></input>
      <button
        type="button"
        className="btn btn-primary"
        onClick={props.saveNewBudget}
      >
        Save
      </button>
    </div>
  );
};

export default EditBudget;
