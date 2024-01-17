import React from "react";
import Table from 'react-bootstrap/Table';

const Clients = () => {
  return (
    <section className="tableContainer">
      <h1 className="clientes">Clientes</h1>
    <Table striped borderless hover>
      <thead className="tableHead">
        <tr>
          <th className="tableTitle">Titular</th>
          <th className="tableTitle" >Dirección de Suministro</th>
          <th className="tableTitle">CUPS</th>
          <th className="tableTitle">Número de teléfono</th>
          <th className="tableTitle">Mail</th>
          <th className="tableTitle">Número ID</th>
        </tr>
      </thead>
      <tbody className="tableBody">
        <tr>
          <td>Alvaro  Saladro </td>
          <td>Av. de la nada, 34, 28003, Madrid</td>
          <td>ES0031405427789030NV0F</td>
          <td>+34 3479977234</td>
          <td>andaya@gmail.com</td>
          <td>ID 4405</td>
        </tr>
        <tr>
        <td>Alvaro  Saladro </td>
          <td>Av. de la nada, 34, 28003, Madrid</td>
          <td>ES0031405427789030NV0F</td>
          <td>+34 3479977234</td>
          <td>andaya@gmail.com</td>
          <td>ID 4405</td>
        </tr>
        <tr>
        <td>Alvaro  Saladro </td>
          <td>Av. de la nada, 34, 28003, Madrid</td>
          <td>ES0031405427789030NV0F</td>
          <td>+34 3479977234</td>
          <td>andaya@gmail.com</td>
          <td>ID 4405</td>
        </tr>
        <tr>
        <td>Alvaro  Saladro </td>
          <td>Av. de la nada, 34, 28003, Madrid</td>
          <td>ES0031405427789030NV0F</td>
          <td>+34 3479977234</td>
          <td>andaya@gmail.com</td>
          <td>ID 4405</td>
        </tr>
      </tbody>
    </Table>
    </section>
  );
};

export default Clients;
