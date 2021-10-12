import React from "react";
import "./ImageWithButton.css";
import chooseEditPhoto from "../ImageWithButton/editProfilePhoto.png";

function ImageWithButton() {
  return (
    <div>
        <img className="chooseEditPhoto" src={chooseEditPhoto} />
        <button className="btn">Choose new photo</button>
    </div>
  );
}

export default ImageWithButton;