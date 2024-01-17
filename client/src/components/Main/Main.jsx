import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom"
import Login from "./Login";
import Home from "./Home";
import Metodo from "./Metodo";
import CargaDatos from "./CargaDatos";
import UserView from "./UserView";
import { UserContext } from "../../context/UserContext"

const Main = () => {

  const { user } = useContext(UserContext);

  return (
    <>
    <main>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/metodo" element ={<Metodo/>}/>
        <Route path="/carga" element={<CargaDatos/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<UserView />} />
        <Route path="/*" element={<Navigate to={"/"} />} /> 
      </Routes>
    </main>

    </>
  );
};

export default Main;
