import React from "react";
import Form from './Form';
import Charts from './Charts'

const FormChartComponent = () => {
  return (
    <>
    <section className="formProposalSection">
    
      <section className="formChart">
        <Form/><Charts/>
      </section>
      </section>
    </>
  )
};

export default FormChartComponent;