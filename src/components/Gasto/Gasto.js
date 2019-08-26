import React , { Fragment , Component} from "react";
import { Container , Row, Col , Tab , Tabs } from "react-bootstrap";
import moneda from "../../assets/images/moneda-interna.png";
import hospitales from "../../assets/images/hospitales.png";
import billete_grafico from "../../assets/images/billete-grafico.png"
import {Doughnut} from 'react-chartjs-2';
import "./Gasto.css"


 const data = {
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
		],
		hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
		]
	}]
};

function randomColor(dato) {
  let index=0;
  for (let x in dato.datasets[0].data) {
    let color= "#" + Math.random().toString(16).slice(2, 8);
    dato.datasets[0].backgroundColor[index]=color;
    dato.datasets[0].hoverBackgroundColor[index]=color;
    index++;
  }
  return dato;
}



class Gasto extends Component {
  render() {
    return (
      <Fragment>
        <Container>
  
        <Row className="como mt-5">
          <Col md={6}>
            <img className = "w-50 como-img " src={moneda} alt="" />
          </Col>
          <Col md={6} className='align-self-center'>
            <h1 className="text-uppercase como_title align-middle">¿En que se gasta el presupuesto??</h1>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
              <p className="font-weight-bold">El Presupuesto General de la Nación contiene la previsión de los ingresos y la asignación de los gastos.<br/>
  Los gastos son los montos que el Estado calcula utilizar para:</p>
  <ul>
    <li className="lista-elemento" >Construir caminos, puentes, hospitales, escuelas,</li>
    <li className="lista-elemento">Brindar servicios de luz, apoyo a estudiantes a través de becas,</li>
    <li className="lista-elemento">Apoyar a programas de combate a la pobreza, asistencia a adultos mayores, asistencia a niños de la calle, asistencia a la población en casos de emergencia, etc.</li>
  </ul>
          </Col>
          <Col className="text-right " md={6}>
            <img className="w-50  " src={hospitales } alt="hospitales"></img>
  
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="text-center">
          <h1 className=" ">En el 2020 de cada 1 00.000 gs se gasto:</h1>
          <img className="w-50 pt-3" src={billete_grafico} alt="billete grafico"></img>
          </Col>
        </Row>
        <Row>
          <Col className="text-left" md={8}>
            <h1 >Funciones</h1>
            <p>Las actividades mencionadas, el Estado las realiza a fin de cumplir con las funciones de Salud, Educación, Seguridad Pública, establecidas en la Constitución Nacional.</p>
            <p className="font-weight-bold">¿Cómo se gasta nuestro presupuesto?</p>
            <p className="">El tamaño de los circulos dependen de del monto presupuestado por función.</p>
          </Col>
        </Row>
        <Row>
          <Col>
          <Tabs defaultActiveKey="todos" id="uncontrolled-tab-example">
    <Tab eventKey="todos" title="TODOS" >
      <h1>Todos</h1>
      <Doughnut data={data} />
    </Tab>
    <Tab eventKey="fuente" title="FUENTE DE FINANCIAMIENTO">
    <Row>
      <Col md={4}>
        <h2> Recursos del  Credito Publico</h2>
        <Doughnut data={data} />
      </Col>
      <Col md={4}>
        <h2>Recursos del Tesoro</h2>
        <Doughnut data={data} />
        </Col>
        <Col md={4}>
        <h2> Recursos Institucionales</h2>
   <Doughnut data={data} />
        </Col>
    </Row>
    </Tab>
    <Tab eventKey="grupo" title="GRUPO ECONOMICO"   >
    <h1>ola</h1>
    </Tab>
  </Tabs></Col>
        </Row>
        </Container>
  
      </Fragment>
    )
  }
  
}

export default Gasto;