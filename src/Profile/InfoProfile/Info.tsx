import React from "react";
import "./Info.css";
import ava from "../imagesProfile/Ava.svg";
import Popup from "reactjs-popup";
import NewPostWindow from "./AddNewPost/NewPostWindow";
import EditProfile from "./EditProfile/EditProfile";



function Info() {
  return (
    <div>
      <div className="PostCard">
        <p className="folowers">
          <h3>1,1K</h3>Followers
        </p>
        <img className="ava" src={ava} />
        <p className="folowers">
          <h3>448</h3>Following
        </p>
      </div>

      <div className="PostDescription">
        <p className="desc">
          <h3>Alexandr Sokolov - Photographer</h3>
          Like to travel and shoot cinematic and b/w photos<br></br> Tools -
          Capture One for Raw
        </p>
      </div>

      <div className="buttonEditAndNew">
        {/* <button className="buttonEdit">Edit profile</button> */}
        <Popup
          modal
          trigger={<button className="buttonEdit">Edit profile</button>}
        >
          {(close: any) => <EditProfile close={close} />}
        </Popup>

        <Popup modal trigger={<button className="buttonNew">New post</button>}>
          {(close: any) => <NewPostWindow close={close} />}
        </Popup>
      </div>
    </div>
  );
}

export default Info;
