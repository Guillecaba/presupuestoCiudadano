import React from "react";
import personitas from "../../assets/images/personitas-completo.png";
import familia from "../../assets/images/familia.png";
import hacienda from "../../assets/images/hacienda.png";
import palacio from "../../assets/images/palacio.png";
import secretarias from "../../assets/images/secretarias.png";
import presupuestoAprobado from "../../assets/images/presupuesto_aprobado.png";
import billete from "../../assets/images/billete.png";
import moneda from "../../assets/images/moneda.png";
import lapiz from "../../assets/images/lapiz.png";
import lupa from "../../assets/images/lupa.png";
import escuela from "../../assets/images/escuela.png";
import cruz from "../../assets/images/cruz.png";
import casco from "../../assets/images/casco.png";
import casa from "../../assets/images/casa.png";
import pdf from "../../assets/media/PropuestaTeoria.pdf";
import {
  Container,
  Col,
  Row,
  Button,
  Card,
  ListGroup,
  Tab
} from "react-bootstrap";
import ods from "../../assets/images/ods.png";
import agua_limpia from "../../assets/images/agua_limpia.png";
import salud_bienestar from "../../assets/images/salud_bienestar.png";
import educacion_calidad from "../../assets/images/educacion_calidad.png";
import industria_innovacion from "../../assets/images/industria_innovacion.png";
import ciudades_sostenibles from "../../assets/images/ciudades_sostenibles.png";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="banner">
        <Container>
          <Row>
            <Col md={6}>
              <img className="banner__img" src={personitas} alt="Personitas" />
            </Col>
            <Col className="banner__text" md={6}>
              <h1 className="banner__text_title">
                ¿Sabías que el Presupuesto General de Gastos de la Nación para
                el año 2020 propone algunos cambios?{" "}
              </h1>
              <Button href={pdf} className="button__primary">
                Ver más
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <div className="banner__preparar">
          <Row className="familia">
            <Col className="familia__text" md={6}>
              <h1 className="familia__text_title">
                Así como una familia debe <br />{" "}
                <span className="familia_text_title_span">
                  {" "}
                  preparar un presupuesto
                </span>{" "}
                para llegar a fin de mes...
              </h1>
            </Col>
            <Col md={6}>
              <img className="familia__img" src={familia} alt="familia" />
            </Col>
          </Row>
        </div>

        <div className="banner__elabora">
          <h1 className="banner__elabora_title">
            el Gobierno elabora el <br />{" "}
            <span className="banner__elabora_title_span">
              presupuesto general de la nación{" "}
            </span>{" "}
            <br />
            para cada año.
          </h1>
          <Row>
            <Col md={4}>
              <img className="card__img" src={hacienda} alt="hacienda" />{" "}
            </Col>
            <Col md={4}>
              <img className="card__img" src={palacio} alt="palacio" />
            </Col>
            <Col md={4}>
              <img className="card__img" src={secretarias} alt="secretarias" />
            </Col>
          </Row>
        </div>
        <div className="banner__cumplir">
          <Row>
            <Col md={6}>
              <img
                className="banner__cumplir__img"
                src={presupuestoAprobado}
                alt="presupuesto aprobado"
              />
            </Col>
            <Col className="banner__cumplir_text" md={6}>
              <p className="banner__cumplir_text_title">
                En el presupuesto se estiman los ingresos y los gastos
                prioritarios{" "}
                <span className="font-weight-bold text-uppercase">
                  {" "}
                  para cumplir las funciones del GOBIERNO
                </span>
              </p>
            </Col>
          </Row>
        </div>

        <div className="banner__conoce">
          <h1 className="text-uppercase font-weight-bold text-center banner__conoce_title">
            conocé más sobre <br /> el presupuesto general de <br /> la nación:
          </h1>
          <Row>
            <Col md={3}>
              <Card>
                <Card.Img variant="top" src={billete} />
                <Card.Body>
                  <Card.Title className="card__title text-center">
                    ¿Qué es el presupuesto y cómo se financia?
                  </Card.Title>
                </Card.Body>
                <Button className="button__primary align-self-center  w-50 mb-3">
                  Ver Más
                </Button>
              </Card>
            </Col>
            <Col md={3}>
              <Card>
                <Card.Img variant="top" src={moneda} />
                <Card.Body>
                  <Card.Title className="card__title text-center">
                    ¿En qué se gasta el presupuesto?
                  </Card.Title>
                </Card.Body>
                <Button className="button__primary align-self-center  w-50 mb-3">
                  Ver Más
                </Button>
              </Card>
            </Col>
            <Col md={3}>
              <Card>
                <Card.Img variant="top" src={lapiz} />
                <Card.Body>
                  <Card.Title className="card__title text-center">
                    ¿Cómo se elabora el presupuesto?
                  </Card.Title>
                </Card.Body>
                <Button className="button__primary align-self-center  w-50 mb-3">
                  Ver Más
                </Button>
              </Card>
            </Col>
            <Col md={3}>
              <Card>
                <Card.Img variant="top" src={lupa} />
                <Card.Body>
                  <Card.Title className="card__title text-center">
                    ¿Cómo se ejecuta el presupuesto?
                  </Card.Title>
                </Card.Body>
                <Button className="button__primary align-self-center  w-50 mb-3">
                  Ver Más
                </Button>
              </Card>
            </Col>
          </Row>
        </div>
        <div>
          <h1 className="text-uppercase font-weight-bold text-center banner__conoce_title">
            ¿El PGN está vinculado a los ODS?
          </h1>
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
                  <ListGroup.Item className="item_ods " href="#link1">
                    Prioridades del Gobierno
                  </ListGroup.Item>
                  <ListGroup.Item className="item_ods" href="#link2">
                    Salud de calidad al alcance de la gente
                  </ListGroup.Item>
                  <ListGroup.Item className="item_ods" href="#link3">
                    Educación para la Gente
                  </ListGroup.Item>
                  <ListGroup.Item className="item_ods" href="#link4">
                    Conectividad Internacional
                  </ListGroup.Item>
                  <ListGroup.Item className="item_ods" href="#link5">
                    Solución de las condiciones de vida de la población en
                    términos de infraestructura vial y vivienda
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col sm={8}>
                <Tab.Content>
                  <Tab.Pane eventKey="#link1">
                    <h2 className="text-center mb-5 text-uppercase font-weight-bold text-center banner__conoce_title">ODS</h2>
                    <Row>
                      <Col md={12} className="d-flex justify-content-center">
                        <img src={ods} alt="ods" />
                      </Col>
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link2">
                    <h2 className="text-center mb-5 text-uppercase font-weight-bold text-center banner__conoce_title">MSPBS</h2>
                    <Row>
                      <Col md={6} className="d-flex justify-content-center">
                        <img src={salud_bienestar} alt="salud bienestar" />
                      </Col>
                      <Col col={6} className="d-flex justify-content-center">
                        <img src={agua_limpia} alt="agua limpia" />
                      </Col>
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link3">
                    <h2 className="text-center mb-5 text-uppercase font-weight-bold text-center banner__conoce_title">MEC</h2>
                    <Row>
                      <Col md={12} className="d-flex justify-content-center">
                        <img
                          src={educacion_calidad}
                          alt="educacion de calidad"
                        />
                      </Col>
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link4">
                    <h2 className="text-center mb-5 text-uppercase font-weight-bold text-center banner__conoce_title">MOPC</h2>
                    <Row>
                      <Col md={6} className="d-flex justify-content-center">
                        <img src={industria_innovacion} alt="ods" />
                      </Col>
                      <Col md={6} className="d-flex justify-content-center">
                        <img src={agua_limpia} alt="ods" />
                      </Col>
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link5">
                    <h2 className="text-center mb-5 text-uppercase font-weight-bold text-center banner__conoce_title">MUVH</h2>
                    <Row>
                      <Col md={12} className="d-flex justify-content-center">
                        <img src={ciudades_sostenibles} alt="ods" />
                      </Col>
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>

        <div className="presupuesto_total mb-5">
          <Row>
            <Col md={12}>
              <h1 className="presupuesto_total__title text-center">
                PRESUPUESTO TOTAL 2020
              </h1>
              <h2 className="presupuesto_total__subtitle "> Gs.80 billones </h2>
              <h2 className="presupuesto_total__subtitle_number text-center  mb-5 ">
                {" "}
                Gs. 80.071.848.962.361{" "}
              </h2>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <h1 className="presupuesto_total__card__title_two text-center">
                {" "}
                Entidades Centralizadas
              </h1>
              <h2 className="presupuesto_total__subtitle_two  mb-5 ">
                Gs. 45.155.949.081.587 <br /> (Datos de 2019)
              </h2>
            </Col>
            <Col md={6}>
              <h1 className="presupuesto_total__card__title_two text-center">
                {" "}
                Entidades Descentralizadas:
              </h1>
              <h2 className="presupuesto_total__subtitle_two  mb-5 ">
                Gs. 34.915.899.880.774 <br /> (Datos de 2019)
              </h2>
            </Col>
          </Row>

          <Row>
            <Col md={3}>
              <Card>
                <Card.Img className="w-50 align-self-center" src={escuela} />
                <Card.Body>
                  <Card.Title className="presupuesto_total__card_title text-center">
                    Ministerio de Educación y Ciencias
                  </Card.Title>
                  <Card.Text className="presupuesto_total__card_monto_primary text-center">
                    Gs. 6,562 billones
                  </Card.Text>
                  <Card.Text className="presupuesto_total__card_monto_secondary text-center">
                    Gs. 6.562.729.598.658
                  </Card.Text>
                </Card.Body>
                <Link className="text-center" to={"/educacion"}>
                  <Button className="button__secundary align-self-center  w-50 mb-3">
                    Ver Más
                  </Button>
                </Link>
              </Card>
            </Col>
            <Col md={3}>
              <Card>
                <Card.Img className="w-50 align-self-center" src={cruz} />
                <Card.Body>
                  <Card.Title className="presupuesto_total__card_title text-center">
                    Ministerio de Salud y Bienestar social
                  </Card.Title>
                  <Card.Text className="presupuesto_total__card_monto_primary  text-center">
                    Gs. 5,518 billones
                  </Card.Text>
                  <Card.Text className="presupuesto_total__card_monto_secondary  text-center">
                    Gs. 5.518.667.479.787
                  </Card.Text>
                </Card.Body>
                <Link className="text-center" to={"/educacion"}>
                  <Button className="button__secundary align-self-center  w-50 mb-3">
                    Ver Más
                  </Button>
                </Link>
              </Card>
            </Col>
            <Col md={3}>
              <Card>
                <Card.Img className="w-50 align-self-center" src={casco} />
                <Card.Body>
                  <Card.Title className="presupuesto_total__card_title text-center">
                    Ministerio de Obras Públicas y Comunicaciones
                  </Card.Title>

                  <Card.Text className="presupuesto_total__card_monto_primary text-center">
                    Gs. 8,041 billones
                  </Card.Text>
                  <Card.Text className="presupuesto_total__card_monto_secondary text-center">
                    Gs. 8.041.969.626.615
                  </Card.Text>
                </Card.Body>
                <Link className="text-center" to={"/educacion"}>
                  <Button className="button__secundary align-self-center  w-50 mb-3">
                    Ver Más
                  </Button>
                </Link>
              </Card>
            </Col>
            <Col md={3}>
              <Card>
                <Card.Img className="w-50 align-self-center" src={casa} />
                <Card.Body>
                  <Card.Title className="presupuesto_total__card_title text-center">
                    Ministerio de Urbanismo, Vivienda y Hábitat
                  </Card.Title>
                  <Card.Text className="presupuesto_total__card_monto_primary text-center">
                    Gs. 0.612 billones{" "}
                  </Card.Text>
                  <Card.Text className="presupuesto_total__card_monto_secondary text-center">
                    Gs. 612.908.572.547
                  </Card.Text>
                </Card.Body>
                <Link className="text-center" to={"/educacion"}>
                  <Button className="button__secundary align-self-center  w-50 mb-3">
                    Ver Más
                  </Button>
                </Link>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>

      <div className="information py-5 ">
        <Container>
          <Row>
            <Col md={5}>
              <img className="w-100" src={personitas} alt="Personitas" />
            </Col>
            <Col md={7}>
              <h2 className="text-uppercase font-weigth-bold information__title">
                informate
              </h2>
              <p className="informartion__subtitle">
                Conocer el Presupuesto es esencial para conocer que usos se le
                dan a tus impuestos, cuáles son las prioridades de las
                instituciones públicas y cuánto se gasta en salud, educación,
                obras, justicia y otros servicios que determinan tu calidad de
                vida.
              </p>
              <Button className="button__secundary">Descargá la guía</Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
