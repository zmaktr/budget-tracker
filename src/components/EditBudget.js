import React, { useState } from "react";

const EditBudget = (props) => {
  const [addBudget, setAddBudget] = useState(props.budget);
  // console.log(addBudget);
  // console.log(setAddBudget.value);
  return (
    <div className="d-flex justify-content-between align-items-center alert alert-secondary">
      <input
        required="required"
        type="number"
        className="form-control mr-2"
        placeholder={addBudget}
        onChange={(e) => setAddBudget(e.target.value)}
      ></input>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => props.saveNewBudget(addBudget)}
      >
        Save
      </button>
    </div>
  );
};

export default EditBudget;
