import React from "react";
import { useContext, useState, useEffect } from "react";
import TRPC from "../../TRPC/TRPC";
import { MacroContext } from "../../../../../context/MacroContext";


const Potencia = () => {

  const { tablaCliente, updateTablaCliente } = useContext(MacroContext);

  
  const [totalPotenciaFacturaC, setTotalPotenciaFacturaC] = useState(0)
  const [totalPotenciaAnualC, setTotalPotenciaAnualC] = useState(0)


  useEffect(() => {
    const total = Object.values(tablaCliente.totalFacturaP).reduce((a, b) => a + b)
    setTotalPotenciaFacturaC(total)
    updateTablaCliente({ ...tablaCliente, totalPotenciaFacturaC: total })
  }, [tablaCliente.totalFacturaP])

  useEffect(() => {
    const total = Object.values(tablaCliente.totalAnualP).reduce((a, b) => a + b)
    setTotalPotenciaAnualC(total)
    updateTablaCliente({ ...tablaCliente, totalPotenciaAnualC: total })
  }, [tablaCliente.totalAnualP])

  return (
    <>
      <section id="potencia">
        <h2>Potencia</h2>
        <table className="subtablas">
          <thead>
            <tr>
              <th className="th1">Potencia Contratada (kW)</th>
              <th className="th1">Potencia Facturada (kW)
              </th>
              <th className="th1">Precios potencia (€/kWh/día)
              </th>
              <th className="th1">Descuento</th>
              <th className="th1">Precio con Descuento</th>
              <th className="th1">Total Pago en Factura
              </th>
              <th className="th1">Total Pago Anual
              </th>
            </tr>
          </thead>
          <tbody>
            <TRPC periodo={"P1"} />
            <TRPC periodo={"P2"} />
            <TRPC periodo={"P3"} />
            <TRPC periodo={"P4"} />
            <TRPC periodo={"P5"} />
            <TRPC periodo={"P6"} />
          </tbody>
          <tfoot>
            <tr>
              <td className="hidden"></td>
              <td className="hidden"></td>
              <td className="hidden"></td>
              <td className="hidden"></td>
              <td className="hidden"></td>
              <td className="total"><input type="number" disabled value={totalPotenciaFacturaC} /></td>
              <td className="total"><input type="number" disabled value={totalPotenciaAnualC} /></td>
            </tr>
          </tfoot>

        </table>
      </section>
    </>
  )
};

export default Potencia;
