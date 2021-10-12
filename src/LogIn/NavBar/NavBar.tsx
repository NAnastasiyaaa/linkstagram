import React from 'react';
import "./NavBar.css";


//Component NavBar
function NavBar() {
  return (
    <div className="NavBar">
         <em><h1>Linkstagram</h1></em>
        
        <div className="dropdown">
        <button className="buttonLanguage"><b>EN</b></button>  
        <div className="dropdown-content">
          <h5 className="langStyle" >UA</h5>
          <h5 className="langStyle">PL</h5>
          <h5 className="langStyle">RU</h5>
        </div>
      </div>
    </div>
  );
}

export default NavBar;