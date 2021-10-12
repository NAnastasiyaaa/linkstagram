import React from "react";
import userImg from "../imagesProfile/user.svg";
import "./NavBarProfile.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  useHistory,
} from "react-router-dom";

function NavBarProfile() {
  let history = useHistory();
  
  const redirect = () => {
    history.push("/home");
  };

  return (
    <div className="navbar">
      <em>
        <h1 className="logoLink">Linkstagram</h1>
      </em>
      <button className="buttonHome" onClick={redirect}>
        <b>Home</b>
      </button>
      <div className="dropdown">
        <button className="buttonLanguage">
          <b>EN</b>
        </button>
        <div className="dropdown-content">
          <h5 className="langStyle" >UA</h5>
          <h5 className="langStyle">PL</h5>
          <h5 className="langStyle">RU</h5>
        </div>
      </div>
      <img className="userImg" src={userImg} />
    </div>
  );
}
export default NavBarProfile;
