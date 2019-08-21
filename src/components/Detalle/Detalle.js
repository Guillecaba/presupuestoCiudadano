import React, { Component, Fragment } from "react";
import MinisterioContext from "../../context/ministerio_context";

import escuela from "../../assets/images/escuela.png";
import {
  Row,
  Col,
  Container,
  InputGroup,
  FormControl,
  Table
} from "react-bootstrap";
import { Doughnut } from "react-chartjs-2";
import TreeMap from "react-d3-treemap";
import "react-d3-treemap/dist/react.d3.treemap.css";
import dataTree from "../../assets/data/data";
import { render } from "react-dom";
import {
  sortableContainer,
  sortableElement,
  sortableHandle
} from "react-sortable-hoc";
import arrayMove from "array-move";
//import Sunburst from "react-zoomable-sunburst"
import Sunburst from "../../components/Sunburst/Sunburst";
import "../Educacion/Educacion.css";
import NumberFormat from "react-number-format";

//import datap from '../../assets/data/data'

import ContainerDimensions from "react-container-dimensions";

const DragHandle = sortableHandle(() => <span className="dragAndDropIcon" />);

const SortableItem = sortableElement(({ value }) => (
  <li className="item">
    <DragHandle />
    {value}
  </li>
));

const SortableContainer = sortableContainer(({ children }) => {
  return <ul>{children}</ul>;
});

class DetalleMinisterio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      banner: null,
      items: null,
      treeMap: null,
      loading: false,
      lista: null
    };
  }
  static contextType = MinisterioContext;

  onSelect(event) {
    console.log(event);
  }

  changeListHandler = node => {
    const titulo = {
      nombre: node.data.name,
      valor: node.value
    };
    const lista = [];
    if (node.children) {
      node.children.map((valor, index) => {
        const elemento = {
          nombre: valor.data.name,
          valor: valor.value
        };
        console.log(elemento);
        lista[index] = elemento;
      });
    }

    const estado = {
      titulo: titulo,
      lista: lista
    };
    console.log(estado);
    this.setState({ lista: estado });
  };

  componentDidMount() {
    console.log(this.props.location);
    const pathname = this.props.location.pathname;
    let dataFromContext;
    switch (pathname) {
      case "/educacion":
        dataFromContext = this.context.educacion;
        console.log(dataFromContext);

        this.setState({
          logo: escuela,

          data: dataFromContext[0].data,

          items: dataFromContext[1].items,

          banner: dataFromContext[2],

          treeMap: dataFromContext[3].treeMapData,

          resumen: dataFromContext[4].resumen
        });
        console.log(this.state);

        break;
      case "/obras":
        dataFromContext = this.context.obras;
        console.log(dataFromContext);

        this.setState({
          logo: escuela,

          data: dataFromContext[0].data,

          items: dataFromContext[1].items,

          banner: dataFromContext[2],

          treeMap: dataFromContext[3].treeMapData,

          resumen: dataFromContext[4].resumen
        });
        console.log(this.state);
        break;
      case "/salud":
        break;
      case "/urbanismo":
        break;

      default:
        break;
    }
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ items }) => ({
      items: arrayMove(items, oldIndex, newIndex)
    }));
  };
  render() {
    let items;
    let state;
    console.log(this.state.items);
    if (this.state.items != undefined) {
      console.log(this.state.items);
      console.log(this.state.loading);
      // this.setState({loading:true})
      state = this.state;
      items = this.state.items;
    }
    console.log(this.state);
    return (
      <Fragment>
        {items ? (
          <div>
            <div className="banner__principal pt-5 ">
              <Container>
                <img
                  className="mx-auto d-block"
                  src={state.logo}
                  alt="escuela"
                />
                <h1 className="text-center">{state.banner.datos.nombre}</h1>

                <Row className="pt-5">
                  <Col md={4}>
                    <ul>
                      <li className="banner__principal_item_central">
                        <p className="banner__principal_item">
                          Programa Central
                        </p>
                        <p className="banner__principal_item_monto">
                          {state.banner.datos.programas[0].monto}
                        </p>
                      </li>
                      <li>
                        <ul>
                          <li className="banner__principal_item_one ml-5">
                            <p className="banner__principal_item">Misional</p>
                            <p className="banner__principal_item_monto">
                              {state.banner.datos.programas[1].monto}
                            </p>
                          </li>
                          <li className="banner__principal_item_two ml-5">
                            <p className="banner__principal_item">
                              Administrativo
                            </p>
                            <p className="banner__principal_item_monto">
                              {state.banner.datos.programas[2].monto}
                            </p>
                          </li>
                          <li className="banner__principal_item_three ml-5">
                            <p className="banner__principal_item">Proyecto</p>
                            <p className="banner__principal_item_monto">
                              {state.banner.datos.programas[3].monto}
                            </p>
                          </li>
                        </ul>
                      </li>

                      <li className="banner__principal_item_four">
                        <p className="banner__principal_item">
                          Programa sustantivo
                        </p>
                        <p className="banner__principal_item_monto">
                          {state.banner.datos.programas[4].monto}
                        </p>
                      </li>
                      <li className="banner__principal_item_five">
                        <p className="banner__principal_item">
                          Partidas no asignables
                        </p>
                        <p className="banner__principal_item_monto">
                          {state.banner.datos.programas[5].monto}
                        </p>
                      </li>
                    </ul>
                  </Col>
                  <Col className="align-self-center" md={5}>
                    <Doughnut data={state.data} />
                  </Col>
                  <Col
                    className="align-self-center font-weight-bold text-center"
                    md={3}
                  >
                    <h3>Presupuesto total</h3>
                    <p>{state.banner.datos.presupuestoTotal} </p>
                  </Col>
                </Row>
              </Container>
            </div>
            <Container>
              <div className="py-5">
                <h1 className="text-uppercase text-center mb-5 gastos__title ">
                  Programas del Ministerio
                </h1>
                <div className="d-flex align-items-center justify-content-center ">
                  <ContainerDimensions>
                    {({ width, height }) => (
                      <Sunburst
                        changed={this.changeListHandler}
                        data={state.treeMap}
                        width={width}
                        height="600"
                        count_member="value"
                        labelFunc={node => node.data.name}
                        tooltipFunc={data => data.name}
                        _debug={false}
                      />
                    )}
                  </ContainerDimensions>
                </div>
                <div>
                  {this.state.lista && (
                    <Fragment>
                      <div className="text-center text-uppercase text-center my-5 gastos__title">
                        <h2>{state.lista.titulo.nombre}</h2>
                        <p>
                          <NumberFormat
                            value={state.lista.titulo.valor}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"Gs "}
                          />
                        </p>
                      </div>

                      <Table responsive>
                        <thead>
                          <tr>
                            <th>Nombre</th>
                            <th>Monto</th>
                          </tr>
                        </thead>
                        <tbody>
                          {state.lista &&
                            state.lista.lista.map((item, index) => {
                              return (
                                <tr>
                                  <td>{item.nombre}</td>
                                  <td>
                                    <NumberFormat
                                      value={item.valor}
                                      displayType={"text"}
                                      thousandSeparator={true}
                                      prefix={"Gs "}
                                    />{" "}
                                  </td>
                                </tr>
                              );
                            })}
                        </tbody>
                      </Table>
                    </Fragment>
                  )}
                </div>
              </div>

              <div>
                <h2 className="encuesta__title text-center">
                  ¿Cuáles serían tus prioridades en Educación?
                </h2>
                <p className="text-center encuesta__subtitle">
                  Organiza tus prioridades, arriba las más importantes,{" "}
                  <span className="font-weight-bold">
                    (estirando y soltando las actividades)
                  </span>
                  
                </p>
                <SortableContainer onSortEnd={this.onSortEnd} >
                  {this.state.items.map((value, index) => (
                    <SortableItem
                      key={`item-${index}`}
                      index={index}
                      value={value}
                      className="item"
                    />
                  ))}
                </SortableContainer>

                <InputGroup className="pt-3 " size="lg">
                  <FormControl
                    placeholder="¿Quieres explicarnos porqué?"
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </InputGroup>

                <button
                  className="button__primary  my-5 d-block mx-auto "
                  onClick={this.ver}
                >
                  {" "}
                  Enviar
                </button>
              </div>
            </Container>
          </div>
        ) : null}
      </Fragment>
    );
  }
}

export default DetalleMinisterio;
