import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
// import ProgressBar from 'react-bootstrap/ProgressBar'
import { useContext } from "react";
import { MacroContext } from "../../../../../../context/MacroContext";

const Charts = () => {
  const { otros } = useContext(MacroContext);

  const ahorroActual = (otros.importeTotalFacturaCliente - otros.importeTotalFacturaSeveral);
  const ahorroAnual = (otros.importeAnualEstimadoCliente - otros.importeAnualEstimadoSeveral);

  const ahorroActualToFixed = ahorroActual.toFixed(2)
  const ahorroAnualToFixed = ahorroAnual.toFixed(2)

  const porcentajeActual = (ahorroActual * 100) / otros.importeTotalFacturaCliente
  const porcentajeAnual = (ahorroAnual * 100) / otros.importeAnualEstimadoCliente

  const porcentajeFixed1 = porcentajeActual.toFixed(0)
  const porcentajeFixed2 = porcentajeAnual.toFixed(0)
  console.log(porcentajeFixed1);

  return (
    <>
      <section id="chartsComponent">
        <section id="actual">
          <h3>Ahorro factura actual</h3>
          <h1>{ahorroActualToFixed}</h1>
          <article id="chart1">
            <ProgressBar completed={`${porcentajeFixed1}%`} bgColor="#C1240C"/>
          </article>
        </section>

        <section id="anual">
          <h3>Ahorro anual</h3>
          <h1>{ahorroAnualToFixed}</h1>
          <article id="chart2">
            <ProgressBar completed={`${porcentajeFixed2}%`} bgColor="#C1240C" />
          </article>
        </section>
      </section>
    </>
  );
};

export default Charts;
