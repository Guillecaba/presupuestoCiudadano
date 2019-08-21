import React from "react";
import { Container, Tab, Col, Row ,ListGroup} from "react-bootstrap";
import ods from "../../assets/images/rueda-ods.png";
import agua_limpia from "../../assets/images/agua_limpia.png";
import salud_bienestar from "../../assets/images/salud_bienestar.png";
import educacion_calidad from "../../assets/images/educacion_calidad.png";
import industria_innovacion from "../../assets/images/industria_innovacion.png";
import ciudades_sostenibles from "../../assets/images/ciudades_sostenibles.png";
import "./Ods.css";

const Ods = () => {
  return (
    <Container>
      <Row className="ods-banner my-5 ">
        <Col md={6}>
          <img className="w-100 ods-banner-img" src={ods} alt="" />
        </Col>
        <Col md={6} className="align-self-center">
          <h1 className="text-uppercase ods-banner-title align-middle">
            ¿El PGN está vinculado a los ODS?
          </h1>
        </Col>
      </Row>
      <Row />
      <div className="mt-5">
          
          <p className="text-center">
            El PGN 2020 se ha construido en base a las 10 prioridades del
            Gobierno Nacional, las cuales se alinean directamente a los
            esfuerzos para cumplimiento de los Objetivos de Desarrollo
            Sostenible (ODS) establecidos en la Agenda 2030.
          </p>
          <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
            <Row>
              <Col sm={4}>
                <ListGroup>
                  
                  <ListGroup.Item className="item_ods" href="#link1">
                    Salud de calidad al alcance de la gente
                  </ListGroup.Item>
                  <ListGroup.Item className="item_ods" href="#link2">
                    Educación para la Gente
                  </ListGroup.Item>
                  <ListGroup.Item className="item_ods" href="#link3">
                    Conectividad Internacional
                  </ListGroup.Item>
                  <ListGroup.Item className="item_ods" href="#link4">
                    Solución de las condiciones de vida de la población en
                    términos de infraestructura vial y vivienda
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col sm={8}>
                <Tab.Content>
                  
                  <Tab.Pane eventKey="#link1">
                    <h2 className="text-center mb-5 text-uppercase font-weight-bold text-center banner__conoce_title">MSPBS</h2>
                    <Row>
                      <Col md={6} className="d-flex justify-content-center">
                        <img className="w-75" src={salud_bienestar} alt="salud bienestar" />
                      </Col>
                      <Col col={6} className="d-flex justify-content-center">
                        <img className="w-75" src={agua_limpia} alt="agua limpia" />
                      </Col>
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link2">
                    <h2 className="text-center mb-5 text-uppercase font-weight-bold text-center banner__conoce_title">MEC</h2>
                    <Row>
                      <Col md={6} className="d-flex justify-content-center">
                        <img className="w-75"
                          src={educacion_calidad}
                          alt="educacion de calidad"
                        />
                      </Col>
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link3">
                    <h2 className="text-center mb-5 text-uppercase font-weight-bold text-center banner__conoce_title">MOPC</h2>
                    <Row>
                      <Col md={6} className="d-flex justify-content-center">
                        <img className="w-75" src={industria_innovacion} alt="ods" />
                      </Col>
                      <Col md={6} className="d-flex justify-content-center">
                        <img className="w-75" src={agua_limpia} alt="ods" />
                      </Col>
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link4">
                    <h2 className="text-center mb-5 text-uppercase font-weight-bold text-center banner__conoce_title">MUVH</h2>
                    <Row>
                      <Col md={6} className="d-flex justify-content-center">
                        <img className="w-75" src={ciudades_sostenibles} alt="ods" />
                      </Col>
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>

   
      </Container>

  );
};

export default Ods;
