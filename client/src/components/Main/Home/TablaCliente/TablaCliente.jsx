import React from "react";
import { useState } from "react";
import Franja from "./Franja"
import Energia from "./Energia"
import Potencia from "./Potencia"
import Total from './Total'
import COtros from './COtros'

const TablaCliente = () => {

  return (
    <>
      <section className="tablaGrande">
        <article className="compañia" >
          <h1 className="tituloTabla">Compañía actual</h1>
          <select name="compañia" id="compañia">
            <option value="endesa">Endesa</option>
            <option value="iberdrola">Iberdrola</option>
            <option value="naturgy">Naturgy</option>
            <option value="acciona">Acciona</option>
          </select>
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
