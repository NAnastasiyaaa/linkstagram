import React from 'react';
import "C:/Users/Legion/linkstagram-app/src/LogIn/LogInForm/Form.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  useHistory
} from "react-router-dom";
import Profile from '../../Profile/Profile';



//Component Form Log Up
function FormUp() {
  let history = useHistory();
  const redirect = () => {
    history.push("/profile");
  };
  return (
    <div className="loginForm">
      <h2 className="logInHeader">Sign Up</h2>
      <label>Email</label>
      <input placeholder="example@mail.com"></input>
      <label>User name</label>
      <input placeholder="alexexample..."></input>
      <label>Password</label>
      <input placeholder="Type in..."></input>
      <br></br>
      <button className="ButtonLogIn" onClick={redirect}>Sign up</button>
      <p className="linkName">  Have a account? <Link className="linkSignUp" to="/signIn"> Log in  </Link> </p>
    </div>
  );
}

export default FormUp;