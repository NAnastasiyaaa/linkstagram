import React from "react";
import OwnerPost from "./OwnerPost/OwnerPost";
import "./OpenPost.css";
import Comment from "./Comment/Comment";
import photoAva1 from "./images/person1.png";
import photoAva2 from "./images/person2.png";
import photoAva3 from "./images/person3.png";
import CommentProps from "./Comment/CommentProps";
import post1 from "../imagesProfile/Post1.svg";
import { Link } from "react-router-dom";
import Like from "./Like/Like";
import AddComments from "./AddComment/AddComment";

function OpenPost() {
  const comments = [
    {
      photoAva: photoAva1,
      text: "Cool image  👏great shot👍📷",
      time: "12 min",
    },
    {
      photoAva: photoAva2,
      text: "Pretty cool photos, I left you a message in private messages, waiting for a response)",
      time: "12 min",
    },
    {
      photoAva: photoAva3,
      text: "Nice!",
      time: "12 min",
    },
  ];

  return (
    <div className="containerOpenPost">
      <img className="post1" src={post1} />
      <div className="commentContainer">
        <OwnerPost />
        {comments.map((comment: CommentProps, index) => (
          <Comment
            key={index}
            photoAva={comment.photoAva}
            text={comment.text}
            time={comment.time}
          />
        ))}
        
        <div>
        <Like likes={439}/>
        <hr></hr>
          <AddComments/>
        
        </div>
          
      </div>
    </div>
  );
}

export default OpenPost;
