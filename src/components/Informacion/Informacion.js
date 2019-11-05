import React from 'react';
import { Container , Row , Col , Button } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import informate from '../../assets/images/informate.png'
import guia from "../../assets/media/guia-presupuesto-ciudadano.pdf"
import "../Informacion/Informacion.css"
import '../Home/Home.css'

 const Informacion = () => {
   return (
    <div className="information py-5 ">
    <Container>
      <Row>
        <Col md={5}>
        <Fade bottom>
          <img className="w-75 d-block m-auto" src={informate} alt="informate" />
          </Fade>
        </Col>
        <Col md={7}>
          <Fade bottom>
          <h1 className="information__title text-uppercase">Links de Interés </h1>
          <p className="information__subtitle">Si quieres saber cómo se ejecuta el PGN: <a href="https://datos.hacienda.gov.py/" /* target="_blank" */ className="text-underline text-reset">Ministerio de Hacienda - Datos abiertos</a></p>
          <p className="information__subtitle">Información sobre contrataciones públicas: <a href="https://www.contrataciones.gov.py/datos" target="_blank" class="text-underline text-reset">Contrataciones Públicas - Datos abiertos</a></p>
          <p className="information__subtitle">Portal de datos abiertos gubernamentales del Paraguay: <a href="https://www.datos.gov.py/" target="_blank" class=" text-underline text-reset">Portal de Datos Abiertos Gubernamentales</a></p>
          
          
          </Fade>
          <Fade bottom>
          <p className="information__subtitle">
            Entender el Presupuesto es esencial conocer que usos se le
            dan a tus impuestos, cuáles son las prioridades de las
            instituciones públicas y cuánto se gasta en salud, educación,
            obras, justicia y otros servicios que determinan tu calidad de
            vida.
          </p>
          <Button href={guia} className="button__secondary grow mb-3">Descargá la guía</Button>
          
          
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