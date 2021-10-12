import React from "react";
import "./App.css";
import LogIn from "./LogIn/LogIn";
import LogUp from "./LogUp/LogUp";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Profile from "./Profile/Profile";
import Home from "./HomePage/Home";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signUp">
          <LogUp />
        </Route>
        <Route path="/signIn">
          <LogIn />
        </Route>

        <Route path="/profile">
        <Profile/>
      </Route>

      <Route path="/home">
        <Home/>
      </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
