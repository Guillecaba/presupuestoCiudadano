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
            <h3 className="font-weight-bold text-uppercase footer__title mb-4">Links de Interés</h3>
            <p className="footer-item-text"><a>Sobre el proyecto</a></p>
            <p className="footer-item-text"><a href="https://datos.hacienda.gov.py/" target="_blank" className="text-decoration-none text-reset">Ministerio de Hacienda - Datos abiertos</a></p>
            <p className="footer-item-text"><a href="https://www.contrataciones.gov.py/datos" target="_blank" class="text-decoration-none text-reset">Contrataciones Públicas - Datos abiertos</a></p>
            <p className="footer-item-text"> <a href="http://datos.sfp.gov.py/" target="_blank" class="text-decoration-none text-reset">Secretaría de la Funcion Pública - Datos abiertos</a></p>
            <p className="footer-item-text"><a href="http://www.quecompramos.gov.py/" target="_blank" class="text-decoration-none text-reset">Qué Compramos</a></p>
            <p className="footer-item-text"><a href="https://www.datos.gov.py/" target="_blank" class="text-decoration-none text-reset">Portal de Datos Abiertos Gubernamentales</a></p>
                
           
          </Col>
          <Col md={6}>
            <Row>
              <Col md={6}  sm={3}>
                <a href="http://www.ceamso.org.py/" >
                <img
                  className="footer__img"
                  src={usaid_ceamso}
                  alt="usaid ceamso"
                />
                </a>
                {" "}
              </Col>
              <Col md={3}  sm={3}>
                <img className="footer__img_2" src={pfm_lac} alt="pfm lac" />
              </Col>
              <Col md={3} sm={3}>
                <a  href="http://www.hacienda.gov.py">
                <img
                  className="footer__img_2"
                  src={logo_hacienda}
                  alt="logo hacienda"
                /></a>
              </Col>
             {/*  <Col md={4}>
                <img
                  className="footer__img"
                  src={banco}
                  alt="banco"
                />
              </Col> */}

              <p className="footer_text pt-5 pl-3">
                Este material es publicado gracias al apoyo de la Agencia de los
                Estados Unidos para el Desarrollo Internacional (USAID). El
                contenido del mismo es exclusiva responsabilidad de sus autores
                y no refleja necesariamente las opiniones o puntos de vista de
                USAID o el Gobierno de los Estados Unidos.
              </p>
             
            </Row>
            <Row>
              <Col md={6}>
              <p className="footer_text"> Portal actualizado con el apoyo del Banco Mundial 2019   </p>
                </Col>
              <Col md={6}>
                <a href = "https://www.bancomundial.org/" >
                <img className = 'w-50' src={ banco } alt='banco'></img>
                </a>
              
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default footer;
