import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import usaid from "../../assets/images/usaid.png";
import ceamso from "../../assets/images/ceamso.png"
import pfm_lac from "../../assets/images/PFM-LAC.png";
import logo_hacienda from "../../assets/images/hacienda-logo.png";
import banco from "../../assets/images/banco-mundial.png"
import "./Footer.css";

const footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="pt-5">
         {/*  <Col md={6}>
            <h3 className="font-weight-bold text-uppercase footer__title mb-4">Links de Interés</h3>
            <p className="footer-item-text"><a>Sobre el proyecto</a></p>
            <p className="footer-item-text"><a href="https://datos.hacienda.gov.py/" target="_blank" className="text-decoration-none text-reset">Ministerio de Hacienda - Datos abiertos</a></p>
            <p className="footer-item-text"><a href="https://www.contrataciones.gov.py/datos" target="_blank" class="text-decoration-none text-reset">Contrataciones Públicas - Datos abiertos</a></p>
            <p className="footer-item-text"> <a href="http://datos.sfp.gov.py/" target="_blank" class="text-decoration-none text-reset">Secretaría de la Funcion Pública - Datos abiertos</a></p>
            <p className="footer-item-text"><a href="http://www.quecompramos.gov.py/" target="_blank" class="text-decoration-none text-reset">Qué Compramos</a></p>
            <p className="footer-item-text"><a href="https://www.datos.gov.py/" target="_blank" class="text-decoration-none text-reset">Portal de Datos Abiertos Gubernamentales</a></p>
                
           
          </Col> */}
          <Col md={6}>
            <Row>
            <Col className="py-3" md={4} sm={4}>
            <a href = "https://www.hacienda.gov.py/web-hacienda/index.php" >
                <img 
                  className="footer__img"
                  src={logo_hacienda}
                  alt="hacienda"
                />
                </a>
            
                {/* <a  href="http://www.hacienda.gov.py">
                <img
                  className="footer__img_2"
                  src={logo_hacienda}
                  alt="logo hacienda"
                /></a> */}
              </Col>
              <Col className="py-3" md={4} sm={4}>
                <a href = "https://www.bancomundial.org/" >
                <img className = 'footer__img' src={ banco } alt='banco'></img>
                </a>
              
              </Col>
              <Col className="py-3" md={4}  sm={4}>
              <a href="https://www.usaid.gov/paraguay" >
               {/*  <a href="http://www.ceamso.org.py/" > */}
                <img
                  className="footer__img"
                  src={usaid}
                  alt="usaid ceamso"
                />
                </a>
                {" "}
              </Col>
             
                {" "}
              
              <Col className="py-3" md={4}  sm={4}>
                <img className="footer__img_2" src={pfm_lac} alt="pfm lac" />
              </Col>
              {/* <Col className="py-3" md={4}  sm={4}>
               
                </Col> */}
              <Col md={4}>
              <a href="http://www.ceamso.org.py/" >
                <img
                  className="footer__img"x
                  src={ceamso}
                  alt="ceamso"
                />
                </a>
              </Col>

              
             
              </Row>
            <Row>
              <Col md={6}>
              <p className="footer_text">  </p>
                </Col>
              
            </Row>
          </Col>
          <Col md={6}>
          <p className="footer_text  pl-3">
              El diseño e implementación del Presupuesto Ciudadano es parte de una asociación más amplia entre el Ministerio de Hacienda, el grupo del Banco Mundial y CEAMSO para fortalecer la diseminación de información sobre la participación pública en el proceso presupuestario. Esta iniciativa se basa en un piloto inicial lanzado en 2016 con el apoyo financiero de USAID. 
              </p>
            <p className="footer_text  pl-3">Este material es publicado gracias al apoyo de la Agencia de los Estados Unidos para el Desarrollo Internacional (USAID). El contenido del mismo es exclusiva responsabilidad de sus autores y no refleja necesariamente las opiniones o puntos de vista de USAID o el Gobierno de los Estados Unidos.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default footer;
