import React from "react";
import CompImage from "../LogIn/ImageComponent/CompImage";
import NavBar from "../LogIn/NavBar/NavBar";
import FormUp from "./FormUp/FormUp";

//ПІДКЛЮЧЕННЯ ВСІХ КОМПОНЕНТІВ ДЛЯ РЕЄСТРУВАННЯ
function LogUp() {
  return (
    <div>
      <NavBar />
      <CompImage />
      <FormUp />
    </div>
  );
}

export default LogUp;
