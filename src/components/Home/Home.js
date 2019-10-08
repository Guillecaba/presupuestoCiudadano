import React, { Fragment } from "react";

import CountUp from 'react-countup';

import personitas from "../../assets/images/personitas-completo.png";
import billete from "../../assets/images/billete.png";
import moneda from "../../assets/images/moneda.png";
import lineamientos from "../../assets/images/lineamientos.png";
import lupa from "../../assets/images/lupa.png";
import anteproyecto from "../../assets/images/ANTEPROYECTO.png";
import lupaTimeline from '../../assets/images/lupa_timeline.png';

import moneda_blanca from "../../assets/images/moneda-blanca.png";
import escuela from "../../assets/images/escuela.png";
import cruz from "../../assets/images/cruz.png";
import casco from "../../assets/images/casco.png";
import casa from "../../assets/images/casa.png";
import white from "../../assets/images/White.png";

import desarrollo from "../../assets/images/desarrollo.png";
import construccion from "../../assets/images/construccion.png";
import BannerMinisterios from "../bannerMinisterios/bannerMinisterios";

import Fade from "react-reveal/Fade";
import { Container, Col, Row, Button, Card, Carousel } from "react-bootstrap";
import ods from "../../assets/images/rueda_color_resize.png";

import { Link } from "react-router-dom";
import ciclo from "../../assets/images/ciclo.png";

import proyecto from "../../assets/images/proyecto.png";
import estudio from "../../assets/images/estudio.png";
import aprobacion from "../../assets/images/aprobacion.png";
import presidente from "../../assets/images/presidente.png";
import ejecucion from "../../assets/images/ejecucion.png";

import "./Home.css";
import Informacion from "../Informacion/Informacion";

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
              <Col className="banner__text" md={6}>
                <p className="banner__text_title_bold grow">
                  El Presupuesto Ciudadano es una buena práctica que promueve el
                  Gobierno, para explicar a los ciudadanos de manera sencilla la
                  información clave del Presupuesto General de la Nación.
                </p>

                <p className="banner__text_title_normal grow">
                  El Presupuesto Ciudadano posibilita que las personas ejerzan
                  su derecho de saber cómo se invierten sus recursos, incluyendo
                  a quienes no están familiarizados con las finanzas públicas.
                </p>
              </Col>
              <Col md={6} className="mb-3">
                <Fade className="grow" bottom>
                  <img
                    className="banner__img d-block m-auto grow"
                    src={personitas}
                    alt="Personitas"
                  />
                  <p className="banner__text_title_normal font-weight-bold text-center grow">
                    ¿Sabías que el Presupuesto General de Gastos de la Nación
                    para el año 2020 propone algunos cambios?{" "}
                  </p>
                  <Link
                    className="text-center text-decoration-none"
                    to={"/cambios"}
                  >
                    <Button className="button__primary  d-block m-auto grow">
                      Ver más
                    </Button>
                  </Link>
                </Fade>
              </Col>
            </Row>
          </Container>
        </div>

        <Container>
          <Row id="proceso">
            <Col>
              <Fade>
                <h1 className="como-se-elabora  text-center grow">
                  ¿CÓMO SE ELABORA EL PRESUPUESTO?
                </h1>
              </Fade>
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
                        <Fade>
                          <img className=" w-100" src={ciclo} alt="C" />
                        </Fade>
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
                        <Fade>
                          <img
                            className=" w-100"
                            src={lineamientos}
                            alt="Lineamientos"
                          />
                        </Fade>
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
                        <Fade>
                          <img
                            className=" w-100"
                            src={anteproyecto}
                            alt="anteproyecto"
                          />
                        </Fade>
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
                        <Fade>
                          <img
                            className=" w-100"
                            src={proyecto}
                            alt="Lineamientos"
                          />
                        </Fade>
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
                        <Fade>
                          <img
                            className=" w-100"
                            src={estudio}
                            alt="Lineamientos"
                          />
                        </Fade>
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
                        <Fade>
                          <img
                            className=" w-100"
                            src={aprobacion}
                            alt="Lineamientos"
                          />
                        </Fade>
                      </Col>
                      <Col md={6} className="slide-text-side">
                        <p className="slide-text text-left">
                          NOVIEMBRE - DICIEMBRE
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
                        <Fade>
                          <img
                            className=" w-50"
                            src={presidente}
                            alt="Lineamientos"
                          />
                        </Fade>
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
                        <Fade>
                          <img
                            className=" w-100"
                            src={ejecucion}
                            alt="Lineamientos"
                          />
                        </Fade>
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
                          año siguiente, los organismos y Entidades del Sector
                          Público proceden a ejecutar el Presupuesto aprobado.
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
                        <Fade>
                          <img
                            className=" w-100"
                            src={lupaTimeline}
                            alt="Lineamientos"
                          />
                        </Fade>
                      </Col>
                      <Col md={6} className="slide-text-side">
                        <p className="slide-text text-left">
                          ENERO A DICIEMBRE DEL SIGUENTE AÑO
                        </p>

                        <h3 className="slide-title text-left">
                          Control y evaluación 
                        </h3>
                        <p className="slide-text text-left">
                         Consiste  en comparar  el comportamiento de los montos y de los servicios planificados y ejecutados.
                        </p>
                        <p className="slide-text text-left">
                         Se miden los resultados que se obtienen de cada uno de los programas se verifican  los objetivos y metas previstos y se emiten juicios sobre su desarrollo.
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
                <p className="tarjeta-text">CONTROL Y EJECUCIÓN </p>
              </div>
            </div>
          </Col>
        </Row>
        <div className="banner_presupuesto_total py-5">
          <Container>
            <Row>
              <Col md={7} className="d-flex align-items-center">
                <Row>
                  <Col className="d-flex align-items-center py-5 py-md-0" md={4}>
                    <img
                      src={moneda_blanca}
                      className="w-50 d-block m-auto "
                      alt="monedaBlanca"
                    ></img>
                  </Col>
                  <Col md={8} >
                    <h1
                      onClick={this.handleClick}
                      className="banner_presupuesto_total__title text-left  grow "
                    >
                      PRESUPUESTO TOTAL 2020{" "}
                      {/* <img className=" icon"  src={help}></img> */}
                    </h1>
                    {/* <h2 className="banner_presupuesto_total__subtitle text-left grow">
                      {" "}
                      Gs.85 billones{" "}
                    </h2> */}
                    <CountUp className="d-block banner_presupuesto_total__subtitle text-left grow"
                    duration={7.25}
                    prefix="Gs. "
                    suffix=" billones"
                     end={85} />

<CountUp className=" d-block banner_presupuesto_total__subtitle text-left grow"
                    duration={7.25}
                    prefix="Gs. "
                    separator="."
                    suffix=""
                     end={85539568662797} />
                   {/*  <h2 className="banner_presupuesto_total__subtitle_number text-left   ">
                      {" "}
                      Gs. 85.539.568.662.797{" "}
                    </h2> */}
                  </Col>
                </Row>
              </Col>
              <Col className="py-md-5" md={5}>
                <Row>
                  <Col md={4} className="d-flex align-items-center">
                    <img
                      src={moneda_blanca}
                      className="w-50 d-block m-auto py-5 py-md-0"
                      alt="monedaBlanca"
                    ></img>
                  </Col>
                  <Col md={8}>
                    <h1 className="banner_presupuesto_total__title2 text-left">
                      Organismos <br></br> de la Administración Central
                    </h1>
                    {/* <h2 className="banner_presupuesto_total__subtitle text-left  ">
                      Gs. 45.934.977.875.335 <br />
                    </h2> */}
                    <CountUp className=" d-block banner_presupuesto_total__subtitle text-left grow"
                    duration={7.25}
                    prefix="Gs. "
                    separator="."
                    suffix=""
                     end={45934977875335} />
                  </Col>
                </Row>
                <Row>
                  <Col  className=" d-flex align-items-center" md={4}>
                    <img
                      src={moneda_blanca}
                      className="w-50 d-block m-auto py-5 py-md-0"
                      alt="monedaBlanca"
                    ></img>
                  </Col>
                  <Col md={8}>
                    
                    <h1 className="banner_presupuesto_total__title2 text-left">
                      Entidades <br />
                      Descentralizadas
                    </h1>
                    <CountUp className=" d-block banner_presupuesto_total__subtitle text-left grow"
                    duration={7.25}
                    prefix="Gs. "
                    separator="."
                    suffix=""
                     end={39604590787444} />
                    
                  
                    
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>

        {/* <div className="presupuesto_total  py-5">
            <Container>
            <Row>
              <Col md={12}>
                <h1 onClick={this.handleClick} className="presupuesto_total__title text-center grow ">
                  PRESUPUESTO TOTAL 2020
          
        
                </h1>
                <h2 className="presupuesto_total__subtitle grow">
                 
                  Gs.85 billones
                </h2>
                <h2 className="presupuesto_total__subtitle_number text-center  mb-5 ">
                  
                  Gs.  85.539.568.662.797
                </h2>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
              <Fragment>
            <h1  className="presupuesto_total__card__title_two text-center">
                
            Entidades <br></br> de la Administración Central 
                </h1>
                <h2 className="presupuesto_total__subtitle_two  mb-4 ">
                  Gs. 45.934.977.875.335 <br /> 
                 
                </h2>
                </Fragment>
              </Col>
              <Col md={6}>
                <Fragment>
                <h1 className="presupuesto_total__card__title_two text-center">
                  
                  Entidades <br />Descentralizadas
                </h1>
                <h2 className="presupuesto_total__subtitle_two  mb-4 ">
                  Gs. 39.604.590.787.444 <br /> 
                </h2>
                </Fragment>
              </Col>
            </Row>
            </Container>
            </div> */}
        <BannerMinisterios />
        <Container>
          <div className="banner__conoce pt-4">
            <h1 className="text-uppercase font-weight-bold text-center banner__conoce_title grow">
              conocé mas sobre <br /> el presupuesto general de <br /> la
              nación:
            </h1>
            <Row>
              <Col md={3}>
                <Fade>
                  <Card>
                    <Card.Img className="grow" variant="top" src={billete} />
                    <Card.Body>
                      <Card.Title className="card__title text-center">
                        ¿Qué es el presupuesto y cómo se financia?
                      </Card.Title>
                    </Card.Body>
                    <Link className="text-center" to={"/financiacion"}>
                      <Button className="button__primary align-self-center   grow mb-3">
                        Ver más
                      </Button>
                    </Link>
                  </Card>
                </Fade>
              </Col>
              <Col md={3}>
                <Fade>
                  <Card>
                    <Card.Img className="grow " variant="top" src={moneda} />
                    <Card.Body>
                      <Card.Title className="card__title text-center">
                        ¿En qué se gasta el presupuesto?
                      </Card.Title>
                    </Card.Body>
                    <Link className="text-center" to={"/gasto"}>
                      <Button className="button__primary align-self-center  grow   mb-3">
                        Ver más
                      </Button>
                    </Link>
                  </Card>
                </Fade>
              </Col>
              <Col md={3}>
                <Fade>
                  <Card>
                    <Card.Img className="gro img-ods   " src={ods} />
                    <Card.Body>
                      <Card.Title className="card__title text-center">
                        ¿El PGN está vinculado a los ODS?
                      </Card.Title>
                    </Card.Body>
                    <Link className="text-center" to={"/ods"}>
                      <Button className="button__primary align-self-center  grow   mb-3">
                        Ver más
                      </Button>
                    </Link>
                  </Card>
                </Fade>
              </Col>
              <Col md={3}>
                <Fade>
                  <Card>
                    <Card.Img className="grow " variant="top" src={lupa} />
                    <Card.Body>
                      <Card.Title className="card__title text-center">
                        ¿Cómo se ejecuta el presupuesto?
                      </Card.Title>
                    </Card.Body>
                    <Link className="text-center" to={"/ejecucion"}>
                      <Button className="button__primary align-self-center grow  mb-3">
                        Ver más
                      </Button>
                    </Link>
                  </Card>
                </Fade>
              </Col>
            </Row>
          </div>
        </Container>
        <Informacion />
      </div>
    );
  }
}

export default Home;
