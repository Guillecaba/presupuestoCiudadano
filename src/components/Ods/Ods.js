import React, { Fragment } from "react";
import { Container, Col, Row } from "react-bootstrap";
import ods from "../../assets/images/rueda-ods.png";

import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import GrillaOds from "./GrillaOds/GrillaOds";
import GrillaOds2 from "./GrillaOds/GrillaOds2"
import ods_impacto from "../../assets/images/ods_impacto.png";
import Informacion from '../Informacion/Informacion';
import ConoceMas from '../ConoceMas/ConoceMas';
import "./Ods.css";

const Ods = () => {
  return (
    <Fragment>
    <Container>
      <Row className="ods-banner my-5 ">
        <Col md={6}>
          <Zoom left>
            <img className="w-100 ods-banner-img mb-5" src={ods} alt="" />
          </Zoom>
        </Col>
        <Col md={6} className="align-self-center">
          <Fade right>
            <h1 className="text-uppercase ods-banner-title align-middle">
              ¿El PGN esta vinculado a los ODS?
            </h1>
          </Fade>
        </Col>
      </Row>

      <p className="text-center">
        El nuevo proceso de diseño de los programas presupuestarios incorpora el
        esquema de Desarrollo Sostenible de la Agenda 2030 de las Naciones
        Unidas.
      </p>
      <Row>
        <Col md={6}> <h2 className="text-center font-weight-bold pb-2">
        42% distribuidos en <br></br> estos ODS
      </h2> <GrillaOds /></Col>
        <Col md={6}>
        <h2 className="text-center font-weight-bold pb-2">
        58% distribuidos en <br></br> estos ODS
        
      </h2>
      <GrillaOds2 />
        </Col>
      </Row>

     

     {/*  <GrillaOds /> */}

      {/* <h2 className="text-center font-weight-bold pb-2">
        Priorizando
      </h2> */}

     {/*  <img className="img-ods-impacto m-auto d-block" src= {ods_impacto} alt=""></img> */}

      <Row className="pt-4">
        <Col md={6}>
          <p className="text-justify">El 100 % de los programas del PGN 2020 se vinculan a los ODS, distribuyéndose en un 58% en los ODS 1, 3, 4, 8 y 16, mientras que el 42% restante responde a los demás objetivos.  </p>
          <p className="text-justify">Esta es una aproximación en términos monetarios, de la inversión realizada por el Estado Paraguayo a través del PGN y los programas que lo integran, hacia el cumplimiento de los ODS, que a su vez, se enmarcan en el Plan Nacional de Desarrollo-Paraguay 2030, logrando así una alineación completa de la planificación con el presupuesto.</p>

        </Col>
        <Col md={6}>
          <p className="text-justify">Con esta metodología podemos valorar el destino y utilización de cada guaraní en base a las decisiones de priorización existentes a nivel nacional, así como los compromisos asumidos por el Estado a nivel internacional, basado en datos reales.</p>
        </Col>
      </Row>

      
      <ConoceMas />
    </Container>
    <Informacion />
    </Fragment>
  );
};

export default Ods;
