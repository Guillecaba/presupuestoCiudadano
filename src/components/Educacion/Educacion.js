import React, { Component } from "react";
import escuela from "../../assets/images/escuela.png";
import { Row, Col, Container, InputGroup, FormControl,Table } from "react-bootstrap";
import { Doughnut } from "react-chartjs-2";
import TreeMap from "react-d3-treemap";
import "react-d3-treemap/dist/react.d3.treemap.css";
import dataTree from "../../assets/data/data";
import { render } from "react-dom";
import { sortableContainer, sortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";
import './Educacion.css'
import ContainerDimensions from 'react-container-dimensions';
const data = {
  labels: ["Misional", "Administrativo","Proyecto","Sustantivo", "No asignables"],
  datasets: [
    {
      data: [  5387709245284 , 844972495318,  7840145062 ,   322207712994 , 0],
      backgroundColor: ["#55A3EB", "#0AFC5D", "##E16163", "#FAFF0E",'blue'],
      hoverBackgroundColor: ["#55A3EB", "#0AFC5D", "##E16163", "#FAFF0E",'blue']
    }
  ]
};
const SortableItem = sortableElement(({ value }) => <li className='item'>{value}</li>);

const SortableContainer = sortableContainer(({ children }) => {
  return <ul>{children}</ul>;
});

class Educacion extends Component {
  state = {

    data : "null",        
    items: [
      "Educación inicial (per-jardín y jardín) con Becas, Complemento Nutricional, Canasta Básica de Útiles y otros.",
      "Educación Inicial ampliada a niños y niñas desde cero a cinco años. ",
      "Textos para estudiantes y guías para Docentes de la Educación Media",
      "Documentos pedagogicos para estudiantes con necesidades de apoyo",
      "Material educativo diseñado para pueblos indígenas",
      "Distribución de materiales didáctico a las instituciones educativas",
      "Evaluaciones estandarizadas sobre el desempeño de los estudiantes",
      "Ampliación de la jornada escolar",
      "Becas, kits escolares para la culminación oportuna de estudios",
      "Boleto estudiantil para la culminación oportuna de estudios  "
    
    
    ]
  };

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ items }) => ({
      items: arrayMove(items, oldIndex, newIndex)
    }));
  };
  ver = () => {
    console.log(this.state.items);
  };

  componentDidMount () {

    

    this.setState()
  }

  render() {
    const { items } = this.state;
    return (
      
      <div>
        <div className="banner__principal pt-5 ">
          <Container>
            
              <img className="mx-auto d-block" src={escuela} alt="escuela" />
            <h1 className="text-center">Ministerio de Educación y Ciencias</h1>
            
            <Row className="pt-5">
              <Col md={4}>
                <ul>
                  <li className="banner__principal_item_central">
                  <p className="banner__principal_item">Programa Central</p>
                    <p className='banner__principal_item_monto'>Gs. 6.240.521.885.664</p></li>
                  <li><ul>
                  <li className="banner__principal_item_one ml-5">
                    <p className="banner__principal_item">Misional</p>
                    <p className='banner__principal_item_monto'>Gs. 5.387.709.245.284</p>
                  </li>
                  <li className='banner__principal_item_two ml-5'>
                    <p className="banner__principal_item">Administrativo</p>
                    <p className='banner__principal_item_monto'>Gs. 844.972.495.318</p>
                  </li>
                  <li className='banner__principal_item_three ml-5'>
                    <p className="banner__principal_item">Proyecto</p>
                    <p className='banner__principal_item_monto'>Gs. 7.840.145.062  </p>
                  </li>
                  </ul>
                  </li>
                  
                  <li className='banner__principal_item_four'>
                    <p className="banner__principal_item">Programa sustantivo</p>
                    <p className='banner__principal_item_monto'>Gs. 322.207.712.994</p>
                  </li>
                  <li className='banner__principal_item_five'>
                    <p className="banner__principal_item">Partidas no asignables</p>
                    <p className='banner__principal_item_monto'>Gs. 0</p>
                  </li>
                </ul>
              </Col>
              <Col className="align-self-center" md={5}>
                <Doughnut data={data} />
              </Col>
              <Col className="align-self-center font-weight-bold text-center" md={3}>
                <h3>Presupuesto total</h3>
                <p>Gs. 6.562.729.598.658 </p>
              </Col>
            </Row>
          </Container>
        </div>
        <Container>
          <div className='py-5'>
            <h1 className="text-uppercase text-center mb-5 gastos__title ">Programas Sustantivos del Ministerio</h1>
            <div className="d-flex align-items-center justify-content-center ">
              <ContainerDimensions>
                {({ width, height }) => (
                  <TreeMap className='gastos__treemap' width={width} data={dataTree} valueUnit={"GS"} />
                )}
              </ContainerDimensions>
              
            </div>
            <div>
              <div className ="text-center text-uppercase text-center my-5 gastos__title">Resumen</div>
              <Table responsive>
  <thead>
    <tr>
      <th>#</th>
      <th>Table heading</th>
      <th>Table heading</th>
      <th>Table heading</th>
      <th>Table heading</th>
      <th>Table heading</th>
      <th>Table heading</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
  </tbody>
</Table>
              <ul>
                <li className='d-flex'>
                <span clasName="text-left">ATENCIÓN EDUCATIVA OPORTUNA AL PRE JARDIN Y JARDIN :</span><span className="align-self-end"> 41,38 % </span>
                </li>
                <li className="resumen__item">
                EDUCACIÓN MEDIA INTEGRADA : 0.010 %
                </li>
                <li>
                 CALIDAD DEL APRENDIZAJE: 14.28 %
                </li>
                <li>
                CULMINACIÓN OPORTUNA DE ESTUDIOS: 44 %
                </li>
                </ul>
              </div>
          </div>

          <div>
            <h2 className='encuesta__title text-center'>
              ¿Cuáles serían tus prioridades en Educación? 
            </h2>
            <p className='text-center encuesta__subtitle'>Organiza tus prioridades, arriba las más importantes,  <span className="font-weight-bold">(estirando y soltando las actividades)</span></p>
            <SortableContainer onSortEnd={this.onSortEnd}>
              {items.map((value, index) => (
                
                <SortableItem
                  key={`item-${index}`}
                  index={index}
                  value={value}
                  className='item' />
                
                
              ))}
            </SortableContainer>
            
            <InputGroup className='pt-3 ' size="lg">
            <FormControl  placeholder='¿Quieres explicarnos porqué?' aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>

            <button className ='button__primary  my-5 d-block mx-auto '  onClick={this.ver}> Enviar</button>
          </div>
        </Container>
      </div>
    );
  }
}

export default Educacion;
