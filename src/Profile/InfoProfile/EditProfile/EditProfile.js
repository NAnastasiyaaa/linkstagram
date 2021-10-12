import React from "react";
import "./EditProfile.css";
// import chooseEditPhoto from "../EditProfile/editProfilePhoto.png";
import Description from "../AddNewPost/ButtonEdit/Description/Description";
import ButtonEdit from "../AddNewPost/ButtonEdit/ButtonPostAndClose/ButtonEdit";
import FirstSecondName from "./FirstSecondName/FirstSecondName";
import ImageWithButton from "./ImageWithButton/ImageWithButton";
import ButtonCancelAndSave from "./ButtonCancelAndSave/ButtonCancelAndSave";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ close }) => (
  <div className="modal">
    <a className="closeEdit" onClick={close}>
      &times;
    </a>
    <div className="contentBox">
      <div className="ProfileLogOut">
      <h2 id="HeaderProfileEdit"> Profile information</h2>
      <p className="logOutColor">Log out</p>
      </div>
     

      <div className="imageWithInput">
        <ImageWithButton />
        <FirstSecondName />
      </div>

      <div className="jobInput">
        <label>Job Title</label>
        <input className="inputJob"></input>
      </div>

      <Description />
      <ButtonCancelAndSave/>
    </div>
  </div>
);
