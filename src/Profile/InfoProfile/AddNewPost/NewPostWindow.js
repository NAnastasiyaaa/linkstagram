import React from "react";
import "./NewPostWindow.css";
import choosePhoto from "../AddNewPost/choosePhoto.png";
import ButtonEdit from "./ButtonEdit/ButtonPostAndClose/ButtonEdit";
import Description from "./ButtonEdit/Description/Description";




// eslint-disable-next-line import/no-anonymous-default-export
export default ({ close }) => (
  <div className="modal">
    <a className="closeEdit" onClick={close}>
      &times;
    </a>
    <div className="contentBox">
      {/* <OpenPost src={openedPost}/> */}
      <img className="choosePhoto" src={choosePhoto} />
      <Description/>
      <ButtonEdit/>
    </div>
  </div>
);