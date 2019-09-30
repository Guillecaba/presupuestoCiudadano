import React from 'react';
import { Container , Row , Col , Button } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import personitas from "../../assets/images/personitas-completo.png";
import guia from "../../assets/media/guia-presupuesto-ciudadano.pdf"

import '../Home/Home.css'

 const Informacion = () => {
   return (
    <div className="information py-5 ">
    <Container>
      <Row>
        <Col md={5}>
        <Fade bottom>
          <img className="w-100" src={personitas} alt="Personitas" />
          </Fade>
        </Col>
        <Col md={7}>
          <Fade bottom>
          <h1 className="text-uppercase font-weigth-bold information__title pb-3">
            informáte
          </h1>
          </Fade>
          <Fade bottom>
          <p className="informartion__subtitle">
            Conocer el Presupuesto es esencial para conocer que usos se le
            dan a tus impuestos, cuáles son las prioridades de las
            instituciones públicas y cuánto se gasta en salud, educación,
            obras, justicia y otros servicios que determinan tu calidad de
            vida.
          </p>
          <Button href={guia} className="button__secundary grow">Descargá la guía</Button>
          </Fade>
          
          
        </Col>
      </Row>
      <Row>
        
      </Row>
    </Container>
  </div>
   )
 }

 export default Informacion;