import React , { Component , Fragment } from 'react';
import { Row ,Col, Container,Card, Accordion, Button} from 'react-bootstrap';
import './Ejecucion.css';
import aprobacion from '../../assets/images/aprobacion.png';
import engranajes from "../../assets/images/engranajes.png";
import ley from "../../assets/images/ley.png";
import grafico from "../../assets/images/grafico.png"
import manos from "../../assets/images/manos.png";
import {Fade,LightSpeed ,Zoom} from 'react-reveal/';
import personitas from "../../assets/images/personitas-completo.png";
import  "./Ejecucion.css";
import downArrow from "../../assets/icons/down-arrow.svg";
import Informacion from '../Informacion/Informacion'

import bolsa from '../../assets/images/bolsa.png'

const Ejecucion = () => {
  return (
    <Fragment>
      <Container>
      <Row className="como mt-5">
        <Col md={6}>
          <img className = "w-75 como-img grow " src={aprobacion} alt="" />
        </Col>
        <Col md={6} className='align-self-center'>
        <Fade bottom>
          <h1 className="text-uppercase como_title align-middle">¿Cómo se ejecuta el presupuesto?</h1>
          </Fade>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md={7}>
        <Fade bottom>
            <p>A partir del 1 de enero hasta el 31 de diciembre de cada año, los Organismos y Entidades del Sector Público proceden a ejecutar el Presupuesto aprobado.
</p>
            <p>Es importante el conocimiento del proceso de ejecución presupuestaria del gasto, cuyo resguardo y cumplimiento está a cargo del Ministerio de Hacienda (Art. 29 de la Ley 1535/99) y que identifica los siguientes requisitos e instrumentos requeridos para poder garantizar el uso eficiente
de los recursos públicos.</p>
            <p>Apartir de la promulgación de la Ley Anual de Presupuesto de la Nación, se debe tener en consideración los siguientes instrumentos:
</p>
        </Fade>
        </Col>
        <Col className="text-right" md={5}>
        <Fade bottom>
          <img className="w-50 " src={engranajes} alt="engranajes"></img>
          </Fade>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col className= "text-left" md={5}>
        <Fade bottom>

<img className="w-75" src= {ley} alt="ley "></img>
        </Fade>
        </Col>
        <Col md={7}>
        <Fade bottom>
          <h2 className= "font-weight-bold">Decreto Reglamentario de la Ley que Aprueba el Presupuesto</h2>
          <p>La Ley anual que aprueba el PGN de cada ejercicio autoriza al poder Ejecutivo a Reglamentar la mencionada Ley a través de un Decreto.
</p>
          <p>Marca los límites dentro del cual se debe realizar el proceso de ejecución presupuestaria anual y es el instrumento legal en el cual el Ministerio de Hacienda establece las normas, formularios e instructivos requeridos para poder gastar bien y ejecutar los distintos rubros como sueldos, contratos, compra de insumos, construcciones, pago de jubilaciones y pensiones y entrega de transferencias a entidades sin fines de lucro y personas etc.</p>
          </Fade>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md={7}>
        <Fade bottom>
        <h2 className= "font-weight-bold">Programación Financiera</h2>
            <p>Es un instrumento de Gerencia Financiera a través del cual el Ministerio Hacienda estima a principio de año las posibilidades reales de financiamiento del presupuesto aprobado.

</p>
            <p>Las estimaciones incorporan los montos de dinero que se pretende recaudar en cada uno de los conceptos y el tiempo real en el que se recauda (estacionalidad) los ingresos, a fin de financiar el cumplimento de las actividades institucionales programadas.
</p>
            <p>
Constituye el instrumento técnico utilizado para la determinación de los topes o límites financieros a ser incorporados en el Plan Financiero.
</p>

        </Fade>
        </Col>
        <Col className="text-center" md={5}>
          <Fade bottom>

          <img className="w-75 " src={grafico} alt="grafica"></img>
          </Fade>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col className= "text-left" md={5}>
          <Fade bottom>

<img className="w-75" src= {bolsa} alt="bolsa"></img>
          </Fade>
        </Col>
        <Col md={7}>
          <Fade bottom>

          <h2 className= "font-weight-bold">Plan Financiero Institucional</h2>
          <p>Es un Instrumento técnico por el cual los Organismos y Entidades del sector público realizan la programación mensual del Presupuesto anual autorizado, en el mismo las instituciones prevén los meses en el que van a usar sus rubros para pagar las obligaciones contraídas con las personas y empresas seleccionadas en las contrataciones de bienes, servicios y obras requeridas para el cumplimiento de las actividades de los programas, en función a los objetivos generales de las instituciones.

</p>
          <p>El Plan Financiero es muy importante porque define el monto límite de dinero sobre los cuales las instituciones pueden contraer compromisos, es decir que en ningún caso las instituciones podrían comprometer un rubro cuyo monto sea superior al Plan Financiero aprobado. El Plan Financiero es aprobado por Decreto del Poder Ejecutivo.</p>
          </Fade>(
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md={7}>
          <Fade bottom>

        <h2 className= "font-weight-bold">Proceso de contratación</h2>
           
            <p>A partir de la aprobación del Plan Financiero las Unidades Operativas de Contrataciones de las instituciones pueden dar inicio a los procesos que permitan contratar los bienes, servicios y obras requeridas para el cumplimiento de sus actividades prioritarias, para ello elaboran su Plan Anual de Contrataciones y solicitan el Certificado de Disponibilidad Presupuestaria CDP que les permite reservar el rubro y monto a ser utilizado.

</p>
            <p>
Constituye el instrumento técnico utilizado para la determinación de los topes o límites financieros a ser incorporados en el Plan Financiero.
</p>
          </Fade>
        </Col>
        <Col className="text-right" md={5}>
          <Fade bottom>

          <img className="w-75 " src={manos} alt="manos"></img>
          </Fade>
        </Col>
      </Row>
      </Container>
      <Row className="programas-presu my-5 pb-3">
      <h1 className="text-center programa-presu-title pt-5 grow">OTROS INSTRUMENTOS</h1>
      <p className="text-center  programa-presu-subtitle grow">Además existen otros instrumentos:</p>
        <Container>
          <Col>
          <Accordion defaultActiveKey="0">
  <Card className="card-acordeon">
    <Accordion.Toggle className="acordeon-card-title font-weight-bold" as={Card.Header} eventKey="0">
    <img className="icono-flecha-abajo" src={downArrow} />
    Plan de Caja:
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body className='acordeon-card-text '>Instrumento financiero por medio del cual se proyectan las necesidades financieras de corto plazo y se
determinan los recursos que se asignan a cada Organismo del Sector Público para el cumplimiento de
sus funciones. Es elaborado en función al Plan Financiero anual aprobado.</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card className="card-acordeon">
    <Accordion.Toggle className="acordeon-card-title font-weight-bold" as={Card.Header} eventKey="1">
    <img className="icono-flecha-abajo" src={downArrow} />
    Registro de la Obligación: 
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body className="acordeon-card-text "> La Obligación constituye el Compromiso de pago originado en un vínculo jurídico financiero entre un Organismo o Entidad del Estado y una persona física o jurídica.</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card className="card-acordeon" >
    <Accordion.Toggle className="acordeon-card-title font-weight-bold" as={Card.Header} eventKey="2">
    <img className="icono-flecha-abajo" src={downArrow} />
    Solicitud de Transferencia de Recursos (STR):
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="2">
      <Card.Body className='acordeon-card-text '>Con posterioridad al registro de la Obligación, la institución procederá a la elaboración de la Solicitud de Transferencia de Recursos STR, el mismo constituye un documento a través del cual la institución solicita al Ministerio de Hacienda la Transferencia o traspaso de dinero de las cuentas administradas por el Tesoro Nacional en el Banco Central del Paraguay a las cuentas bancarias de los proveedores y así proceder a disponer de los fondos para pagar la obligación contraída.</Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card className="card-acordeon" >
    <Accordion.Toggle className="acordeon-card-title font-weight-bold" as={Card.Header} eventKey="3">
    <img className="icono-flecha-abajo" src={downArrow} />
    Pago de la Obligación:
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="3">
      <Card.Body className='acordeon-card-text '>Constituye la etapa en la cual se registran el cumplimiento parcial o total de las obligaciones contraídas. Con posterioridad al depósito de los recursos en la cuenta bancaria del proveedor el banco operante emite la nota de depósito que confirma el traspaso del Dinero a su cuenta, el proveedor emite el Recibo de Dinero que constituye el documento utilizado para registrar el Pago o cancelación de la obligación asumida por el ente público respectivo, derivando toda la documentación respaldatoria para elaborar los legajos de Rendición de cuenta respectiva.</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
          </Col>
        </Container>
    </Row>
    <Informacion />
    </Fragment>
  )
}

export default Ejecucion;