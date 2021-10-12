import React from "react";
import userHome from "../UserBio/images/userHome.png";
import "./Bio.css";

function Bio() {
  return (
    <div>
      <div className="containerText">
      <img className="user" src={userHome} />
        <h3>Alexandr Sokolov</h3>
        <h5 className="photographer">Photographer</h5>
        <h6 className="paragraphColor">
          Like to travel and shoot cinematic and b/w photos<br></br> Tools - Capture One for Raw</h6>
          </div>
         <div className="containerFollower">
          <div><h3>1,1K</h3><p className="textFollow">Followers</p> </div>
          <div><h3>448</h3><p className="textFollow">Following</p> </div>
          </div>


        <div className="containerButton">
         <button className="EditBtn">Edit profile</button>
         <button className="NewBtn">New post</button>
         </div>
    </div>
  );
}

export default Bio;
