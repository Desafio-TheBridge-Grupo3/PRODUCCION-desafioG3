import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { MacroContext } from "../../../../../context/MacroContext";

const Otros = () => {

  const { otros, updateOtros } = useContext(MacroContext);

  const [otrosConceptos, setOtrosConceptos] = useState([])
  const [otrosConceptosAnuales, setOtrosConceptosAnuales] = useState([])

  

  useEffect(()=>{
    let otrosConceptosCalc = 0;
    if(otros.otrosPropuesta1 && otros.otrosPropuesta2){
      otrosConceptosCalc = (otros.otrosImporte1 + otros.otrosImporte2)
    } else if(otros.otrosPropuesta1){
      otrosConceptosCalc= otros.otrosImporte1
    } else if (otros.otrosPropuesta2){
      otrosConceptosCalc = otros.otrosImporte2
    } 
    setOtrosConceptos(otrosConceptosCalc)
    
  },[otros.otrosImporte1, otros.otrosImporte2, otros.otrosPropuesta1, otros.otrosPropuesta2])

  useEffect(()=>{
    let anual = 0;
    const cociente = 12.167
    if(otros.otrosPropuesta1 && otros.otrosPropuesta2 && otros.otrosAnual1 && otros.otrosAnual2){
      anual = (otros.otrosImporte1 + otros.otrosImporte2) * cociente
    } else if(otros.otrosPropuesta1 && otros.otrosAnual1){
      anual = otros.otrosImporte1 * cociente
    } else if (otros.otrosPropuesta2 && otros.otrosAnual2){
      anual = otros.otrosImporte2 * cociente
    } 
    setOtrosConceptosAnuales(anual)
  }, [otros.otrosPropuesta1,otros.otrosPropuesta2, otros.otrosImporte1, otros.otrosImporte2, otros.otrosAnual1, otros.otrosAnual2])

  useEffect(()=>{
    updateOtros({...otros, otrosConceptos } )
  }, [otrosConceptos])

useEffect(()=>{
  updateOtros({...otros, otrosConceptosAnuales } )
}, [otrosConceptosAnuales])

  return (
    <>
      <article className="otros">


        <p>Impuesto eléctrico</p>
        <input placeholder="--" disabled />


        <p>Otros conceptos</p>
        <input disabled value={otrosConceptos} />


        <p >Otros conceptos anual</p>
        <input disabled value={otrosConceptosAnuales} />


      </article>
    </>
  );
};

export default Otros;
