import React from 'react';
import "./Form.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  useHistory,
} from "react-router-dom";
import Profile from '../../Profile/Profile';


//Component Form Log In
function Form() {
  let history = useHistory();

  const redirect = () => {
    history.push("/profile");
  };

  return (
    <div className="loginForm">
      <h2 className="logInHeader">Log In</h2>
      <label >Email</label>
      <input placeholder="example@mail.com"></input>
      <label>Password</label>
      <input placeholder="Type in..."></input>
      <br></br>
      <button className="ButtonLogIn" onClick={redirect} > 
        Log in
      </button>
      
      
      <p className="linkName"> Don't have an account? <Link className="linkSignUp" to="/signUp"> Sign Up  </Link> </p>

    </div>
  );
}

export default Form;