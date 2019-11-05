import React , { Fragment , Component} from "react";
import guia from "../../assets/media/guia-presupuesto-ciudadano.pdf"
import personitas from "../../assets/images/personitas-completo.png";
import { Container , Row, Col , Tab , Tabs, Button } from "react-bootstrap";
import moneda from "../../assets/images/moneda-interna.png";
import hospitales from "../../assets/images/hospitales.png";
import billete_grafico from "../../assets/images/billete-grafico.png"
import ContainerDimensions from "react-container-dimensions";
import {Doughnut} from 'react-chartjs-2';
import {Fade,LightSpeed} from 'react-reveal/';
import Informacion from '../Informacion/Informacion';
import ConoceMas from '../ConoceMas/ConoceMas';
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
          <Col className="pl-5" md={6}>
              <p className="font-weight-bold">Todos los ingresos recaudados por el sector público, son utilizados para cubrir los gastos prioritarios
definidos por el PGN y que permiten a las distintas entidades cumplir con sus funciones destinadas a:</p>
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
        <Row className="my-5">
          <Col className="text-center">
          <h1 className=" ">En el 2020 de cada G. 100.000  se asignará :</h1>
          <img className="billete pt-3" src={billete_grafico} alt="billete grafico"></img>
          </Col>
        </Row>
       
      {/*   <Row>
          <Col className="text-left" md={8}>
            <h1 >Funciones</h1>
            <p>Las actividades mencionadas, el Estado las realiza a fin de cumplir con las funciones de Salud, Educación, Seguridad Pública, establecidas en la Constitución Nacional.</p>
            <p className="font-weight-bold">¿Cómo se gasta nuestro presupuesto? (Datos de 2015)</p>
            <p className="">El tamaño de los circulos dependen de del monto presupuestado por función.</p>
          </Col>
        </Row>
        <Row>
          <Col>
          <Tabs defaultActiveKey="todos" id="uncontrolled-tab-example">
    <Tab eventKey="todos" title="TODOS" >
      
      <ContainerDimensions>
                    {({ width, height }) => (
      <Doughnut data={data} width={width}  height="400"/>
      )}
                  </ContainerDimensions>
    </Tab>
    <Tab eventKey="fuente" title="FUENTE DE FINANCIAMIENTO">
    <Row>
      <Col md={4}>
        <h4> Recursos del  Credito Publico</h4>
        <Doughnut data={data} />
      </Col>
      <Col md={4}>
        <h4>Recursos del Tesoro</h4>
        <Doughnut data={data} />
        </Col>
        <Col md={4}>
        <h4> Recursos Institucionales</h4>
   <Doughnut data={data} width="" />
        </Col>
    </Row>
    </Tab>
    <Tab eventKey="grupo" title="GRUPO ECONOMICO"   >
    <Row>
      <Col md={4}>
        <h5> 300 GASTOS DE <br /> FINANCIAMIENTO</h5>
        <Doughnut data={data} />
      </Col>
      <Col md={4}>
        <h5>200 GASTOS DE <br />  CAPITAL</h5>
        <Doughnut data={data} />
        </Col>
        <Col md={4}>
        <h5> 100 GASTOS <br />  CORRIENTES</h5>
   <Doughnut data={data} width="" />
        </Col>
    </Row>
    </Tab>
  </Tabs></Col>
        </Row> */}
        <ConoceMas />
        </Container>
        <Informacion />
  
      </Fragment>
    )
  }
  
}

export default Gasto;