import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Cambios.css";
import palacio from "../../assets/images/palacio.png";
import presupuestoAprobado from "../../assets/images/presu.png";
import moneda from "../../assets/images/moneda.png";
import legis from "../../assets/images/legis.png";

const Cambios = () => {
  return (
    <Container>
      <Row className="cambios_banner mt-5 p-5">
        <Col>
          <h1 className="text-center cambios_banner_title ">
            Cambios del presupuesto 2020
          </h1>
        </Col>
      </Row>
      <Row>
        <Col md={9} className="py-5 d-flex align-items-center">
          <p className="">
            El Ministerio de Hacienda en su carácter de Administrador del
            Proceso Presupuestario del Sector Público y fundamentalmente en el
            interés de fortalecer la implementación del Presupuesto por
            Resultados (PpR) en el marco de la Gestión pública por Resultados
            (GpR), estableció que para la Programación Presupuestaria del
            Ejercicio Fiscal 2020, los Organismos y Entidades del Estado (OEE)
            deberán utilizar las orientaciones metodológicas relacionadas a una
            nueva Estructura Presupuestaria
          </p>
        </Col>
        <Col md={3} className="py-5">
          <img
            src={palacio}
            className="cambios_banner_img w-100 "
            alt="palacio"
          />
        </Col>
      </Row>

      <Row className="clasif pt-5 pl-5  mb-5">
        <Col md={6} className="d-flex flex-column justify-content-center">
          <h2 clasName="clasi-item-title text-weigth-bold">
            {" "}
            Clasificacion Programatica{" "}
          </h2>
          <ul className="py-1 pl-2 clasi-list">
            <li className="clasi-item-1 py-1">Programa</li>
            <li className="clasi-item-2 py-1">Proyecto</li>
            <li className="clasi-item-2 py-1">Actividad</li>
            <li className="clasi-item-3 py-1">Obra</li>
          </ul>
        </Col>
        <Col md={6} className="d-flex  justify-content-center">
          <img
            src={presupuestoAprobado}
            className="w-75"
            alt="presupuesto aprobado"
          />
        </Col>
      </Row>

      <Row className="clasif pt-5 pl-5">
        <Col md={5} className="d-flex justify-content-center">
          <img src={moneda} className="w-75" alt="moneda" />
        </Col>
        <Col md={7} className=" pr-5  program-column ">
          <h2 className="text-weigth-bold program-title">
            {" "}
            Programacion del Gasto{" "}
          </h2>
          <ul className=" clasi-list align-self-center">
            <li className="text-right">Programa Central</li>
            <li className="text-right"> Programa Sustantivo</li>
            <li className="text-right">Programa de Partidas no asignables</li>
          </ul>
        </Col>
      </Row>
      <Row className="pb-5 mb-5 d-flex">
        <Col md={5} className="">
          <div className="h-100">
          <Row className="">
            <Col className="">
            <h3 className="versus-anho text-center  ">2019</h3>
            </Col>
          </Row>
          <Row className="h-100">
            <Col className="h-100 versus-columna pt-5 px-5 ">

              <h3>Programa Tipo 1.</h3>
              <p>Presupuestos de programas de administracion.</p>
              <h3>Programa Tipo 2.</h3>
              <p>Presupuestos de programas de accion.</p>
              <h3>Programa Tipo 3.</h3>
              <p>Presupuestos de programas de inversión.</p>
              <h3>Programa Tipo 4.</h3>
              <p>Presupuestos de programas de la deuda pública.</p>
            </Col>
          </Row>
          </div>
        </Col>
        
        <Col md={2} className="align-self-center text-center">
          <div className="central">
          <img src={legis} className="w-100" alt="" />
          <p className="text-center">Decreto de Lineamiento Nº 1710/19</p>
          <button className="boton-descarga  ">Descargar aquí</button>
          </div>
        </Col>
        <Col md={5}  className="">
          <div className="h-100">
          <Row>
            <Col>
              <h3 className="versus-anho text-center">2020</h3>
            </Col>
          </Row>
          <Row className="h-100">
            <Col className="versus-columna pt-5 px-5 h-100">
              <h3>Programa Central</h3>
              <p>
                Recoge todas las actividades que respondan a la Misión
                Institucional y al Fortalecimiento Institucional
                (administrativo), de un programa Central, pueden depender
                proyectos que contribuyan a la misión o mal fortalecimiento de
                la entidad.
              </p>
              <h3>Programas Sustantivos</h3>
              <p>
                Son los creados para solucionar problemas específicos en un
                tiempo determinado, para generar Resultados concretos y medibles
                que le afecten una población bien identificada. Estos Programas
                generan Producto. De un Programa Sustantivo, pueden depender
                Proyectos que contribuyan al resultado que busca el Programa.
              </p>
              <h3>Programas de Partidas no Asignables</h3>
              <p>
                Recogen todas las actividades que de alguna forma, el Estado
                tiene que realizar o presupuestar, pero no expresan Resultado,
                sino un compromiso contraído.
              </p>
            </Col>
          </Row>
          </div>
        </Col>
        
      </Row>
      
    </Container>
  );
};

export default Cambios;
