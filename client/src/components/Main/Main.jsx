import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom"
import Login from "./Login";
import Home from "./Home";
import Metodo from "./Metodo";
import CargaDatos from "./CargaDatos";
import UserView from "./UserView";
import Oferta from "./Oferta";
import { UserContext } from "../../context/UserContext"
import { useNavigate } from "react-router-dom";
import PrivateRoutes from "../../utils/PrivateRoutes.middleware";

const Main = () => {
  const navigate = useNavigate()

  const { user } = useContext(UserContext);

  const noPermitirAcceso = () => {
    navigate(`/`)
  }

  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Login />} />
          
          <Route element={<PrivateRoutes />}>
            <Route path="/metodo" element={<Metodo />} />
            <Route path="/carga" element={<CargaDatos />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<UserView />} />
            <Route path="/pdf" element={<Oferta />} />
          </Route>

          <Route path="/*" element={<Navigate to={"/"} />} />
        </Routes>

      </main>

    </>
  );
};

export default Main;
