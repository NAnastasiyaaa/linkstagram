import React from "react";
import Info from "./InfoProfile/Info";
import NavBarProfile from "./NavBarProfile/NavBarProfile";
import Post from "./Posts/Post";
import Stories from "./Stories/Stories";


function Profile() {
  return (
    <div>
        <NavBarProfile/>
        <Info/>
        <Stories/>
        <Post likes={439} comments={34} 
        text={`TB to New York October 2018."You shouldn't wait for other people to make special things happen. 
        You have to create your own memories." Heidi Klum`}/>
    </div>
  );
}

export default Profile;


