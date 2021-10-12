import React from "react";
import NavBarProfile from "../Profile/NavBarProfile/NavBarProfile";
import Gallery from "./PhotoGallery/Gallery";
import Bio from "./UserBio/Bio";



//ПІДКЛЮЧЕННЯ ВСІХ КОМПОНЕНТІВ ДЛЯ РЕЄСТРУВАННЯ
function Home() {
  return (
    <div>
        <NavBarProfile/>
        <Bio/>
        <Gallery/>
    </div>
  );
}

export default Home;