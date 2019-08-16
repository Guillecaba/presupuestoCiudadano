import React, { Component } from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import financiacion from "../../assets/images/financiacion.png";
import "./Financiacion.css"


const Financiacion = () => {
  return (
    <Container>
      <Row className="como">
        <Col md={6}>
          <img className = "w-50" src={financiacion} alt="" />
        </Col>
        <Col md={6} className='align-self-center'>
          <h1 className="text-uppercase como_title align-middle">¿Qué es el presupuesto y cómo se financia?</h1>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <p>El Presupuesto General de la Nación prevé la cantidad y el origen de los ingresos y determina el monto de los gastos autorizados y los mecanismos de financiamiento. Se elabora por programas y con técnicas adecuadas para la asignación de los recursos financieros del Estado.</p>
        </Col>
        <Col md={6}>
          <p>Según el Art. 5 de la Ley de Administración Financiera del Estado el presupuesto es el conjunto de normas, técnicas, métodos y procedimientos empleados y de organismos involucrados en el proceso presupuestario, en sus fases de programación, formulación, aprobación, ejecución, modificación, control y evaluación de los ingresos y egresos y su financiamiento.</p>
        </Col>
      </Row>

      
        <h1> Principios presupuestarios</h1>
        <p>La administración del presupuesto está sujeta a los siguientes principios (Art.6 - Ley 1535/99): </p>
        <Row>
        <Col md={3}><Card><Card.Img />
          <Card.Body>
            <Card.Title>
            Universalidad
            </Card.Title>
          </Card.Body>
        
          </Card></Col>
          <Col md={3}><Card><Card.Img />
          <Card.Body>
            <Card.Title>
            Legalidad
            </Card.Title>
          </Card.Body>
       
          </Card></Col>
          <Col md={2}><Card><Card.Img />
          <Card.Body>
            <Card.Title>
            Unidad
            </Card.Title>
          </Card.Body>
        
          </Card></Col>
          <Col md={2}><Card><Card.Img />
          <Card.Body>
            <Card.Title>
            Anualidad
            </Card.Title>
          </Card.Body>
       
          </Card></Col>
          <Col md={2}><Card><Card.Img />
          <Card.Body>
            <Card.Title>
            Equilibrio
            </Card.Title>
          </Card.Body>
       
          </Card></Col>
        
      </Row>
    </Container>
  );
};

export default Financiacion;
