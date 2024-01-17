import React, { useEffect } from "react";
import { useState } from "react";
import Franja from "./Franja"
import Energia from "./Energia"
import Potencia from "./Potencia"
import Total from './Total'
import COtros from './COtros'

const TablaCliente = () => {

  const [logo, setLogo] = useState("src/assets/endesa.png")

  const updateLogo = (event) => {
    setLogo(event.target.value)
    console.log(event.target.value)
  };


  return (
    <>
      <section className="tablaGrande">
        <article  >
          
          <h1 className="tituloTabla">Compañía actual</h1>
          <select name="compañia" id="compañia" onChange={(event) => updateLogo(event)}>
            <option value="src\assets\endesa.png">Endesa</option>
            <option value="src\assets\iberdrola_logo.png">Iberdrola</option>
            <option value="src\assets\candela.png">Candela</option>
            <option value="src\assets\acciona.png">Acciona</option>
          </select>

        </article>
        <article >
        <img src={logo} alt="" />
        </article>

        <article className="tabla">
          <Franja />
          <Energia />
          <Potencia />
        </article>
        <article className="subseccion">
          <COtros />
          <Total />
        </article>

      </section>
    </>
  )
};

export default TablaCliente;
