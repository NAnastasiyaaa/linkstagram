import React from "react";
import openedPost from "../imagesProfile/openedPost.png";
import OpenPost from "../OpenPost/OpenPost";
import "./index.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ close }) => (
  <div className="modal">
    <a className="closePhoto" onClick={close}>
      &times;
    </a>

    <div className="content">
      <OpenPost src={openedPost}/>
      {/* <img className="openedPost" src={openedPost} /> */}
    </div>
  </div>
);
