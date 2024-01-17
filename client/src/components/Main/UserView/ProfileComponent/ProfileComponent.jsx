import React from "react";
import Card from 'react-bootstrap/Card';

const ProfileComponent = () => {
  return <>
  <main>
    <section className="userContainer">
    <h1>
      Bienvenida, Paloma
    </h1>
    <section className="newProposal">
    <h3>Crear nueva propuesta</h3>
    <a href="/carga"><img src="./img/addIcon.png" className="addIcon"/></a>
    </section>
    <section className="lastProposals">
    <h1>Últimas propuestas</h1>
    <section className="cardsContainer">
    <Card style={{ width: '18rem' }} className="card">
      <Card.Body>
        <Card.Title className="cardTitle">Ruben Saris</Card.Title>
        <Card.Text className="cardText">
          Dirección de suministro<br/>
          CUPS
         <section className="id">ID 4054</section> 
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className="card">
      <Card.Body>
        <Card.Title className="cardTitle">Ruben Saris</Card.Title>
        <Card.Text className="cardText">
          Dirección de suministro<br/>
          CUPS
          <section className="id">ID 4054</section> 
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className="card">
      <Card.Body>
        <Card.Title className="cardTitle">Ruben Saris</Card.Title>
        <Card.Text className="cardText">
          Dirección de suministro<br/>
          CUPS
          <section className="id">ID 4054</section>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className="card">
      <Card.Body>
        <Card.Title className="cardTitle">Ruben Saris</Card.Title>
        <Card.Text className="cardText">
          Dirección de suministro<br/>
          CUPS
          <section className="id">ID 4054</section>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className="card">
      <Card.Body>
        <Card.Title className="cardTitle">Ruben Saris</Card.Title>
        <Card.Text className="cardText">
          Dirección de suministro<br/>
          CUPS
          <section className="id">ID 4054</section>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className="card">
      <Card.Body>
        <Card.Title className="cardTitle">Ruben Saris</Card.Title>
        <Card.Text className="cardText">
          Dirección de suministro<br/>
          CUPS
          <section className="id">ID 4054</section>
        </Card.Text>
      </Card.Body>
    </Card>
    </section>
    </section>
    </section>
  </main>
  </>;
};

export default ProfileComponent;
