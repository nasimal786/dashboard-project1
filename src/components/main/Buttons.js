import React from "react";

const Buttons = ({ onSubmit }) => {
  return (
    <div className="buttons">
      <button className="btn_cancel">Cancel</button>
      <button className="btn_submit" onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Buttons;
