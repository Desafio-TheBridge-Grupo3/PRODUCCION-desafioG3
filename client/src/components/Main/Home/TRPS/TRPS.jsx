import { useContext } from "react";
import React, { useEffect, useState } from "react";
import { MacroContext } from "../../../../context/MacroContext";
const TRPS = ({ periodo }) => {

  
  const [totalPagoFactura, setTotalPagoFactura] = useState([])
  const [totalPagoAnual, setTotalPagoAnual] = useState([])



  const {otros, tablaCliente, tablaSeveral, preciosPotencia, updateTablaSeveral } = useContext(MacroContext);


  //multiplicaciones en cada fila
  useEffect(() => {
    setTotalPagoAnual(tablaCliente.potenciaContratada[periodo] * preciosPotencia[periodo] * 365)
  }, [tablaCliente.potenciaContratada, preciosPotencia[periodo]])

  useEffect(() => {
    setTotalPagoFactura(tablaCliente.potenciaFacturada[periodo] * preciosPotencia[periodo] * otros.diasFacturacion)
  }, [tablaCliente.potenciaFacturada, preciosPotencia[periodo]])
 
 
  useEffect(() => {
    const sumar = {
      ...tablaSeveral.totalFacturaP
    }
    sumar[periodo] = totalPagoFactura

    updateTablaSeveral({ ...tablaSeveral, totalFacturaP: sumar })

  }, [totalPagoFactura])


  useEffect(() => {
    const sumar = {
      ...tablaSeveral.totalAnualP
    }
    sumar[periodo] = totalPagoAnual

    updateTablaSeveral({ ...tablaSeveral, totalAnualP: sumar })
  }, [totalPagoAnual])

  return (
    <tr>
      <td className="disabled"><input type="number" placeholder="--" disabled value={tablaCliente.potenciaContratada[periodo]}  /></td>
      <td className="disabled"><input type="number" placeholder="--" disabled value={tablaCliente.potenciaFacturada[periodo]}  /></td>
      <td className="disabled"><input type="number" value={preciosPotencia[periodo]} disabled /></td>
      <td className="disabled"><input type="number" placeholder="--"  disabled/></td>
      <td className="total"><input type="number" disabled value={preciosPotencia[periodo]} /></td>
      <td className="total"><input type="number" disabled value={totalPagoFactura} /></td>
      <td className="total"><input type="number" disabled value={totalPagoAnual} /></td>
    </tr>
  );
};

export default TRPS;
