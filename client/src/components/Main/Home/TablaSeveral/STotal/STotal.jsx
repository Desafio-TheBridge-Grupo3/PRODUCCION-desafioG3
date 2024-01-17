import React, { useContext, useState, useEffect } from "react";
import { MacroContext } from "../../../../../context/MacroContext";

const STotal = () => {

  const { otros, tablaSeveral, updateOtros } = useContext(MacroContext);

  const [importeTotalFacturaSeveral, setTotalFactura] = useState(0)
  const [importeAnualEstimadoSeveral, setTotalAnual] = useState([])

  useEffect(() => {
    let sumaFactura = 0;
    sumaFactura += (tablaSeveral.totalEnergiaFacturaSev + tablaSeveral.totalPotenciaFacturaSev + otros.otrosConceptos) * (1 + otros.iva)
    const totalFactura = sumaFactura.toFixed(2)
    setTotalFactura(totalFactura)
  }, [tablaSeveral.totalEnergiaFacturaSev, tablaSeveral.totalPotenciaFacturaSev, otros.otrosConceptos, otros.iva])


  useEffect(() => {
    const sumaAnual = (tablaSeveral.totalEnergiaAnualSev + tablaSeveral.totalPotenciaAnualSev + otros.otrosConceptosAnuales) * (1 + otros.iva)

    setTotalAnual(sumaAnual)
  }, [tablaSeveral.totalEnergiaAnualSev, tablaSeveral.totalPotenciaAnualSev, otros.otrosConceptosAnuales])


  useEffect(() => {
    updateOtros({ ...otros, importeTotalFacturaSeveral })
  }, [importeTotalFacturaSeveral])
  
    useEffect(() => {
      updateOtros({ ...otros, importeAnualEstimadoSeveral })
    }, [importeAnualEstimadoSeveral])
   


  return (
    <>
      <article className="resultadosTotales">
        <h3 className="totfac">Importe Total Factura</h3>
        <h3 className="totfac">{importeTotalFacturaSeveral} €</h3>
        <h3 className="totan">Total anual estimado</h3>
        <h3 className="totan">{importeAnualEstimadoSeveral} €</h3>
      </article>
    </>
  );
};

export default STotal;
