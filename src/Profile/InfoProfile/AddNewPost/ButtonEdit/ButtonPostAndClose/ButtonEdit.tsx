import React from "react";
import "./ButtonEdit.css";


function ButtonEdit() {
     return (
    <div className="ButtonEditAndCancel">
         <button className="buttonCancelForPage">Cancel</button>
         <button className="buttonPostPage buttonCancelForPage">Post</button>
    </div>
  );
}

export default ButtonEdit;