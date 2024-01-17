import React from "react";
import { useContext, useState } from 'react';
import { usePDF } from 'react-to-pdf';
import TablaCliente from "./TablaCliente";
import TablaSeveral from "./TablaSeveral";
import { MacroContext } from "../../../context/MacroContext"

const Home = () => {
  const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});

  const [tablaCliente, setTablaCliente] = useState(
    {
      consumoAnual:{
        P1:0,
        P2:0,
        P3:0,
        P4:0,
        P5:0,
        P6:0
      },
      consumoActual:{
        P1:0,
        P2:0,
        P3:0,
        P4:0,
        P5:0,
        P6:0
      },
      totalFactura:{
        P1:0,
        P2:0,
        P3:0,
        P4:0,
        P5:0,
        P6:0
      },
      totalAnual:{
        P1:0,
        P2:0,
        P3:0,
        P4:0,
        P5:0,
        P6:0
      },
      potenciaContratada:{
        P1:0,
        P2:0,
        P3:0,
        P4:0,
        P5:0,
        P6:0
      },
      potenciaFacturada:{
        P1:0,
        P2:0,
        P3:0,
        P4:0,
        P5:0,
        P6:0
      },
      totalFacturaP:{
        P1:0,
        P2:0,
        P3:0,
        P4:0,
        P5:0,
        P6:0
      },
      totalAnualP:{
        P1:0,
        P2:0,
        P3:0,
        P4:0,
        P5:0,
        P6:0
      },
      totalEnergiaFacturaC:0,
      totalEnergiaAnualC:0,
      totalPotenciaFacturaC:0,
      totalPotenciaAnualC:0
    })

    const [tablaSeveral, setTablaSeveral] = useState(
      {
        totalFactura:{
          P1:0,
          P2:0,
          P3:0,
          P4:0,
          P5:0,
          P6:0
        },
        totalAnual:{
          P1:0,
          P2:0,
          P3:0,
          P4:0,
          P5:0,
          P6:0
        },
        totalFacturaP:{
          P1:0,
          P2:0,
          P3:0,
          P4:0,
          P5:0,
          P6:0
        },
        totalAnualP:{
          P1:0,
          P2:0,
          P3:0,
          P4:0,
          P5:0,
          P6:0
        },
        totalEnergiaFacturaSev:0,
        totalEnergiaAnualSev:0,
        totalPotenciaFacturaSev:0,
        totalPotenciaAnualSev:0
      })

      const [otros, setOtros] = useState(
         {diasFacturacion:0,
          energiaReactiva:0,
          impuestoElectrico:0,
          alquilerEquipo:0,
          otrosImporte1:0,
          otrosPropuesta1: false,
          otrosAnual1:false,
          otrosImporte2:0,
          otrosPropuesta2: false,
          otrosAnual2:false,
          iva:0.21,
          otrosConceptos:0,
          otrosConceptosAnuales:0,
          importeTotalFacturaCliente:0,
          importeAnualEstimadoCliente:0,
          importeTotalFacturaSeveral:0,
          importeAnualEstimadoSeveral:0
        })


    const updateTablaCliente = (newTotalesCliente) => {
      setTablaCliente(newTotalesCliente);
    };

    const updateTablaSeveral = (newTotalesSeveral) => {
      setTablaSeveral(newTotalesSeveral);
    };
    const updateOtros = (newOtros) => {
      setOtros(newOtros);
    };

const data ={tablaCliente,tablaSeveral,updateTablaCliente,updateTablaSeveral, otros, updateOtros}


  return (
    <>
      <section>
        <section ref={targetRef}>
          <MacroContext.Provider value={data}>
          <TablaCliente />
          <TablaSeveral />
          </MacroContext.Provider>
          <button onClick={() => toPDF()}>Download PDF</button>
        </section>
      </section>
    </>
  );
};

export default Home;
