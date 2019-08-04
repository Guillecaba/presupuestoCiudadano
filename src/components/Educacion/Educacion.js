import React, { Component } from "react";
import escuela from "../../assets/images/escuela.png";
import { Row, Col, Container } from "react-bootstrap";
import { Doughnut } from "react-chartjs-2";
import TreeMap from "react-d3-treemap";
import "react-d3-treemap/dist/react.d3.treemap.css";
import dataTree from "../../assets/data/data";
import { render } from "react-dom";
import { sortableContainer, sortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";

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
const SortableItem = sortableElement(({ value }) => <li>{value}</li>);

const SortableContainer = sortableContainer(({ children }) => {
  return <ul>{children}</ul>;
});

class Educacion extends Component {
  state = {
    items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"]
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
        <div className="banner_principal">
          <Container>
            <img src={escuela} alt="escuela" />
            <h1>Ministerio de Educación y Ciencias</h1>
            <Row>
              <Col md={4}>
                <ol>
                  <li>
                    <p>Programa Central- Misional</p>
                    <p>Gs. xxx.xxx.xxx.xxx</p>
                  </li>
                  <li>
                    <p>Programa Central- Administrativo</p>
                    <p>Gs. xxx.xxx.xxx.xxx</p>
                  </li>
                  <li>
                    <p>Programa sustantivo</p>
                    <p>Gs. xxx.xxx.xxx.xxx</p>
                  </li>
                  <li>
                    <p>Partidas no asignables</p>
                    <p>Gs. xxx.xxx.xxx.xxx</p>
                  </li>
                </ol>
              </Col>
              <Col md={5}>
                <Doughnut data={data} />
              </Col>
              <Col md={3}>
                <h3>Presupuesto total</h3>
                <p>Gs. 242.501.234.454</p>
              </Col>
            </Row>
          </Container>
        </div>
        <Container>
          <div>
            <TreeMap data={dataTree} valueUnit={"MB"} />
          </div>

          <div>
            <h2>
              ¿Cuáles serían tus prioridades en Educación? (se pone a
              consideración la priorización a nivel de actividad/proyecto)
            </h2>
            <p>Cálculo: El orden de prioridad va de forma descendente</p>
            <SortableContainer onSortEnd={this.onSortEnd}>
              {items.map((value, index) => (
                <SortableItem
                  key={`item-${index}`}
                  index={index}
                  value={value}
                />
              ))}
            </SortableContainer>
            <button onClick={this.ver}> Enviar</button>
          </div>
        </Container>
      </div>
    );
  }
}

export default Educacion;
