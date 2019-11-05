import React, { Component, Fragment } from "react";
import { Row, Col, Container, Card, Accordion, Button } from "react-bootstrap";
import financiacion from "../../assets/images/financiacion.png";
import "./Financiacion.css";
import universalidad from "../../assets/images/edificios.png";
import legalidad from "../../assets/images/legalidad.png";
import unidad from "../../assets/images/unidad.png";
import anualidad from "../../assets/images/anualidad.png";
import equilibrio from "../../assets/images/equilibrio.png";
import grafico from "../../assets/images/grafico.png";
import { Link } from "react-router-dom";
import flecha from "../../assets/images/flecha.png";
import downArrow from "../../assets/icons/down-arrow.svg";
import ventanilla from "../../assets/images/ventanilla.png";

import impuestos from "../../assets/images/impuestos-libro.png";
import dinero from "../../assets/images/dinero.png";
import essap from "../../assets/images/essap.png";
import personitas from "../../assets/images/personitas-completo.png";

import ConoceMas from '../ConoceMas/ConoceMas';
import Informacion from "../Informacion/Informacion";

import { Fade, LightSpeed, Zoom } from "react-reveal/";

const Financiacion = () => {
  return (
    <Fragment>
      <Container>
        <Row className="como mt-5">
          <Col md={6}>
            <Fade bottom>
              <img className="w-75 como-img " src={financiacion} alt="" />
            </Fade>
          </Col>
          <Col md={6} className="align-self-center">
            <Fade>
              <h1 className="text-uppercase como_title align-middle">
                ¿Qué es el presupuesto y cómo se financia?
              </h1>
            </Fade>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={6}>
            <p>
              El Presupuesto General de la Nación es la suma total de dinero que
              piensa gastar el estado Paraguayo para poder cumplir con sus
              funciones y objetivos prioritarios en un año determinado.
            </p>
            <p>
              El Presupuesto General de la Nación prevé la cantidad y el origen
              de los ingresos y determina el monto de los gastos autorizados y
              los mecanismos de financiamiento. Se elabora por programas y con
              técnicas adecuadas para la asignación de los recursos financieros
              del Estado.
            </p>
          </Col>
          <Col md={6}>
            <p>
              Según el Art. 5 de la Ley de Administración Financiera del Estado
              el presupuesto es el conjunto de normas, técnicas, métodos y
              procedimientos empleados y de organismos involucrados en el
              proceso presupuestario, en sus fases de programación, formulación,
              aprobación, ejecución, modificación, control y evaluación de los
              ingresos y egresos y su financiamiento.
            </p>
          </Col>
        </Row>

        <h1 className="text-center title-princi mt-5">
          {" "}
          Principios presupuestarios
        </h1>
        <p className="text-center">
          La administración del presupuesto está sujeta a los siguientes
          principios (Art.6 - Ley 1535/99):{" "}
        </p>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img className="card-img-1 m-auto" src={universalidad} />
              <Card.Body>
                <Card.Title className="text-center">Universalidad</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img className="card-img-1  m-auto" src={legalidad} />
              <Card.Body>
                <Card.Title className="text-center">Legalidad</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img className="card-img-1  m-auto" src={unidad} />
              <Card.Body>
                <Card.Title className="text-center">Unidad</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Img className="w-25 card-img-2  m-auto" src={anualidad} />
              <Card.Body>
                <Card.Title className="text-center">Anualidad</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Img className="w-25 card-img-2  m-auto" src={equilibrio} />
              <Card.Body>
                <Card.Title className="text-center">Equilibrio</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={8} className=" align-self-center">
            <h1>¿Qué es un programa?</h1>
            <p>
              Es el instrumento presupuestario destinado a cumplir las funciones
              del Estado y sus planes a corto plazo y por el cual se establecen
              objetivos, resultados y metas a cumplirse mediante un conjunto de
              acciones integradas y obras específicas coordinadas, empleando los
              recursos humanos, materiales y financieros asignados a un costo
              global y unitario. Su ejecución queda a cargo de una unidad
              administrativa. (Art.10– Ley 1535/99).
            </p>
          </Col>
          <Col md={4}>
            <img src={grafico} className="w-75"></img>
          </Col>
        </Row>
      </Container>
      <Row id="infoProgramas" className="programas-presu my-5 pb-3">
        <h1 className="text-center programa-presu-title pt-5">
          Programas del Presupuesto
        </h1>
        <p className="text-center px-4 p-lg-0  programa-presu-subtitle">
          El presupuesto tiene 3 clases de programas:
        </p>
        <Container>
          <Col>
            <Accordion defaultActiveKey="0">
              <Card className="card-acordeon">
                <Accordion.Toggle
                  className="acordeon-card-title font-weight-bold"
                  as={Card.Header}
                  eventKey="0"
                >
                  <img className="icono-flecha-abajo" src={downArrow} />
                  Programa Central
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body className="acordeon-card-text ">
                    <p>
                      Comprende las actividades orientadas a la gestión
                      institucional, es decir, aquellas de apoyo transversal
                      para todos los programas de la institución, y/o aquellas
                      misionales que tengan un resultado esperado pero que no
                      arrojen una producción final.
                    </p>
                    <p>
                      Puede tener proyectos de inversión siempre y cuando los
                      mismos sean destinados al fortalecimiento institucional y
                      no se vinculen a los resultados de los programas
                      presupuestarios sustantivos.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="card-acordeon">
                <Accordion.Toggle
                  className="acordeon-card-title font-weight-bold"
                  as={Card.Header}
                  eventKey="1"
                >
                  <img className="icono-flecha-abajo" src={downArrow} />
                  Programas Sustantivos
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body className="acordeon-card-text ">
                    Son los creados para solucionar problemas específicos en un
                    tiempo determinado, para generar resultados concretos y
                    medibles que le afecten a una población bien identificada.
                    Estos Programas generan productos. De un Programa
                    Sustantivo, pueden depender proyectos que contribuyan al
                    resultado que busca el Programa.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="card-acordeon">
                <Accordion.Toggle
                  className="acordeon-card-title font-weight-bold"
                  as={Card.Header}
                  eventKey="2"
                >
                  <img className="icono-flecha-abajo" src={downArrow} />
                  Partidas no asignables a programas
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body className="acordeon-card-text ">
                    Recogen todas las actividades que de alguna forma, el Estado
                    tiene que realizar o presupuestar, pero no expresan
                    Resultado, sino un compromiso contraído.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Container>
      </Row>
      <Container>
        <Row>
          <Col md={8}>
            <h1 className="text-left financiacion__fuente_title text-uppercase">EL PGN SE FINANCIA CON VARIAS FUENTES DE FINANCIAMIENTO.</h1>
            <p>
            Las Fuentes de Financiamiento constituyen un ordenamiento de los Recursos Financieros que se recaudan, en funcion al origen de donde provienenlos Ingresos; pudiendo provenir, entre otros, del pago de los Impuestos de las empresas y personas, los creditos obtenidos de Organismos Financieros Internacionales, los Bonos emitidos, asi como la venta de bienes o servicios de los entes públicos y las donaciones recibidas por el sector publico.
            </p>
            <p className="font-weight-bold fuente-clasi">
              Estas fuentes se clasifican en:
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Fade left>
              <Card className="card-ministerio">
                <Card.Img
                  className="w-50 align-self-center grow"
                  src={impuestos}
                />
                <Card.Body>
                  <Card.Title className="font-weight-bold text-center">
                    10 - Recursos del tesoro
                  </Card.Title>
                  <Card.Text className=" text-center">
                Recauda los ingresos generales del estado. Ejemplo: impuestos y
regalías (Itaipú y Yacyreta).
                  </Card.Text>
                </Card.Body>
              </Card>
            </Fade>
          </Col>
          <Col md={4}>
            <Fade left>
              <Card className="card-ministerio">
                <Card.Img
                  className="w-50 align-self-center grow"
                  src={dinero}
                />
                <Card.Body>
                  <Card.Title className="font-weight-bold text-center">
                    20 - Recursos del Crédito Público
                  </Card.Title>
                  <Card.Text className=" text-center">
                  Provenientes del endeudamiento público interno y externo, por
la colocación de títulos y valores o por los préstamos.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Fade>
          </Col>
          <Col md={4}>
            <Fade left>
              <Card className="card-ministerio">
                <Card.Img
                  className="w-50 align-self-center grow"
                  src={ventanilla}
                />
                <Card.Body>
                  <Card.Title className="font-weight-bold text-center">
                    30 - Recursos institucionales
                  </Card.Title>
                  <Card.Text className=" text-center">
                  Recauda cada Institución del Estado. Ejemplo: ventas de bienes y
servicios, rentas y otros.
Incluye además el dinero que reciben los Organismos y Entidades del Estado en concepto de
donaciones tanto internas, como externas.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Fade>
          </Col>
        </Row>
        <ConoceMas />
      </Container>
      <Informacion />
    </Fragment>
  );
};

export default Financiacion;
