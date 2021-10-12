import React from "react";
import "./AddComment.css";


function AddComment() {
  return (
    <div className="addCommentContainer">
        <input className="inputAdd" placeholder="Add a comment..."></input>
        <button className="buttonPost">Post</button>
    </div>
  );
}

export default AddComment;