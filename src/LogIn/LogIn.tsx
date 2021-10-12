import React from 'react';
import CompImage from './ImageComponent/CompImage';
import Form from './LogInForm/Form';
import NavBar from './NavBar/NavBar';

//ПІДКЛЮЧЕННЯ ВСІХ КОМПОНЕНТІВ ДЛЯ РЕЄСТРУВАННЯ
function LogIn() {
  return (
    <div>
        <NavBar/>
        <CompImage/>
        <Form/>
      </div>
  );
}

export default LogIn;