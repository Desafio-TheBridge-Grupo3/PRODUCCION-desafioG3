import React from "react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Header = () => {

  const { signOut} = useContext(UserContext);

  return (
    <>
    <header>
    <img src="src\assets\logo.png" alt="Logo several" id="logo"/>
    <button id="logout" onClick={signOut}><p>Logout</p></button>
    </header>
    </>
  )
};

export default Header;
