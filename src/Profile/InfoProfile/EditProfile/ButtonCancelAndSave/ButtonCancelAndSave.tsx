import React from "react";
import "./ButtonCancelAndSave.css";


function ButtonCancelAndSave() {
  return (
    <div>
        <button className="cancelAndSave">Cancel</button>
        <button className="saveColor cancelAndSave">Save</button>
    </div>
  );
}

export default ButtonCancelAndSave;
