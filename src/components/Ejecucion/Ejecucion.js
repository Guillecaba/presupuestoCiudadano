import React , { Component , Fragment } from 'react';
import { Row ,Col, Container } from 'react-bootstrap';
import './Ejecucion.css';
import aprobacion from '../../assets/images/aprobacion.png';
import engranajes from "../../assets/images/engranajes.png";
import ley from "../../assets/images/ley.png";
import grafico from "../../assets/images/grafico.png"

import bolsa from '../../assets/images/bolsa.png'

const Ejecucion = () => {
  return (
    <Fragment>
      <Container>
      <Row className="como mt-5">
        <Col md={6}>
          <img className = "w-75 como-img " src={aprobacion} alt="" />
        </Col>
        <Col md={6} className='align-self-center'>
          <h1 className="text-uppercase como_title align-middle">¿Como se ejecuta el presupuesto?</h1>
        </Col>
      </Row>
      <Row>
        <Col md={7}>
            <p>A partir del 1 de enero hasta el 31 de diciembre del año siguiente, los Organismos y Entidades del Sector Público proceden a ejecutar el Presupuesto aprobado.
</p>
            <p>Es importante el conocimiento del proceso de ejecución presupuestaria del gasto, cuyo resguardo y cumplimiento está a cargo del Ministerio de Hacienda (Art. 29 de la Ley 1535/99) y que identifica los siguientes requisitos e instrumentos requeridos para poder gastar bien.</p>
            <p>Apartir de la promulgación de la Ley Anual de Presupuesto de la Nación, se debe tener en consideración los siguientes instrumentos:
</p>
        </Col>
        <Col className="text-center" md={5}>
          <img className="w-50 " src={engranajes} alt="engranajes"></img>
        </Col>
      </Row>
      <Row>
        <Col className= "text-center" md={5}>
<img className="w-75" src= {ley} alt="ley "></img>
        </Col>
        <Col md={7}>
          <h2 className= "font-weight-bold">Decreto Reglamentario de la Ley que Aprueba el Presupuesto</h2>
          <p>La Ley anual que aprueba el PGN de cada ejercicio autoriza al poder Ejecutivo a Reglamentar la mencionada Ley (Para el ejercicio 2016 Decreto N° 4774/16).
</p>
          <p>Marca los límites dentro del cual se debe realizar el proceso de ejecución presupuestaria anual y es el instrumento legal en el cual el Ministerio de Hacienda establece las normas, formularios e instructivos requeridos para poder gastar bien y ejecutar los distintos rubros como sueldos, contratos, compra de insumos, construcciones, pago de jubilaciones y pensiones y entrega de transferencias a entidades sin fines de lucro y personas etc.</p>
        </Col>
      </Row>
      <Row>
        <Col md={7}>
        <h2 className= "font-weight-bold">Programación Financiera</h2>
            <p>Es un instrumento de Gerencia Financiera a través del cual el Ministerio Hacienda estima a principio de año las posibilidades reales de financiamiento del presupuesto aprobado.
.
</p>
            <p>Las estimaciones incorporan los montos de dinero que se pretende recaudar en cada uno de los conceptos y el tiempo real en el que se recauda (estacionalidad) los ingresos, a fin de financiar el cumplimento de las actividades institucionales programadas.
</p>
            <p>
Constituye el instrumento técnico utilizado para la determinación de los topes o límites financieros a ser incorporados en el Plan Financiero.
</p>
        </Col>
        <Col className="text-center" md={5}>
          <img className="w-75 " src={grafico} alt="grafica"></img>
        </Col>
      </Row>
      <Row>
        <Col className= "text-center" md={5}>
<img className="w-75" src= {bolsa} alt="bolsa"></img>
        </Col>
        <Col md={7}>
          <h2 className= "font-weight-bold">Plan Financiero Institucional</h2>
          <p>Es un documento técnico por el cual los Organismos y Entidades del sector público realizan la programación mensual del Presupuesto anual autorizado, en el mismo las instituciones prevén los meses en el que van a usar sus rubros para pagar las obligaciones contraídas con las personas y empresas seleccionadas en las contrataciones de bienes, servicios y obras requeridas para el cumplimiento de las actividades de los programas, en función a los objetivos generales de las instituciones.

</p>
          <p>El Plan Financiero es muy importante porque define el monto límite de dinero sobre los cuales las instituciones pueden contraer compromisos, es decir que en ningún caso las instituciones podrían comprometer un rubro cuyo monto sea superior al Plan Financiero aprobado. El Plan Financiero es aprobado por Decreto del Poder Ejecutivo (para el ejercicio 2016 el PF fue aprobado por el Decreto N° 4931/16)</p>
        </Col>
      </Row>
      <Row>
        <Col md={7}>
        <h2 className= "font-weight-bold">Programación Financiera</h2>
            <p>Es un instrumento de Gerencia Financiera a través del cual el Ministerio Hacienda estima a principio de año las posibilidades reales de financiamiento del presupuesto aprobado.
.
</p>
            <p>Las estimaciones incorporan los montos de dinero que se pretende recaudar en cada uno de los conceptos y el tiempo real en el que se recauda (estacionalidad) los ingresos, a fin de financiar el cumplimento de las actividades institucionales programadas.
</p>
            <p>
Constituye el instrumento técnico utilizado para la determinación de los topes o límites financieros a ser incorporados en el Plan Financiero.
</p>
        </Col>
        <Col className="text-center" md={5}>
          <img className="w-75 " src={grafico} alt="grafica"></img>
        </Col>
      </Row>
      </Container>
    </Fragment>
  )
}

export default Ejecucion;