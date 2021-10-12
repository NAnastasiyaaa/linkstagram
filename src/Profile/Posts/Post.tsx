/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import post1 from "../imagesProfile/Post1.svg";
import post2 from "../imagesProfile/Post2.svg";
import "./Post.css";
import Popup from "reactjs-popup";
import Content from "./content.js";
import like from "../imagesProfile/like.svg";
import post from "../imagesProfile/posts.svg";
import line from "../imagesProfile/line.svg";
import { useState } from "react";

interface PostProps {
  text: string;
  likes: number;
  comments: number;
}

function Post({ text, likes, comments }: PostProps) {
  const [shareClicked, setShareClicked] = useState(false);

  const imageStyle = {
    filter: "blur(12px)",
  };

  return (
    <div className="imagePosts">
      <Popup modal trigger={ <img className="post1"style={shareClicked ? imageStyle : {}}src={post1} />}>
        {(close: any) => <Content close={close} />}
      </Popup>

      <p className="postColor">{text}</p>
      {shareClicked && <h6 className="copyButton">Copied to bufer</h6>}

      <div className="LikeAndComments">
        <h5 className="like">
          <img src={like} />
          {likes}
        </h5>
        <h5 className="post">
          <img src={post} />
          {comments}
        </h5>
        <button
          className="buttonShare"
          onClick={() => setShareClicked(!shareClicked)}
        >
          Share <img className="line" src={line} />
        </button>
      </div>

      <img className="post2" src={post2} />
    </div>
  );
}

export default Post;
