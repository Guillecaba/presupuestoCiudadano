import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Cambios.css";
import palacio from "../../assets/images/palacio.png";
import presupuestoAprobado from "../../assets/images/presu.png";
import moneda from "../../assets/images/moneda.png";
import legis from "../../assets/images/legis.png";
import LightSpeed from "react-reveal/LightSpeed";
import Fade from "react-reveal/Fade";
import pdf from "../../assets/media/decreto.pdf";
import Arrow from "../../assets/images/Arrow.png";
import Informacion from "../Informacion/Informacion";

const Cambios = () => {
  return (
    <Fragment>
      <Container>
        <Row className="cambios_banner mt-5 p-5">
          <Col>
            <Fade>
              <h1 className="text-center cambios_banner_title ">
                Cambios del presupuesto 2020
              </h1>
            </Fade>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="d-flex  justify-content-center">
            <img
              src={palacio}
              className="cambios_banner_img grow align-self-center img-palacio"
              alt="palacio"
            />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="pb-5 d-flex align-items-center">
            <p className="text-center font-weight-bold">
              El Ministerio de Hacienda en su carácter de Administrador del
              proceso Presupuestario del Sector Público para el ejercicio 2020
              incorpora importantes modificaciones en la forma de elaborar el
              Anteproyecto, en ese contexto y en el marco de la Gestión por
              Resultados, plantea la elaboración del presupuesto basado en una
              estructura adaptada al Presupuesto por resultados (PpR) . Esta
              nueva metodología permitirá garantizar el aumento del valor que
              las Instituciones Públicas aportan a la ciudadanía por medio de
              las mejoras de sus Productos y Servicios que prestan, a fin de
              mejorar las condiciones de vida de la población.
            </p>
          </Col>
          {/* <Col md={3} className="py-5">
          
        </Col> */}
        </Row>
      </Container>
      <Row className="clasif pt-5 pl-5  ">
        <Container id="def-proyecto-acti" className="d-lg-flex">
          <Col md={7} className="d-flex flex-column justify-content-center">
            <h2 className="font-weight-bold clasi_item_title ">
              Clasificación Programática
            </h2>
            <ul className="py-1 pl-2 clasi-list">
              <li className="clasi-item-1 pt-1 font-weight-bold">Programa</li>
              <li className="clasi-item-2 pt-1 ">
                <p className="font-weight-bold">Proyecto :</p>
                <p className="text-justify">
                  Conjunto de actividades y/u obras con periodo definido de
                  ejecución para mejorar la provisión de los bienes y servicios
                  en el cumplimiento de un resultado.{" "}
                </p>{" "}
              </li>
              <li className="clasi-item-2 pt-1">
                <p className="font-weight-bold">Actividad:</p>
                <p className="text-justify">
                  Es el conjunto de acciones de mínimo nivel que se llevan a
                  cabo para cumplir las metas de un programa, que consiste en la
                  ejecución de ciertos procesos o tareas mediante la utilización
                  de los recursos humanos, materiales, técnicos, y financieros
                  asignados a la actividad con un costo determinado.{" "}
                </p>{" "}
              </li>
              {/* <li className="clasi-item-3 pt-1">Obra</li> */}
            </ul>
          </Col>

          <Col md={5} className="d-flex  justify-content-center">
            <img
              src={presupuestoAprobado}
              className="w-75  grow"
              alt="presupuesto aprobado"
            />
          </Col>
        </Container>
      </Row>

      <Row className="clasif-2 pt-5 pl-5  ">
        <Container className="d-lg-flex ">
          <Col md={5} className="d-flex justify-content-center">
            <img src={moneda} className="w-75  grow" alt="moneda" />
          </Col>
          <Col md={7} className=" pr-5  program-column ">
            <h2 className=" program-title font-weight-bold">
              Programación del Gasto
            </h2>
            <ul className=" clasi-list align-self-center">
              <li className="text-right program-item pt-1">Programa Central</li>
              <li className="text-right program-item  pt-1">
                {" "}
                Programa Sustantivo
              </li>
              <li className="text-right program-item  pt-1">
                Programa de Partidas no asignables
              </li>
            </ul>
          </Col>
        </Container>
      </Row>
      <Container>
        <Row className="pt-5 borde-rojo ">
          <Col
            md={12}
            className="align-self-center text-center d-flex flex-row justify-content-center "
          >
            <div className="d-flex flex-row">
              <img src={legis} className=" px-3 grow" alt="" />
              <div className="d-flex flex-column align-self-center pl-md-4">
                <p className="text-center pt-1 font-weight-bold">
                  Decreto de Lineamiento <br /> Nº 1710/19
                </p>
                <button className=" button__primary boton-descarga  grow  ">
                  <a className="text-decoration-none color_a" href={pdf}>
                    Descargar aqui
                  </a>
                </button>
              </div>
            </div>
          </Col>
        </Row>
        <h2 className="cambios__title text-center text-uppercase  py-5">
          {" "}
          PRINCIPALES CAMBIOS EN LA ESTRUCTURA PRESUPUESTARIA 2020{" "}
        </h2>
        <Row className="pb-5 mb-5 d-flex">
          <Col md={4} className="">
            <div className="h-100">
              <Row className="">
                <Col className="">
                  <h1 className="versus-anho text-center  grow  ">201 9</h1>
                </Col>
              </Row>
              <Row className="h-100">
                <Col className="h-100 versus-columna pt-5 px-5 ">
                  <h3 className="">Programa Tipo 1.</h3>
                  <p>Presupuestos de programas de administración.</p>
                  <h3>Programa Tipo 2.</h3>
                  <p>Presupuestos de programas de acción.</p>
                  <h3>Programa Tipo 3.</h3>
                  <p>Presupuestos de programas de inversión.</p>
                  <h3>Programa Tipo 4.</h3>
                  <p>
                    Presupuestos de programas del servicio de la deuda pública.
                  </p>
                </Col>
              </Row>
            </div>
          </Col>

          <Col md={4} className="align-self-center text-center">
            <div className="central">
              <img src={Arrow} className=" rotate grow" alt="" />
              {/* <p className="text-center pt-1 font-weight-bold">Decreto de Lineamiento <br/> Nº 1710/19</p>
          <button className=" button__primary boton-descarga  grow  " ><a className="text-decoration-none color_a" href={pdf}>Descargar aqui</a></button> */}
            </div>
          </Col>
          <Col md={4} className="">
            <div className="h-100">
              <Row>
                <Col>
                  <h1 className="versus-anho text-center  grow">2020</h1>
                </Col>
              </Row>
              <Row className="h-100">
                <Col className="versus-columna pt-5 px-5 h-100">
                  <h3>Programa Central</h3>
                  <p>
                    Recoge todas las actividades que respondan a la Misión
                    Institucional y al Fortalecimiento Institucional
                    (administrativo), de un programa Central, pueden depender
                    proyectos que contribuyan a la misión o mal fortalecimiento
                    de la entidad.
                  </p>
                  <h3>Programas Sustantivos</h3>
                  <p>
                    Son los creados para solucionar problemas específicos en un
                    tiempo determinado, para generar Resultados concretos y
                    medibles que le afecten una población bien identificada.
                    Estos Programas generan Producto. De un Programa Sustantivo,
                    pueden depender Proyectos que contribuyan al resultado que
                    busca el Programa.
                  </p>
                  <h3>Programas de Partidas no Asignables</h3>
                  <p>
                    Recogen todas las actividades que de alguna forma, el Estado
                    tiene que realizar o presupuestar, pero no expresan
                    Resultado, sino un compromiso contraído.
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <Informacion />
    </Fragment>
  );
};

export default Cambios;
