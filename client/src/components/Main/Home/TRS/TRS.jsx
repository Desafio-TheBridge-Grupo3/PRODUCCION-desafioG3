import React, { useEffect, useState } from "react";
import { useContext } from 'react';
import { MacroContext } from "../../../../context/MacroContext";

const TRS = ({ periodo }) => {

  
  const [totalPagoFactura, setTotalPagoFactura] = useState([])
  const [totalPagoAnual, setTotalPagoAnual] = useState([])

  

  const { tablaCliente, tablaSeveral, updateTablaSeveral, preciosEnergia } = useContext(MacroContext);

  //multiplicaciones en fila
  useEffect(() => {
    setTotalPagoAnual(preciosEnergia[periodo] * tablaCliente.consumoAnual[periodo] )
  }, [tablaCliente.consumoAnual, preciosEnergia[periodo]])

  useEffect(() => {
    setTotalPagoFactura(tablaCliente.consumoActual[periodo] * preciosEnergia[periodo])
  }, [tablaCliente.consumoActual, preciosEnergia[periodo]])


  

  useEffect(() => {
    const sumar = {
      ...tablaSeveral.totalFactura
    }
    sumar[periodo] = totalPagoFactura
    updateTablaSeveral({ ...tablaSeveral, totalFactura: sumar })

  }, [totalPagoFactura])


  useEffect(() => {
    const sumar = {
      ...tablaSeveral.totalAnual
    }
    sumar[periodo] = totalPagoAnual

    updateTablaSeveral({ ...tablaSeveral, totalAnual: sumar })
  }, [totalPagoAnual])


  return (
    <tr>
      <td className="disabled"><input placeholder="--" type="number" disabled value={tablaCliente.consumoAnual[periodo]} /></td>
      <td className="disabled"><input placeholder="--" type="number" disabled value={tablaCliente.consumoActual[periodo]}  /></td>
      <td className="disabled"><input  type="number" value={preciosEnergia[periodo]} disabled /></td>
      <td className="disabled"><input type="number" value={preciosEnergia[periodo]} disabled/></td>
      <td className="disabled"><input type="number"  placeholder="--" disabled/></td>
      <td className="total"><input type="number" disabled value={preciosEnergia[periodo]} /></td>
      <td className="total"><input type="number" disabled value={totalPagoFactura} /></td>
      <td className="total"><input type="number" disabled value={totalPagoAnual} /></td>
    </tr>
  );
};

export default TRS;
