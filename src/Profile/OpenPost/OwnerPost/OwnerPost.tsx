import React from "react";
import ownerPost from "./ownerPost.png";
import "./Owner.css";

function OwnerPost() {
  return (
    <div>
       <h4 className="ownerPost"><img src={ownerPost} /> Nettie Fernandez </h4>
       <hr></hr>
    </div>
  );
}

export default OwnerPost;
