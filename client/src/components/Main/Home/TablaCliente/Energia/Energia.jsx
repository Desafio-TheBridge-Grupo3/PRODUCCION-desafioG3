import { useContext, useEffect, useState } from 'react';
import React from "react";
import TR from '../../TR/TR';
import { MacroContext } from '../../../../../context/MacroContext';


const Energia = () => {

  const { tablaCliente, updateTablaCliente } = useContext(MacroContext);
  const [totalEnergiaFacturaC, setTotalEnergiaFacturaC] = useState(0)
  const [totalEnergiaAnualC, setTotalEnergiaAnualC] = useState(0)

  useEffect(()=>{
    const total=Object.values(tablaCliente.totalFactura).reduce((a,b) => a+b)
    setTotalEnergiaFacturaC(total)
    updateTablaCliente({...tablaCliente, totalEnergiaFacturaC:total})
  }, [tablaCliente.totalFactura])

  useEffect(()=>{
    const total=Object.values(tablaCliente.totalAnual).reduce((a,b) => a+b)
    setTotalEnergiaAnualC(total)
    updateTablaCliente({...tablaCliente, totalEnergiaAnualC:total})
  }, [tablaCliente.totalAnual])

  

  return (
    <>
    <section id="energia">
      <h2>Energía</h2>
      <table className="subtablas">
        <thead>
        <tr>
          <th className="th1">Consumo anual (kWh)</th>
          <th className="th1">Consumo factura actual (kWh)
          </th>
          <th className="th1">Precio energía activa media anual facturación (€/kWh)
          </th>
          <th className="th1">Precio energía activa mes de facturación (€/kWh)
          </th>
          <th className="th1">Descuento</th>
          <th className="th1">Precio con descuento
          </th>
          <th className="th1">Total pago en factura
          </th>
          <th className="th1">Total pago anual
          </th>
        </tr>
        </thead>
        <tbody>
        <TR periodo={"P1"}/>
        <TR periodo={"P2"}/>
        <TR periodo={"P3"}/>
        <TR periodo={"P4"}/>
        <TR periodo={"P5"}/>
        <TR periodo={"P6"}/>
        </tbody>
        <tfoot>
        <tr>
          <td className="total"><input type="number" disabled value={Object.values(tablaCliente.consumoAnual).reduce((a,b) => a+b)}/></td>
          <td className="total"><input type="number" disabled value={Object.values(tablaCliente.consumoActual).reduce((a,b) => a+b)}/></td>
          <td className="hidden"></td>
          <td className="hidden"></td>
          <td className="hidden"></td>
          <td className="hidden"></td>
          <td className="total"><input type="number" disabled value={totalEnergiaFacturaC}/></td>
          <td className="total"><input type="number" disabled value={totalEnergiaAnualC}/></td>
        </tr>
        </tfoot>
      </table>
      </section>
    </>
  );
};

export default Energia;
