import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { MacroContext } from "../../../../../context/MacroContext";

const COtros = () => {

  const { otros, updateOtros } = useContext(MacroContext);

  const [diasFacturacion, setDiasFacturacion] = useState(0)
  const [energiaReactiva, setEnergiaReactiva] = useState(0)
  const [impuestoElectrico, setImpuestoElectrico] = useState(0)
  const [alquilerEquipo, setAlquilerEquipo] = useState(0)
  const [otrosImporte1, setOtrosImporte1] = useState(0)
  const [otrosPropuesta1, setOtrosPropuesta1] = useState(false)
  const [otrosAnual1, setOtrosAnual1] = useState(false)
  const [otrosImporte2, setOtrosImporte2] = useState(0)
  const [otrosPropuesta2, setOtrosPropuesta2] = useState(false)
  const [otrosAnual2, setOtrosAnual2] = useState(false)
  const [iva, setIva] = useState(0.21)


  const update = (event, setter) => {
    setter(Number(event.target.value))
  }
  const updateBoolean = (event, setter) =>{
    setter(Boolean(event.target.checked))
  }

  useEffect(() => {
    updateOtros({ ...otros, diasFacturacion})
  }, [diasFacturacion])

  useEffect(() => {
    updateOtros({ ...otros, energiaReactiva})
  }, [energiaReactiva])

  useEffect(() => {
    updateOtros({ ...otros, impuestoElectrico})
  }, [impuestoElectrico])

  useEffect(() => {
    updateOtros({ ...otros, alquilerEquipo})
  }, [alquilerEquipo])

  useEffect(() => {
    updateOtros({ ...otros, iva})
  }, [iva])

  useEffect(() => {
    updateOtros({ ...otros, otrosImporte1})
  }, [otrosImporte1])

  useEffect(() => {
    updateOtros({ ...otros, otrosPropuesta1})
  }, [otrosPropuesta1])

  useEffect(() => {
    updateOtros({ ...otros, otrosAnual1})
  }, [otrosAnual1])

  useEffect(() => {
    updateOtros({ ...otros, otrosImporte2})
  }, [otrosImporte2])

  useEffect(() => {
    updateOtros({ ...otros, otrosPropuesta2})
  }, [otrosPropuesta2])

  useEffect(() => {
    updateOtros({ ...otros, otrosAnual2})
  }, [otrosAnual2])

  return (
    <>
      <article>
        <article className="cotros">

          <label>Días Facturación</label>
          <input placeholder="--" type="number" value={diasFacturacion} onChange={(e) => update(e, setDiasFacturacion)} />

          <label>Energía reactiva</label>
          <input placeholder="--" type="number" value={energiaReactiva} onChange={(e) => update(e, setEnergiaReactiva)}/>

          <label>Impuesto eléctrico</label>
          <input placeholder="--" type="number" value={impuestoElectrico} onChange={(e) => update(e, setImpuestoElectrico)}/>

          <label>Alquiler equipo</label>
          <input placeholder="--" type="number" value={alquilerEquipo} onChange={(e) => update(e, setAlquilerEquipo)}/>

          <label>IVA</label>
          <select name="iva" id="iva" value={iva} onChange={(e) => update(e, setIva)}>
            <option value={0.21}>21%</option>
            <option value={0.05}>5%</option>
            <option value={0.10}>10%</option>
          </select>
          </article>
          <article className="cotros">
          <label>Otros conceptos</label>
          <input placeholder="--" type="number" value={otrosImporte1} onChange={(e) => update(e, setOtrosImporte1)}/>
          <label>Incluir en nuestra propuesta</label>
          <input type="checkbox" checked={otrosPropuesta1} onChange={(e) => updateBoolean(e, setOtrosPropuesta1)}/> 
          <label>Cobro anual</label>
          <input type="checkbox" checked={otrosAnual1} onChange={(e) => updateBoolean(e, setOtrosAnual1)}/> 

          <label>Otros conceptos</label>
          <input placeholder="--" type="number" value={otrosImporte2} onChange={(e) => update(e, setOtrosImporte2)}/>
          <label>Incluir en nuestra propuesta</label>
          <input type="checkbox" checked={otrosPropuesta2} onChange={(e) => updateBoolean(e, setOtrosPropuesta2)}/> 
          <label>Cobro anual</label>
          <input type="checkbox" checked={otrosAnual2} onChange={(e) => updateBoolean(e, setOtrosAnual2)}/>

        </article>
      </article>
    </>

  );
};

export default COtros;
