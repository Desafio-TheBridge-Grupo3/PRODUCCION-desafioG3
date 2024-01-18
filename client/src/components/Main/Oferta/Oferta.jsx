import React from "react";
import { usePDF } from "react-to-pdf";
import ProgressBar from "@ramonak/react-progress-bar";

const Oferta = () => {
  const { toPDF, targetRef } = usePDF({ filename: "SeveralComparator.pdf" });

  return (
    <>
      <div ref={targetRef}>
        <secion id="main">
          <header id="headerPDF">
            <img src="src\assets\logo.png" alt="Logo several" id="logoPDF" />
          </header>
          <section id="top">
            <section id="topLeft">
              <h4 id="nombreAsesor">Paloma Ocanha</h4>
              <h5 id="emailAsesor">palomaocanha@severalenergy.com</h5>
              <article id="infoContainer">
                <div id="titulos">
                  <p className="t1">Nombre/Razón</p>
                  <p className="t1">Dirección</p>
                  <p className="t1">CUPS</p>
                  <p className="t1">Fecha</p>
                </div>
                <div id="informacion">
                  <p className="t2">Texto</p>
                  <p className="t2">Texto</p>
                  <p className="t2">ES0031405427789030NV0F</p>
                  <p className="t2">xx/xx/xxxx</p>
                </div>
              </article>
            </section>
            <section id="topRight">
              <h1 id="graphTitle">Ahorro con propuesta Several</h1>
              <article id="graphContainer">
                <div className="factura">
                  <h2 className="mTitle">Factura actual</h2>
                  <h1 className="proposal">4.789,86€</h1>
                  <ProgressBar
                    completed={50}
                    bgColor="#C1240C"
                    baseBgColor="#EBD7D8"
                  />
                </div>
                <div className="factura">
                  <h2 className="mTitle">Factura anual</h2>
                  <h1 className="proposal">4.789,86€</h1>
                  <ProgressBar
                    completed={50}
                    bgColor="#C1240C"
                    baseBgColor="#EBD7D8"
                  />
                </div>
              </article>
            </section>
          </section>

          <section id="middle">
            <article id="middleTitle">
              <h1 className="mTitle">Datos de Factura actual</h1>
              <h3 className="mTitle2">Días de facturación: 37</h3>
            </article>
            <article id="middleTabla">
              <table className="facturaActual">
                <tr>
                  <th> </th>
                  <th>P1</th>
                  <th>P2</th>
                  <th>P3</th>
                  <th>P4</th>
                  <th>P5</th>
                  <th>P6</th>
                </tr>
                <tr>
                  <td className="typeInput campitos">Precios potencia (€/kWh/dia)</td>
                  <td className="inputPeriodo campitos">0,000000 €</td>
                  <td className="inputPeriodo campitos">0,000000 €</td>
                  <td className="inputPeriodo campitos">0,000000 €</td>
                  <td className="inputPeriodo campitos">0,000000 €</td>
                  <td className="inputPeriodo campitos">0,000000 €</td>
                  <td className="inputPeriodo campitos">0,000000 €</td>
                </tr>
                <tr>
                  <td className="typeInput campitos">
                    Precios energía media anual (€/kWh)
                  </td>
                  <td className="inputPeriodo campitos">0,000000 €</td>
                  <td className="inputPeriodo campitos">0,000000 €</td>
                  <td className="inputPeriodo campitos">0,000000 €</td>
                  <td className="inputPeriodo campitos">0,000000 €</td>
                  <td className="inputPeriodo campitos">0,000000 €</td>
                  <td className="inputPeriodo campitos">0,000000 €</td>
                </tr>
                <tr>
                  <td className="typeInput campitos">Precios energía (€/kWh)</td>
                  <td className="inputPeriodo campitos">0,000000 €</td>
                  <td className="inputPeriodo campitos">0,000000 €</td>
                  <td className="inputPeriodo campitos">0,000000 €</td>
                  <td className="inputPeriodo campitos">0,000000 €</td>
                  <td className="inputPeriodo campitos">0,000000 €</td>
                  <td className="inputPeriodo campitos">0,000000 €</td>
                </tr>
                <tr>
                  <td className="typeInput campitos">Consumo anual estimado (Kwh)</td>
                  <td className="inputPeriodo campitos">0,000000 €</td>
                  <td className="inputPeriodo campitos">0,000000 €</td>
                  <td className="inputPeriodo campitos">0,000000 €</td>
                  <td className="inputPeriodo campitos">0,000000 €</td>
                  <td className="inputPeriodo campitos">0,000000 €</td>
                  <td className="inputPeriodo campitos">0,000000 €</td>
                </tr>
                <tr>
                  <td className="typeInput campitos">Consumo factura actual (Kwh)</td>
                  <td className="inputPeriodo campitos">0,000000 €</td>
                  <td className="inputPeriodo campitos">0,000000 €</td>
                  <td className="inputPeriodo campitos">0,000000 €</td>
                  <td className="inputPeriodo campitos">0,000000 €</td>
                  <td className="inputPeriodo campitos">0,000000 €</td>
                  <td className="inputPeriodo campitos">0,000000 €</td>
                </tr>
                <tr>
                  <td className="typeInput campitos">Potencia facturada (Kw)</td>
                  <td className="inputPeriodo campitos">0,000000 €</td>
                  <td className="inputPeriodo campitos">0,000000 €</td>
                  <td className="inputPeriodo campitos">0,000000 €</td>
                  <td className="inputPeriodo campitos">0,000000 €</td>
                  <td className="inputPeriodo campitos">0,000000 €</td>
                  <td className="inputPeriodo campitos">0,000000 €</td>
                </tr>
              </table>
              <table className="conclusionesFactura">
                <th className="typeInput">Energía reactiva</th>
                <th className="inputPeriodo">00,0 €</th>
                <th className="typeInput">Impuesto eléctrico</th>
                <th className="inputPeriodo">00,0 €</th>
                <th className="typeInput">Alquiler de equipo</th>
                <th className="inputPeriodo">00,0 €</th>
                <th className="typeInput">Otros conceptos</th>
                <th className="inputPeriodo">00,0 €</th>
              </table>
            </article>
            <article className="totalOferta">
              <div className="totalContainer">
                <h3 className="totalTitulo">Total factura</h3>
                <h3 className="totalNum">xxx,xx €</h3>
              </div>
              <div className="totalContainer">
                <h3 className="totalTitulo">Total anual estimado</h3>
                <h3 className="totalNum">xx.xxx,xx €</h3>
              </div>
            </article>
          </section>


          <section id="middle">
            <article id="middleTitle">
              <h1 className="mTitle">Propuesta Several</h1>
              <h3 className="mTitle2">Días de facturación: 37</h3>
            </article>
            <article id="middleTabla">
              <table className="facturaActual">
                <tr>
                  <th> </th>
                  <th>P1</th>
                  <th>P2</th>
                  <th>P3</th>
                  <th>P4</th>
                  <th>P5</th>
                  <th>P6</th>
                </tr>
                <tr>
                  <td className="typeInput campitos">Precios potencia (€/kWh/dia)</td>
                  <td className="inputPeriodo campitos">0,000000 €</td>
                  <td className="inputPeriodo campitos">0,000000 €</td>
                  <td className="inputPeriodo campitos">0,000000 €</td>
                  <td className="inputPeriodo campitos">0,000000 €</td>
                  <td className="inputPeriodo campitos">0,000000 €</td>
                  <td className="inputPeriodo campitos">0,000000 €</td>
                </tr>
                <tr>
                  <td className="typeInput campitos">
                    Precios energía media anual (€/kWh)
                  </td>
                  <td className="inputPeriodo campitos">0,000000 €</td>
                  <td className="inputPeriodo campitos">0,000000 €</td>
                  <td className="inputPeriodo campitos">0,000000 €</td>
                  <td className="inputPeriodo campitos">0,000000 €</td>
                  <td className="inputPeriodo campitos">0,000000 €</td>
                  <td className="inputPeriodo campitos">0,000000 €</td>
                </tr>
                <tr>
                  <td className="typeInput campitos">Precios energía (€/kWh)</td>
                  <td className="inputPeriodo campitos">0,000000 €</td>
                  <td className="inputPeriodo campitos">0,000000 €</td>
                  <td className="inputPeriodo campitos">0,000000 €</td>
                  <td className="inputPeriodo campitos">0,000000 €</td>
                  <td className="inputPeriodo campitos">0,000000 €</td>
                  <td className="inputPeriodo campitos">0,000000 €</td>
                </tr>
              </table>
              <table className="conclusionesFactura">
                <th className="typeInput">Energía reactiva</th>
                <th className="inputPeriodo">00,0 €</th>
                <th className="typeInput">Impuesto eléctrico</th>
                <th className="inputPeriodo">00,0 €</th>
                <th className="typeInput">Alquiler de equipo</th>
                <th className="inputPeriodo">00,0 €</th>
                <th className="typeInput">Otros conceptos</th>
                <th className="inputPeriodo">00,0 €</th>
              </table>
              <article id="aclaracion">
              La estimación anual ha sido realizada utilizando datos históricos de consumo energético publicados del ultimo año en SIPS y considerando la proyección anual del perfil de consumo así como los precios facilitados por el cliente en su última factura de luz. 
              </article>
            </article>
            <article className="totalOferta">
              <div className="totalContainer">
                <h3 className="totalTitulo">Total factura</h3>
                <h3 className="totalNum">xxx,xx €</h3>
              </div>
              <div className="totalContainer">
                <h3 className="totalTitulo">Total anual estimado</h3>
                <h3 className="totalNum">xx.xxx,xx €</h3>
              </div>
            </article>
          </section>
          <article id="bottomTextContainer">
            <h4>
              Propuesta valida durante 7 (siete) dias desde la fecha de la
              propuesta.
            </h4>
            <h5>Documentación para efectuar la modificación propuesta:</h5>
            <h5>
              (1) DNI Firmante (2) Copia Facturas (3) Recibo Bancario - (4) CIF
              de la empresa
            </h5>
          </article>
          <article className="btnContainer">
          <button className="btnPDF" onClick={() => toPDF()}>DESCARGAR PDF</button>
            </article>        
        </secion>
      </div>
    </>
  );
};

export default Oferta;
