import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import usaid_ceamso from "../../assets/images/usaid_ceamso.png";
import pfm_lac from "../../assets/images/PFM-LAC.png";
import logo_hacienda from "../../assets/images/logo_hacienda.png";
import banco from "../../assets/images/banco_mundial.jpg"
import "./Footer.css";

const footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="pt-5">
          <Col md={6}>
            <h3 className="font-weigth-bold text-uppercase footer__title mb-4">Links de Interés</h3>
            <p><a>Sobre el proyecto</a></p>
            <p><a>Ministerio de Hacienda - Datos abiertos</a></p>
            <p><a>Contrataciones Públicas - Datos abiertos</a></p>
            <p> <a>Secretaría de la Funcion Pública - Datos abiertos</a></p>
            <p><a>Qué Compramos</a></p>
            <p><a>Portal de Datos Abiertos Gubernamentales</a></p>
                
           
          </Col>
          <Col md={6}>
            <Row>
              <Col md={6}>
                <img
                  className="footer__img"
                  src={usaid_ceamso}
                  alt="usaid ceamso"
                />{" "}
              </Col>
              <Col md={4}>
                <img className="footer__img" src={pfm_lac} alt="pfm lac" />
              </Col>
              <Col md={4}>
                <img
                  className="footer__img"
                  src={logo_hacienda}
                  alt="logo hacienda"
                />
              </Col>
              <Col md={4}>
                <img
                  className="footer__img"
                  src={banco}
                  alt="banco"
                />
              </Col>

              <p className="footer_text pt-5">
                Este material es publicado gracias al apoyo de la Agencia de los
                Estados Unidos para el Desarrollo Internacional (USAID). El
                contenido del mismo es exclusiva responsabilidad de sus autores
                y no refleja necesariamente las opiniones o puntos de vista de
                USAID o el Gobierno de los Estados Unidos.
              </p>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default footer;
