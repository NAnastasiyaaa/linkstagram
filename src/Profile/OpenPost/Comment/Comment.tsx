import React from "react";
import "./Comment.css";
import CommentProps from "./CommentProps";




function Comment({ text, photoAva, time}: CommentProps) {
  return (
    <div className="personComment">
         <img className="photoAva" src={photoAva} />
         <div className="textTime">
         <p className="textTime">{text}</p>
         <p className="textTime textTimeColor" >{time}</p>
         </div>
    </div>
  );
}

export default Comment;