import React, { useState, Fragment } from "react";
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
import white from "../../assets/images/White.png";
import help from "../../assets/icons/question.svg"
import {Fade,LightSpeed} from 'react-reveal/';
import {
  Container,
  Col,
  Row,
  Button,
  Card,
  ListGroup,
  CardDeck,
  Tab,
  Carousel
} from "react-bootstrap";
import ods from "../../assets/images/rueda_home.png";
import agua_limpia from "../../assets/images/agua_limpia.png";
import salud_bienestar from "../../assets/images/salud_bienestar.png";
import educacion_calidad from "../../assets/images/educacion_calidad.png";
import industria_innovacion from "../../assets/images/industria_innovacion.png";
import ciudades_sostenibles from "../../assets/images/ciudades_sostenibles.png";
import { Link } from "react-router-dom";
import ciclo from "../../assets/images/ciclo.png";
import lineamientos from "../../assets/images/lineamientos.png";
import anteproyecto from "../../assets/images/ANTEPROYECTO.png";
import proyecto from "../../assets/images/proyecto.png";
import estudio from "../../assets/images/estudio.png";
import aprobacion from "../../assets/images/aprobacion.png";
import presidente from "../../assets/images/presidente.png";
import ejecucion from "../../assets/images/ejecucion.png";
import Zoom from 'react-reveal/Zoom';
//import { ciclo } from "../../assets/images/ciclo.png"
import "./Home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ show: !this.state.show });
  }
  render() {
    return (
      <div>
        <div className="banner">
          <Container>
            <Row>
              <Col md={6}>
              <Fade className="grow" left>
                <img
                  className="banner__img grow"
                  src={personitas}
                  alt="Personitas"
                />
                </Fade>
              </Col>
              <Col className="banner__text" md={6}>
                <h2 className="banner__text_title grow">
                  ¿Sabías que el Presupuesto General de Gastos de la Nación para
                  el año 2020 propone algunos cambios?{" "}
                </h2>
                <Button href={"/cambios"} className="button__primary grow">
                  Ver mas
                </Button>
              </Col>
            </Row>
          </Container>
        </div>

        <Container>
          <Row id="proceso">
            <Col>
            <LightSpeed right>
            <h1 className="como-se-elabora  text-center grow">
                  COMO SE ELABORA EL PRESUPUESTO?
                </h1>
                </LightSpeed>
              <Carousel interval="5000" className="">
                {/* <Carousel.Item>
                  <img
                    className="d-block w-25"
                    src={ciclo}
                    alt="CICLO PRESUPUESTARIO"
                  />
                  <Carousel.Caption>
                  
                    <h3 className="slide-title text-right">CICLO PRESUPUESTARIO</h3>
                    <p className="slide-text text-right">
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item> */}
                <Carousel.Item>
                  <img
                    className="d-block w-75"
                    src={white}
                    alt="Lineamientos"
                  />

                  <Carousel.Caption>
                    <Row>
                      <Col md={6}>
                      <Zoom left>
                        <img className=" w-100" src={ciclo} alt="C" />
                        </Zoom>
                      </Col>
                      <Col md={6} className="slide-text-side">
                        <h3 className="slide-title text-left">
                          CICLO PRESUPUESTARIO
                        </h3>
                        <p className="slide-text text-left">
                          A fin de que el Gobierno Nacional cada año pueda
                          conocer cuánto de los recursos programados va a
                          disponer para poder gastar y cumplir con sus fines, se
                          establece un ciclo presupuestario compuesto de las
                          siguientes etapas:
                        </p>
                      </Col>
                    </Row>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-75" src={white} alt="back" />

                  <Carousel.Caption>
                    <Row>
                      <Col md={6}>
                      <Zoom left>
                        <img
                          className=" w-100"
                          src={lineamientos}
                          alt="Lineamientos"
                        />
                        </Zoom>
                      </Col>
                      <Col md={6} className="slide-text-side">
                        <p className="slide-text text-left">ABRIL</p>
                        <h3 className="slide-title text-left">
                          LINEAMIENTOS PARA PROGRAMACIÓN
                        </h3>
                        <p className="slide-text text-left">
                          El Ministerio de Hacienda elabora un decreto donde se
                          estipulan los lineamientos para que las instituciones
                          realicen sus anteproyectos.
                        </p>
                      </Col>
                    </Row>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-75" src={white} alt="back" />

                  <Carousel.Caption>
                    <Row>
                      <Col md={6}>
                      <Zoom left>
                        <img
                          className=" w-100"
                          src={anteproyecto}
                          alt="anteproyecto"
                        />
                        </Zoom>
                      </Col>
                      <Col md={6} className="slide-text-side">
                        <p className="slide-text text-left">MAYO - JUNIO</p>
                        <h3 className="slide-title text-left">
                          ANTEPROYECTO DE PRESUPUESTO
                        </h3>
                        <p className="slide-text text-left">
                          Los organismos y entidades del sector público elaboran
                          sus anteproyectos de presupuestos donde calculan el
                          monto de dinero que se puede obtener y disponer y por
                          otro la asignación de los recursos hacia los
                          programas, proyectos y actividades prioritarias
                          teniendo en cuenta las necesidades más importantes.
                        </p>
                      </Col>
                    </Row>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-75" src={white} alt="back" />

                  <Carousel.Caption>
                    <Row>
                      <Col md={6}>
                      <Zoom left>
                        <img
                          className=" w-100"
                          src={proyecto}
                          alt="Lineamientos"
                        />
                        </Zoom>
                      </Col>
                      <Col md={6} className="slide-text-side">
                        <p className="slide-text text-left">JULIO - AGOSTO</p>
                        <h3 className="slide-title text-left">
                          PROYECTO DE PRESUPUESTO
                        </h3>
                        <p className="slide-text text-left">
                          El Ministerio de Hacienda analiza los anteproyectos
                          verificando que se cumplan los lineamientos, que la
                          estimación de los ingresos sea real y que la
                          asignación de los recursos hacia los programas,
                          proyectos y actividades sea consistente.
                        </p>
                      </Col>
                    </Row>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-75" src={white} alt="back" />

                  <Carousel.Caption>
                    <Row>
                      <Col md={6}>
                      <Zoom left>
                        <img
                          className=" w-100"
                          src={estudio}
                          alt="Lineamientos"
                        />
                        </Zoom>
                      </Col>
                      <Col md={6} className="slide-text-side">
                        <p className="slide-text text-left">
                          SEPTIEMBRE - DICIEMBRE
                        </p>
                        <h3 className="slide-title text-left">
                          ESTUDIO DEL PROYECTO
                        </h3>
                        <p className="slide-text text-left">
                          El Congreso Nacional, a través de una comisión
                          bicameral formada por diputados y senadores se encarga
                          de revisar y discutir el proyecto de ingresos y gastos
                          recibidos, incorpora cambios y modificaciones.
                        </p>
                      </Col>
                    </Row>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-75" src={white} alt="back" />

                  <Carousel.Caption>
                    <Row>
                      <Col md={6}>
                      <Zoom left>
                        <img
                          className=" w-100"
                          src={aprobacion}
                          alt="Lineamientos"
                        />
                        </Zoom>
                      </Col>
                      <Col md={6} className="slide-text-side">
                        <p className="slide-text text-left">
                          NOVIEMBRE - DICIEMBREE
                        </p>
                        <h3 className="slide-title text-left">
                          APROBACIÓN DEL PRESUPUESTO
                        </h3>
                        <p className="slide-text text-left">
                          Una vez acordadas las modificaciones y cambios se
                          procede a aprobar el presupuesto a través de una ley
                          de la Nación
                        </p>
                      </Col>
                    </Row>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-75" src={white} alt="back" />

                  <Carousel.Caption>
                    <Row>
                      <Col md={6}>
                      <Zoom left>
                        <img
                          className=" w-50"
                          src={presidente}
                          alt="Lineamientos"
                        />
                        </Zoom>
                      </Col>
                      <Col md={6} className="slide-text-side">
                        <p className="slide-text text-left">
                          21 DICIEMBRE — 31 DICIEMBRE{" "}
                        </p>
                        <h3 className="slide-title text-left">
                          PROMULGACIÓN DEL PRESUPUESTO
                        </h3>
                        <p className="slide-text text-left">
                          Dicha ley debe ser presentada al Poder Ejecutivo que
                          deberá refrendar y publicar la “Ley que aprueba el
                          Presupuesto General de la Nación”
                        </p>
                      </Col>
                    </Row>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-75" src={white} alt="back" />

                  <Carousel.Caption>
                    <Row>
                      <Col md={6}>
                      <Zoom left>
                        <img
                          className=" w-100"
                          src={ejecucion}
                          alt="Lineamientos"
                        />
                        </Zoom>
                      </Col>
                      <Col md={6} className="slide-text-side">
                        <p className="slide-text text-left">
                          ENERO A DICIEMBRE DEL SIGUENTE AÑO
                        </p>

                        <h3 className="slide-title text-left">
                          EJECUCIÓN DEL PRESUPUESTO
                        </h3>
                        <p className="slide-text text-left">
                          A partir del 1 de enero hasta el 31 de diciembre del
                          año siguiente, los Organismos y Entidades del Sector
                          Público proceden a ejecutar el Presupuesto aprobado.
                        </p>
                      </Col>
                    </Row>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
          </Container>
          <Row className="timeline">
            <Col>
              <div class="scrolling-wrapper-flexbox">
                <div class="tarjeta ">
                  <h2 className="tarjeta-title font-weight-bold">Abril</h2>
                  <p className="tarjeta-text">LINEAMIENTOS PARA PROGRAMACIÓN</p>
                </div>
                <div class="tarjeta">
                  <h2 className="tarjeta-title font-weight-bold">Mayo</h2>
                  <p className="tarjeta-text">ANTEPROYECTO DE PRESUPUESTO</p>
                </div>
                <div class="tarjeta">
                  <h2 className="tarjeta-title font-weight-bold">Junio</h2>
                  <p className="tarjeta-text">ANTEPROYECTO DE PRESUPUESTO</p>
                </div>
                <div class="tarjeta">
                  <h2 className="tarjeta-title font-weight-bold">Julio</h2>
                  <p className="tarjeta-text">PROYECTO DE PRESUPUESTO</p>{" "}
                </div>
                <div class="tarjeta">
                  <h2 className="tarjeta-title font-weight-bold">Agosto</h2>
                  <p className="tarjeta-text">PROYECTO DE PRESUPUESTO</p>{" "}
                </div>
                <div class="tarjeta">
                  <h2 className="tarjeta-title font-weight-bold">Septiembre</h2>
                  <p className="tarjeta-text">ESTUDIO DEL PROYECTO</p>
                </div>
                <div class="tarjeta">
                  <h2 className="tarjeta-title font-weight-bold">Octubre</h2>
                  <p className="tarjeta-text">ESTUDIO DEL PROYECTO</p>
                </div>
                <div class="tarjeta">
                  <h2 className="tarjeta-title font-weight-bold">Noviembre</h2>
                  <p className="tarjeta-text">ESTUDIO DEL PROYECTO</p>
                  <p className="tarjeta-text">APROBACIÓN DEL PRESUPUESTO</p>
                </div>
                <div class="tarjeta">
                  <h2 className="tarjeta-title font-weight-bold">Diciembre</h2>
                  <p className="tarjeta-text">ESTUDIO DEL PROYECTO</p>
                  <p className="tarjeta-text">APROBACIÓN DEL PRESUPUESTO</p>
                  <p className="tarjeta-text">PROMULGACIÓN DEL PRESUPUESTO</p>
                </div>
                <div class="tarjeta">
                  <h2 className="tarjeta-title font-weight-bold">
                    Enero a Diciembre{" "}
                  </h2>
                  <p className="tarjeta-text">EJECUCIÓN DEL PRESUPUESTO</p>
                </div>
              </div>
            </Col>
          </Row>
          <div className="presupuesto_total mb-5 py-5">
            <Container>
            <Row>
              <Col md={12}>
                <h1 onClick={this.handleClick} className="presupuesto_total__title text-center grow ">
                  PRESUPUESTO TOTAL 2020 <img className=" icon"  src={help}></img> 
          
        
                </h1>
                <h2 className="presupuesto_total__subtitle grow">
                  {" "}
                  Gs.80 billones{" "}
                </h2>
                <h2 className="presupuesto_total__subtitle_number text-center  mb-5 ">
                  {" "}
                  Gs. 80.071.848.962.361{" "}
                </h2>
              </Col>
            </Row>
            <Zoom left opposite when={this.state.show}>
            { this.state.show &&
            <Fragment>
            <h1  className="presupuesto_total__card__title_two text-center">
                
                  Entidades Centralizadas
                </h1>
                <h2 className="presupuesto_total__subtitle_two  mb-5 ">
                  Gs. 45.155.949.081.587 <br /> (Datos de 2019)
                </h2>
                <h1 className="presupuesto_total__card__title_two text-center">
                  
                  Entidades Descentralizadas:
                </h1>
                <h2 className="presupuesto_total__subtitle_two  mb-5 ">
                  Gs. 34.915.899.880.774 <br /> (Datos de 2019)
                </h2></Fragment>}
        </Zoom>
        
          
           {/*  <Row>
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
            </Row> */}

            <Row>
              <Col md={3}>
              <Zoom left>
        
                <Card className="card-ministerio">
                  <Card.Img className="w-25 align-self-center grow" src={escuela} />
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
                    <Button className="button__secundary align-self-center grow   mb-3">
                      Ver Mas
                    </Button>
                  </Link>
                </Card>
                
        </Zoom>
              </Col>
              <Col md={3}>
              <Zoom left>
                <Card className="card-ministerio">
                  <Card.Img className="w-25 align-self-center grow" src={cruz} />
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
                    <Button className="button__secundary align-self-center grow  mb-3">
                      Ver Mas
                    </Button>
                  </Link>
                </Card>
                </Zoom>
              </Col>
              <Col md={3}>
              <Zoom left>
                <Card className="card-ministerio">
                  <Card.Img className="w-25 align-self-center grow" src={casco} />
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
                    <Button className="button__secundary align-self-center grow  mb-3">
                      Ver Mas
                    </Button>
                  </Link>
                </Card>
                </Zoom>
              </Col>
              <Col md={3}>
              <Zoom left>
                <Card className="card-ministerio ">
                  <Card.Img className="w-25 align-self-center grow " src={casa} />
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
                    <Button className="button__secundary align-self-center grow  mb-3">
                      Ver Mas
                    </Button>
                  </Link>
                </Card>
                </Zoom>
              </Col>
            </Row>
            </Container>
          </div>

          {/* <div className="banner__preparar">
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
   */}
   <Container>
          <div className="banner__conoce pt-5">
            <h1 className="text-uppercase font-weight-bold text-center banner__conoce_title grow">
              conoce mas sobre <br /> el presupuesto general de <br /> la
              nacion:
            </h1>
            <Row>
              <Col md={3}>
              <Zoom left>
                <Card>
                  <Card.Img className="grow" variant="top" src={billete} />
                  <Card.Body>
                    <Card.Title className="card__title text-center">
                      ¿Qué es el presupuesto y cómo se financia?
                    </Card.Title>
                  </Card.Body>
                  <Link className="text-center" to={"/financiacion"}><Button className="button__primary align-self-center   grow mb-3">
                    Ver Mas
                  </Button></Link>
                </Card>
                </Zoom>
              </Col>
              <Col md={3}>
              <Zoom left>
                <Card>
                  <Card.Img className="grow " variant="top" src={moneda} />
                  <Card.Body>
                    <Card.Title className="card__title text-center">
                      ¿En qué se gasta el presupuesto?
                    </Card.Title>
                  </Card.Body>
                  <Button className="button__primary align-self-center  grow   mb-3">
                    Ver Mas
                  </Button>
                </Card>
                </Zoom>
              </Col>
              <Col md={3}>
              <Zoom left>
                <Card>
                  <Card.Img className="grow  " variant="top" src={ods} />
                  <Card.Body>
                    <Card.Title className="card__title text-center">
                      ¿El PGN está vinculado a los ODS?
                    </Card.Title>
                  </Card.Body>
                  <Link className="text-center" to={"/ods"}>
                    <Button className="button__primary align-self-center  grow   mb-3">
                      Ver Mas
                    </Button>
                  </Link>
                </Card>
                </Zoom>
              </Col>
              <Col md={3}>
              <Zoom left>
                <Card>
                  <Card.Img  className="grow " variant="top" src={lupa} />
                  <Card.Body>
                    <Card.Title className="card__title text-center">
                      ¿Cómo se ejecuta el presupuesto?
                    </Card.Title>
                  </Card.Body>
                  <Button className="button__primary align-self-center grow  mb-3">
                    Ver Mas
                  </Button>
                </Card>
                </Zoom>
              </Col>
            </Row>
          </div>
          {/*  <div>
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
   */}
          
        </Container>

        <div className="information py-5 ">
          <Container>
            <Row>
              <Col md={5}>
              <Fade left>
                <img className="w-100" src={personitas} alt="Personitas" />
                </Fade>
              </Col>
              <Col md={7}>
                <Fade right>
                <h1 className="text-uppercase font-weigth-bold information__title pb-3">
                  informate
                </h1>
                </Fade>
                <p className="informartion__subtitle">
                  Conocer el Presupuesto es esencial para conocer que usos se le
                  dan a tus impuestos, cuáles son las prioridades de las
                  instituciones públicas y cuánto se gasta en salud, educación,
                  obras, justicia y otros servicios que determinan tu calidad de
                  vida.
                </p>
                <Button className="button__secundary grow">Descarga la guia</Button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Home;
