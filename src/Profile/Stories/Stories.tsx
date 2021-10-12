import React from "react";
import storiesImg from "../imagesProfile/Stories.svg";
import postImg from "../imagesProfile/New Posts.svg";
import "./Stories.css";

function Stories() {
  return (
    <div className="imagesStories">
      <img className="stories" src={storiesImg} />
      <img className="postsAvailable" src={postImg} />
    </div>
  );
}
export default Stories;
