import React, { Component } from "react";
import escuela from "../../assets/images/escuela.png";
import { Row, Col, Container, InputGroup, FormControl } from "react-bootstrap";
import { Doughnut } from "react-chartjs-2";
import TreeMap from "react-d3-treemap";
import "react-d3-treemap/dist/react.d3.treemap.css";
import dataTree from "../../assets/data/data";
import { render } from "react-dom";
import { sortableContainer, sortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";
import './Educacion.css'

const data = {
  labels: ["Misional", "Administrativo", "Sustantivo", "No asignables"],
  datasets: [
    {
      data: [300, 50, 100, 360],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FTC556"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FTC556"]
    }
  ]
};
const SortableItem = sortableElement(({ value }) => <li className='item'>{value}</li>);

const SortableContainer = sortableContainer(({ children }) => {
  return <ul>{children}</ul>;
});

class Educacion extends Component {
  state = {
    items: [
      "001-ELABORAR DOCUMENTOS PEDAG. P/ ESTUD. C/ NECESIDADES DE APOYO",
      "002-OPTIMIZAR LOS PROGRAMAS COMPENSATORIOS (Pre Jardín - Jardín)",
      "005-TRANSFERENCIA Y DOTACION TEXTOS A ESTUD.Y GUIAS A DOCENTES",
      "004-DOTAR A INSTITUCIONES EDUCATIVAS DE MATERIALES DIDÁCTICOS",
      "005-CAPACITACIÓN APOYO A LA AMPLIACIÓN DE LA JORNADA ESCOLAR.",
      "006-DOTAR A INSTITUCIONES EDUCATIVAS DE MATERIALES DIDÁCTICOS"]
  };

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ items }) => ({
      items: arrayMove(items, oldIndex, newIndex)
    }));
  };
  ver = () => {
    console.log(this.state.items);
  };

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
                <ol>
                  <li className="banner__principal_item_one">
                    <p className="banner__principal_item">Programa Central- Misional</p>
                    <p className='banner__principal_item_monto'>Gs. xxx.xxx.xxx.xxx</p>
                  </li>
                  <li className='banner__principal_item_two'>
                    <p className="banner__principal_item">Programa Central- Administrativo</p>
                    <p className='banner__principal_item_monto'>Gs. xxx.xxx.xxx.xxx</p>
                  </li>
                  <li className='banner__principal_item_three'>
                    <p className="banner__principal_item">Programa sustantivo</p>
                    <p className='banner__principal_item_monto'>Gs. xxx.xxx.xxx.xxx</p>
                  </li>
                  <li className='banner__principal_item_four'>
                    <p className="banner__principal_item">Partidas no asignables</p>
                    <p className='banner__principal_item_monto'>Gs. xxx.xxx.xxx.xxx</p>
                  </li>
                </ol>
              </Col>
              <Col className="align-self-center" md={5}>
                <Doughnut data={data} />
              </Col>
              <Col className="align-self-center font-weight-bold text-center" md={3}>
                <h3>Presupuesto total</h3>
                <p>Gs. 242.501.234.454</p>
              </Col>
            </Row>
          </Container>
        </div>
        <Container>
          <div className='py-5'>
            <h1 className="text-uppercase text-center mb-5 gastos__title ">Gastos del Ministerio</h1>
            <div className="d-flex align-items-center justify-content-center container">
              <TreeMap className='gastos__treemap' data={dataTree} valueUnit={"MB"} />
            </div>
          </div>

          <div>
            <h2 className='encuesta__title'>
              ¿Cuáles serían tus prioridades en Educación? (se pone a
              consideración la priorización a nivel de actividad/proyecto)
            </h2>
            <p className='text-center encuesta__subtitle'>Cálculo: El orden de prioridad va de forma descendente</p>
            <SortableContainer onSortEnd={this.onSortEnd}>
              {items.map((value, index) => (
                
                <SortableItem
                  key={`item-${index}`}
                  index={index}
                  value={value}
                  className='item' />
                
                
              ))}
            </SortableContainer>
            
            <InputGroup className='pt-3 pl-5' size="lg">
            <FormControl  placeholder='¿Quieres explicarnos porqué?' aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>

            <button className ='button__primary my-5 d-block mx-auto '  onClick={this.ver}> Enviar</button>
          </div>
        </Container>
      </div>
    );
  }
}

export default Educacion;
