import React from "react";
import likeOpenPost from "./likeOpenPost.svg";
import "./Like.css";

interface OpenPostProps {
  likes: number;
}

function Like({ likes }: OpenPostProps) {
  return (
    <div>
      <h5 className="likeSign">
        <img src={likeOpenPost} />
        {likes}
      </h5>
    </div>
  );
}

export default Like;
