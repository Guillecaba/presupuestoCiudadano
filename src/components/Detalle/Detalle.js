import React, { Component, Fragment } from "react";
import MinisterioContext from "../../context/ministerio_context";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { HorizontalBar } from "react-chartjs-2";
import ReactLoading from "react-loading";
import escuela from "../../assets/images/escuela.png";
import { hsl as d3Hsl } from "d3-color";
import help from "../../assets/icons/question.svg";
import Fade from "react-reveal/Fade";
import construccion from "../../assets/images/construccion.png";
import desarrollo from "../../assets/images/desarrollo.png";
import BannerMinisterios from "../bannerMinisterios/bannerMinisterios";

import {
  scaleLinear as d3ScaleLinear,
  scaleSqrt as d3ScaleSqrt
} from "d3-scale";

import LightSpeed from "react-reveal/LightSpeed";
import {
  Row,
  Col,
  Container,
  InputGroup,
  FormControl,
  Table,
  Button,
  Card,
  Dropdown
} from "react-bootstrap";
import { Link } from "react-router-dom";
import RubberBand from "react-reveal/RubberBand";
import { Doughnut } from "react-chartjs-2";
import TreeMap from "react-d3-treemap";
import "react-d3-treemap/dist/react.d3.treemap.css";
import dataTree from "../../assets/data/data";

import cruz from "../../assets/images/cruz.png";
import casco from "../../assets/images/casco.png";
import casa from "../../assets/images/casa.png";
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
import flecha from "../../assets/icons/arrows.png";

//import datap from '../../assets/data/data'

import ContainerDimensions from "react-container-dimensions";

const DragHandle = sortableHandle(() => (
  <img src={flecha} className="img-flecha"></img>
));

const SortableItem = sortableElement(({ index, value }) => (
  <li className="item">
    {index + 1}
    <DragHandle />

    {value}
  </li>
));

const SortableContainer = sortableContainer(({ children }) => {
  return <ul>{children}</ul>;
});

function addDots(nStr) {
  nStr += "";
  let x = nStr.split(".");
  let x1 = x[0];
  let x2 = x.length > 1 ? "." + x[1] : "";
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, "$1" + "." + "$2"); // changed comma to dot here
  }
  return x1 + x2;
}

class DetalleMinisterio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      slug: null,
      banner: null,
      items: null,
      treeMap: null,
      loading: false,
      lista: null,
      comentario: " ",
      enviado: false,

      ministerios: null,
      datos: {
        labels: [0, 0, 0],
        datasets: [
          {
            label: "Cantidad de votos",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [0, 0, 0]
          }
        ]
      },
      data2: {
        labels: [0, 0, 0],
        datasets: [
          {
            label: "Cantidad de votos",
            backgroundColor: "#E16163",
            borderColor: "#E16163",
            borderWidth: 1,
            hoverBackgroundColor: " rgb(225,97,99,0.4) ",
            hoverBorderColor: " rgb(225,97,99,1) ",
            data: [0, 0, 0]
          }
        ]
      },
      descripcion: null,
      descripcion2: null,
      listaComentarios: null
    };
  }
  static contextType = MinisterioContext;

  url = `https://presupuesto-ciudadano.herokuapp.com`;

  notify = message => {
    toast.success(`${message}`, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
  };

  notifyFail = message => {
    toast.error(` ${message}`, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
  };

  onSelect(event) {
    console.log(event);
  }

  colorNodoLista(nodo) {
    let hueDXScale = d3ScaleLinear()
      .domain([0, 1])
      .range([0, 360]);

    const hue = hueDXScale(nodo.x0);
    console.log("colorNodo");
    console.log(nodo.x0);
    const color = d3Hsl(hue, 0.9, 0.6);
    let nodoNuevo = { ...nodo, color: color };
    console.log(nodoNuevo);
    return nodoNuevo;
  }

  changeListHandler = node => {
    console.log(node);
    let nodoNuevoTitulo = this.colorNodoLista(node);
    const titulo = {
      nombre: nodoNuevoTitulo.data.name,
      valor: nodoNuevoTitulo.value,
      color: nodoNuevoTitulo.color
    };

    const lista = [];
    if (node.children) {
      let nodoNuevoHijo;
      node.children.map((valor, index) => {
        nodoNuevoHijo = this.colorNodoLista(valor);
        const elemento = {
          nombre: valor.data.name,
          valor: valor.value,
          color: nodoNuevoHijo.color
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

  sendVote = () => {
    this.setState({ loading: true });
    const enviar = {
      comentario: this.state.comentario,
      orden_set: this.state.items,
      ministerio: this.state.items[0].ministerio
    };
    const send = JSON.stringify(enviar);
    /* console.log(send); */
    axios
      .post(`${this.url}/v1/respuesta/`, send, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(
        res => {
          console.log(res);
          this.setState({ enviado: true });
          this.notify(`Enviamos tu voto!`);

          /*  console.log(res.data); */

          const url = `https://presupuesto-ciudadano.herokuapp.com/v1/report`;
          axios.get(url).then(res => {
            /*  console.log(res.data) */ const ministerios = res.data;
            /*  console.log(ministerios) */ this.setState({ ministerios });
            this.setState({ loading: false });

            console.log(this.state.ministerios);
            console.log(enviar.ministerio);
            this.state.ministerios.map(res => {
              if (enviar.ministerio == res.id) {
                this.handleChartTopRanking(res);
              }
            });
            /*  this.state.ministerios */

            /* let actividades = [];
              let votos = [];
            data.actividades.map(res=>{
      actividades.push(res.descripcion)
      votos.push(res.data[0].cantidad)
    })
    console.log(actividades)
    console.log(votos)
    let prevData = this.state.data2
    console.log(this.state.data)
    prevData.labels=actividades
    prevData.datasets[0].data= votos
    console.log(prevData)
    
    this.setState({data2:prevData,descripcion2:data.nombre})  */
          });
        },
        err => {
          this.notifyFail(`Hubo un error en el envio`);
          console.log(err);
        }
      );
  };

  handleChartTopRanking(data) {
    //console.log(data)
    let actividades = [];
    let votos = [];
    data.actividades.map(res => {
      actividades.push(res.descripcion);
      votos.push(res.data[0].cantidad);
    });
    console.log(actividades);
    console.log(votos);
    let prevData = this.state.data2;
    console.log(this.state.data);
    prevData.labels = actividades;
    prevData.datasets[0].data = votos;
    console.log(prevData);

    this.setState({ data2: prevData, descripcion2: data.nombre });
  }

  changeInputHandler = (event, id) => {
    console.log(event.target.value);
    const comentario = event.target.value;
    this.setState({ comentario: comentario });
  };

  static getDerivedStateFromProps(props, state) {
    console.log("Detalle: getDerivaredStateFromProps");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Detalle: componentDidUpdate");
    console.log(this.props.location.pathname);
    console.log(this.state.pathname);

    if (this.props.location.pathname !== this.state.pathname) {
      console.log("Detalle:componentDidUpdate Cambio");
      const pathname = this.props.location.pathname;
      let dataFromContext;
      switch (pathname) {
        case "/educacion":
          dataFromContext = this.context[0].educacion;

          console.log(dataFromContext);
          axios
            .get(`${this.url}/v1/actividades/?ministerio__slug=educacion`)
            .then(res => {
              console.log(res.data);
              res.data.map((item, index) => {
                item.orden = index;
                item.actividad = item.id;
                item.ministerio = item.ministerio.id;
              });

              this.setState({
                logo: escuela,

                slug: "educacion",

                data: dataFromContext[0].data,

                items: res.data,

                banner: dataFromContext[2],

                treeMap: dataFromContext[3].treeMapData,

                resumen: dataFromContext[4].resumen,
                lista: null,

                pathname: pathname,
                enviado: false
              });
              console.log(this.state);
            });

          break;
        case "/obras":
          dataFromContext = this.context[1].obras;
          console.log(this.context);

          axios
            .get(`${this.url}/v1/actividades/?ministerio__slug=obras`)
            .then(res => {
              console.log(res.data);
              res.data.map((item, index) => {
                item.orden = index;
                item.actividad = item.id;
                item.ministerio = item.ministerio.id;
              });
              this.setState({
                logo: casco,

                slug: "obras",

                data: dataFromContext[0].data,

                items: res.data,

                banner: dataFromContext[2],

                treeMap: dataFromContext[3].treeMapData,

                resumen: dataFromContext[4].resumen,

                pathname: pathname,
                lista: null,
                enviado: false
              });
              console.log(this.state);
            });
          break;
        case "/salud":
          dataFromContext = this.context[3].salud;
          console.log(this.context);

          axios
            .get(`${this.url}/v1/actividades/?ministerio__slug=salud`)
            .then(res => {
              console.log(res.data);
              res.data.map((item, index) => {
                item.orden = index;
                item.actividad = item.id;
                item.ministerio = item.ministerio.id;
              });
              this.setState({
                logo: cruz,

                slug: "salud",

                data: dataFromContext[0].data,

                items: res.data,

                banner: dataFromContext[2],

                treeMap: dataFromContext[3].treeMapData,

                resumen: dataFromContext[4].resume,

                pathname: pathname,
                enviado: false,
                lista: null
              });
              console.log(this.state);
            });
          break;
        case "/desarrollo":
          dataFromContext = this.context[4].desarrollo;
          console.log(this.context);

          axios
            .get(`${this.url}/v1/actividades/?ministerio__slug=desarrollo`)
            .then(res => {
              console.log(res.data);
              res.data.map((item, index) => {
                item.orden = index;
                item.actividad = item.id;
                item.ministerio = item.ministerio.id;
              });
              this.setState({
                logo: casa,

                slug: "desarrollo",

                data: dataFromContext[0].data,

                items: res.data,

                banner: dataFromContext[2],

                treeMap: dataFromContext[3].treeMapData,

                resumen: dataFromContext[4].resume,

                pathname: pathname,
                enviado: false,
                lista: null
              });
              console.log(this.state);
            });
          break;

        default:
          break;
      }
    }
  }

  componentDidMount() {
    console.log("Detalle: componentDidMount");
    console.log(this.props.location);

    const pathname = this.props.location.pathname;
    let dataFromContext;
    switch (pathname) {
      case "/educacion":
        dataFromContext = this.context[0].educacion;

        console.log(dataFromContext);
        axios
          .get(`${this.url}/v1/actividades/?ministerio__slug=educacion`)
          .then(res => {
            console.log(res.data);
            res.data.map((item, index) => {
              item.orden = index;
              item.actividad = item.id;
              item.ministerio = item.ministerio.id;
            });

            this.setState({
              logo: escuela,

              data: dataFromContext[0].data,

              slug: "educacion",

              items: res.data,

              banner: dataFromContext[2],

              treeMap: dataFromContext[3].treeMapData,

              resumen: dataFromContext[4].resumen,

              pathname: pathname
            });
            console.log(this.state);
          });

        break;
      case "/obras":
        dataFromContext = this.context[1].obras;
        console.log(this.context);

        axios
          .get(`${this.url}/v1/actividades/?ministerio__slug=obras`)
          .then(res => {
            console.log(res.data);
            res.data.map((item, index) => {
              item.orden = index;
              item.actividad = item.id;
              item.ministerio = item.ministerio.id;
            });
            this.setState({
              logo: casco,

              data: dataFromContext[0].data,

              slug: "obras",

              items: res.data,

              banner: dataFromContext[2],

              treeMap: dataFromContext[3].treeMapData,

              resumen: dataFromContext[4].resumen,

              pathname: pathname
            });
            console.log(this.state);
          });

        break;
      case "/salud":
        dataFromContext = this.context[3].salud;
        console.log(this.context);

        axios
          .get(`${this.url}/v1/actividades/?ministerio__slug=salud`)
          .then(res => {
            console.log(res.data);
            res.data.map((item, index) => {
              item.orden = index;
              item.actividad = item.id;
              item.ministerio = item.ministerio.id;
            });
            this.setState({
              logo: cruz,

              data: dataFromContext[0].data,

              slug: "salud",

              items: res.data,

              banner: dataFromContext[2],

              treeMap: dataFromContext[3].treeMapData,

              resumen: dataFromContext[4].resume,

              pathname: pathname
            });
            console.log(this.state);
          });

        break;
      case "/desarrollo":
        dataFromContext = this.context[4].desarrollo;
        console.log(this.context);

        axios
          .get(`${this.url}/v1/actividades/?ministerio__slug=desarrollo`)
          .then(res => {
            console.log(res.data);
            res.data.map((item, index) => {
              item.orden = index;
              item.actividad = item.id;
              item.ministerio = item.ministerio.id;
            });
            this.setState({
              logo: casa,

              slug: "desarrollo",

              data: dataFromContext[0].data,

              items: res.data,

              banner: dataFromContext[2],

              treeMap: dataFromContext[3].treeMapData,

              resumen: dataFromContext[4].resume,

              pathname: pathname
            });
            console.log(this.state);
          });
        break;

      default:
        break;
    }
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    const newItems = arrayMove(this.state.items, oldIndex, newIndex);
    newItems.map((item, index) => (item.orden = index));
    this.setState({
      items: newItems
    });
  };

  trLista = ({ color, item }) => (
    <tr
      style={{
        borderColor: "#ff0000"
      }}
    >
      <td>{item.nombre}</td>
      <td className="text-right">
        <NumberFormat
          value={item.valor}
          displayType={"text"}
          thousandSeparator={false}
          prefix={"Gs "}
        />{" "}
      </td>
    </tr>
  );

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
    console.log(this.state.pathname);
    console.log(this.props.location.pathname);
    return (
      <Fragment>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
        {items && this.state.pathname == this.props.location.pathname ? (
          <div>
            <div className="banner__principal pt-5 ">
              <Container>
                <img
                  className="mx-auto d-block grow"
                  src={state.logo}
                  alt="escuela"
                />
                <Fade bottom>
                  <h1 className="text-center">{state.banner.datos.nombre}</h1>
                </Fade>
                <a  className="text-decoration-none" href={this.props.location.pathname + '#participacion'}><button
                  className="button__secundary   d-block mx-auto "
                  
                >
Participá!
                
                  
                </button></a>

                <Row className="pt-5">
                  <Col className="pb-5" md={4}>
                    <h2 className="">Estructura por tipo de programa</h2>
                    <ul>
                      <li className="banner__principal_item_central">
                        <div className="d-flex align-items-start">
                          <p className="banner__principal_item">
                            Programa Central
                          </p>
                          <a href="/financiacion/#infoProgramas">
                            {" "}
                            <img className=" icon" src={help}></img>{" "}
                          </a>
                        </div>

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
                        <div className="d-flex align-items-start">
                          <p className="banner__principal_item">
                            Programa sustantivo
                          </p>
                          <a href="/financiacion#infoProgramas">
                            {" "}
                            <img className=" icon" src={help}></img>{" "}
                          </a>
                        </div>

                        <p className="banner__principal_item_monto">
                          {state.banner.datos.programas[4].monto}
                        </p>
                      </li>
                      <li>
                        <ul>
                          <li className="banner__principal_item_proyecto ml-5">
                            <div className="d-flex align-items-start">
                              <p className="banner__principal_item">Proyecto</p>
                              <a href="/cambios#def-proyecto-acti">
                                {" "}
                                <img className=" icon" src={help}></img>{" "}
                              </a>
                            </div>
                            <p className="banner__principal_item_monto">
                              {state.banner.datos.programas[6].monto}
                            </p>
                          </li>
                          <li className="banner__principal_item_actividad ml-5">
                            <div className="d-flex align-items-start">
                              <p className="banner__principal_item">
                                Actividad
                              </p>
                              <a href="/cambios#def-proyecto-acti">
                                {" "}
                                <img className=" icon" src={help}></img>{" "}
                              </a>
                            </div>
                            <p className="banner__principal_item_monto">
                              {state.banner.datos.programas[7].monto}
                            </p>
                          </li>
                        </ul>
                      </li>
                      <li className="banner__principal_item_five">
                        <div className="d-flex align-items-start">
                          <p className="banner__principal_item">
                            Partidas no asignables
                          </p>
                          <a href="/financiacion#infoProgramas">
                            {" "}
                            <img className=" icon" src={help}></img>{" "}
                          </a>
                        </div>
                        <p className="banner__principal_item_monto">
                          {state.banner.datos.programas[5].monto}
                        </p>
                      </li>
                    </ul>
                  </Col>
                  {/*  <Col className="align-self-center" md={8}>
                    
                  </Col> */}
                  <Col
                    className="font-weight-bold text-center align-items-center d-flex flex-column justify-content-center pb-3"
                    md={8}
                  >
                    <h3 className="">Presupuesto total</h3>
                    <p className="banner__principal_item_monto">
                      {state.banner.datos.presupuestoTotal}{" "}
                    </p>
                    <Doughnut
                      options={{
                        legend: { display: false },
                        tooltips: {
                          enabled: true,
                          mode: "single",
                          callbacks: {
                            label: function(tooltipItems, data) {
                              return (
                                data.labels[tooltipItems.index] +
                                " : " +
                                data.datasets[tooltipItems.datasetIndex].data[
                                  tooltipItems.index
                                ] +
                                " %"
                              );
                            }
                          }
                        }
                      }}
                      className=""
                      data={state.data}
                    />
                  </Col>
                </Row>
              </Container>
            </div>
            <Container>
              <div className="py-5">
                <h1 className="text-uppercase text-center mb-5 gastos__title ">
                  Presupuesto {this.state.banner.datos.nombre} <br />
                  en detalle
                </h1>
                <Row>
                  <Col md={6}>
                    {!this.state.lista && (
                      <RubberBand>
                        <h2 className="gastos__title text-center">
                          Haz click en el gráfico
                        </h2>
                      </RubberBand>
                    )}
                    <div className="d-flex align-items-center justify-content-center ">
                      <ContainerDimensions>
                        {({ width, height }) => (
                          <Sunburst
                            changed={this.changeListHandler}
                            data={state.treeMap}
                            width={width}
                            height="600"
                            count_member="value"
                            //labelFunc={node => node.data.name}
                            tooltipFunc={data => {
                              let value = addDots(data.value);
                              return `${data.data.name} \n Gs. ${value}`;
                            }}
                            _debug={false}
                          />
                        )}
                      </ContainerDimensions>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div>
                      {this.state.lista && (
                        <Fragment>
                          <div className="text-center text-uppercase text-center my-5 gastos__title">
                            <h2>{state.lista.titulo.nombre}</h2>
                            <p>
                              <NumberFormat
                                value={state.lista.titulo.valor}
                                displayType={"text"}
                                decimalSeparator={","}
                                thousandSeparator={"."}
                                /* thousandSeparator={false} */
                                prefix={"Gs "}
                              />
                            </p>
                          </div>

                          <Table className="tabla-grafico" responsive>
                            <thead>
                              <tr>
                                <th>Nombre</th>
                                <th className="text-right">Monto</th>
                                <th className="text-right">Porcentaje</th>
                              </tr>
                            </thead>
                            <tbody>
                              {state.lista &&
                                state.lista.lista.map((item, index) => {
                                  return (
                                    <tr
                                      style={{
                                        borderLeft: `10px hsl(${
                                          item.color.h
                                        }, ${(item.color.s * 100).toFixed(2) +
                                          "%"}, ${(item.color.l * 100).toFixed(
                                          2
                                        ) + "%"}) solid`
                                      }}
                                    >
                                      <td width="30%">{item.nombre}</td>
                                      <td width="60%" className="text-right">
                                        <NumberFormat
                                          value={item.valor}
                                          displayType={"text"}
                                          decimalSeparator={","}
                                          thousandSeparator={"."}
                                          prefix={"Gs \r\n"}
                                        />{" "}
                                      </td>
                                      <td width="20%" className="text-right">
                                        <NumberFormat
                                          value={
                                            (item.valor /
                                              state.lista.titulo.valor) *
                                            100
                                          }
                                          displayType={"text"}
                                          decimalScale={2}
                                          decimalSeparator={","}
                                          thousandSeparator={"."}
                                          suffix={"%"}
                                        ></NumberFormat>
                                      </td>
                                    </tr>
                                  );
                                })}
                            </tbody>
                          </Table>
                        </Fragment>
                      )}
                    </div>
                  </Col>
                </Row>
              </div>

              <div>
                {!this.state.enviado && (
                  <div id="participacion">
                    <h1 className="encuesta__title text-center">
                      ¿Cuáles serían tus prioridades?
                    </h1>
                    <p className="text-center encuesta__subtitle">
                      Organiza tus prioridades, arriba las más importantes,{" "}
                      <span className="font-weight-bold">
                        (estirando y soltando las actividades)
                      </span>
                    </p>
                    <SortableContainer onSortEnd={this.onSortEnd}>
                      {this.state.items.map((value, index) => (
                        <SortableItem
                          key={`item-${index}`}
                          index={index}
                          value={value.descripcion}
                          className="item"
                        />
                      ))}
                    </SortableContainer>

                    <InputGroup className="pt-3 " size="lg">
                      <FormControl
                        onChange={this.changeInputHandler}
                        placeholder="¿Quieres explicarnos porqué?"
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                      />
                    </InputGroup>

                    <button
                      className="button__primary  my-5 d-block mx-auto "
                      onClick={this.sendVote}
                    >
                      {" "}
                      Enviar
                    </button>
                  </div>
                )}
                {this.state.enviado && this.state.ministerios ? (
                  <Fragment>
                    <h1>Resultados</h1>
                    <h2>
                      Top de mayor interés en actividades por ministerio:{" "}
                    </h2>
                    <h2 className="resultado_ministerio_titulo">
                      {" "}
                      {this.state.descripcion2}{" "}
                    </h2>

                    <Dropdown>
                      <Dropdown.Toggle
                        className="my-3"
                        variant="info"
                        id="dropdown-basic"
                      >
                        Seleccionar ministerio:
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        {this.state.ministerios.map(res => (
                          <Dropdown.Item
                            onClick={() => this.handleChartTopRanking(res)}
                          >
                            {res.nombre}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>

                    <HorizontalBar
                      className="mb-3"
                      options={{
                        scales: {
                          yAxes: [
                            {
                              ticks: {
                                callback: value => {
                                  return String(value).substring(0, 20) + "..."; //truncate
                                }
                              },
                              
                            }
                          ],
                          xAxes: [{ display: false }]
                        }
                      ,
                      tooltips: {
                        enabled: true,
                        mode: "single",
                        callbacks: {
                          label: function(tooltipItems, data) {
                            return (
                              data.labels[tooltipItems.index] +
                              " : " +
                              data.datasets[tooltipItems.datasetIndex].data[
                                tooltipItems.index
                              ] 
                             
                            );
                          }
                        }
                      }
                      }}
                      data={this.state.data2}
                    />
                  </Fragment>
                ) : (
                  <div className="d-flex justify-content-center"></div>
                )}
                {this.state.loading && (
                  <div className="d-flex justify-content-center">
                    <ReactLoading
                      type={"bars"}
                      color={"#CBE776"}
                      height={"20%"}
                      width={"20%"}
                    />
                  </div>
                )}
              </div>
            </Container>
          </div>
        ) : (
          <div className="d-flex justify-content-center">
            <ReactLoading
              type={"bars"}
              color={"#CBE776"}
              height={"20%"}
              width={"20%"}
            />
          </div>
        )}
        <BannerMinisterios />
      </Fragment>
    );
  }
}

export default DetalleMinisterio;
