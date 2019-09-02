import React, { Component, Fragment } from "react";
import MinisterioContext from "../../context/ministerio_context";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import ReactLoading from 'react-loading';
import escuela from "../../assets/images/escuela.png";

import LightSpeed from "react-reveal/LightSpeed";
import {
  Row,
  Col,
  Container,
  InputGroup,
  FormControl,
  Table,
  Button,
  Card
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
      lista: null,
      comentario: " ",
      enviado: false
    };
  }
  static contextType = MinisterioContext;

  url = `https://presupuesto-ciudadano.herokuapp.com`

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

  sendVote = () => {
    const enviar = {
      comentario: this.state.comentario,
      orden_set: this.state.items,
      ministerio: this.state.items[0].ministerio
    };
    const send = JSON.stringify(enviar);
    console.log(send);
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

          console.log(res.data);
        },
        err => {
          this.notifyFail(`Hubo un error en el envio`);
          console.log(err);
        }
      );
  };

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
            .get(
              `${this.url}/v1/actividades/?ministerio__slug=educacion`
            )
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
  
                items: res.data,
  
                banner: dataFromContext[2],
  
                treeMap: dataFromContext[3].treeMapData,
  
                resumen: dataFromContext[4].resumen,
                lista: null,
  
                pathname: pathname,
                enviado:false
              });
              console.log(this.state);
            });

          break;
        case "/obras":
          dataFromContext = this.context[1].obras;
          console.log(this.context);
  
          axios
            .get(
              `${this.url}/v1/actividades/?ministerio__slug=obras`
            )
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
      
                items: res.data,
      
                banner: dataFromContext[2],
      
                treeMap: dataFromContext[3].treeMapData,
      
                resumen: dataFromContext[4].resumen,
      
                pathname: pathname,
                lista: null,
                enviado:false
              });
              console.log(this.state);
            })
          break;
        case "/salud":
          dataFromContext = this.context[3].salud;
          console.log(this.context);
  
          axios
            .get(
              `${this.url}/v1/actividades/?ministerio__slug=salud`
            )
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
      
                items:res.data,
      
                banner: dataFromContext[2],
      
                treeMap: dataFromContext[3].treeMapData,
      
                resumen: dataFromContext[4].resume,
      
                pathname: pathname,
                enviado:false,
                lista: null,
              });
              console.log(this.state);
            })
          break;
        case "/urbanismo":
          dataFromContext = this.context[2].urbanismo;
        console.log(this.context);

        axios
          .get(
            `${this.url}/v1/actividades/?ministerio__slug=urbanismo`
          )
          .then(res => {
            console.log(res.data);
            res.data.map((item, index) => {
              item.orden = index;
              item.actividad = item.id;
              item.ministerio = item.ministerio.id;
              
            });
            this.setState({
              logo: casa,
    
              data: dataFromContext[0].data,
    
              items: res.data,
    
              banner: dataFromContext[2],
    
              treeMap: dataFromContext[3].treeMapData,
    
              resumen: dataFromContext[4].resume,
    
              pathname: pathname,
              enviado:false,
              lista: null,
            });
            console.log(this.state);

          })
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
          .get(
            `${this.url}/v1/actividades/?ministerio__slug=educacion`
          )
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
          .get(
            `${this.url}/v1/actividades/?ministerio__slug=obras`
          )
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
    
              items: res.data,
    
              banner: dataFromContext[2],
    
              treeMap: dataFromContext[3].treeMapData,
    
              resumen: dataFromContext[4].resumen,
    
              pathname: pathname
            });
            console.log(this.state);
          })
       
        break;
      case "/salud":
        dataFromContext = this.context[3].salud;
        console.log(this.context);

        axios
          .get(
            `${this.url}/v1/actividades/?ministerio__slug=salud`
          )
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
    
              items:res.data,
    
              banner: dataFromContext[2],
    
              treeMap: dataFromContext[3].treeMapData,
    
              resumen: dataFromContext[4].resume,
    
              pathname: pathname
            });
            console.log(this.state);
          })
       
        break;
      case "/urbanismo":
        dataFromContext = this.context[2].urbanismo;
        console.log(this.context);

        axios
          .get(
            `${this.url}/v1/actividades/?ministerio__slug=urbanismo`
          )
          .then(res => {
            console.log(res.data);
            res.data.map((item, index) => {
              item.orden = index;
              item.actividad = item.id;
              item.ministerio = item.ministerio.id;
              
            });
            this.setState({
              logo: casa,
    
              data: dataFromContext[0].data,
    
              items: res.data,
    
              banner: dataFromContext[2],
    
              treeMap: dataFromContext[3].treeMapData,
    
              resumen: dataFromContext[4].resume,
    
              pathname: pathname
            });
            console.log(this.state);

          })
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
        {items && this.state.pathname == this.props.location.pathname  ? (
          <div>
            <div className="banner__principal pt-5 ">
              <Container>
                <img
                  className="mx-auto d-block grow"
                  src={state.logo}
                  alt="escuela"
                />
                <LightSpeed right>
                  <h1 className="text-center">{state.banner.datos.nombre}</h1>
                </LightSpeed>

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
                    <h3 className="">Presupuesto total</h3>
                    <p className="banner__principal_item_monto">
                      {state.banner.datos.presupuestoTotal}{" "}
                    </p>
                  </Col>
                </Row>
              </Container>
            </div>
            <Container>
              <div className="py-5">
                <h1 className="text-uppercase text-center mb-5 gastos__title ">
                  Presupuesto del ministerio en detalle
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
                            labelFunc={node => node.data.name}
                            tooltipFunc={data => data.name}
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
                  </Col>
                </Row>
              </div>

              <div>
                {!this.state.enviado && (
                  <div>
                    <h1 className="encuesta__title text-center">
                      ¿Cuales serian tus prioridades en Educacion?
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
              </div>
            </Container>
          </div>
        ) : <div className='d-flex justify-content-center'>
          <ReactLoading type={'bars'} color={'#CBE776'} height={'20%'} width={'20%'} />
          </div>}
        <div className="presupuesto_total mb-5 py-5">
          <Container>
            <Row>
              <Col md={3}>
                <Card className="card-ministerio">
                  <Card.Img
                    className="w-25 align-self-center grow"
                    src={escuela}
                  />
                  <Card.Body>
                    <Card.Title className="presupuesto_total__card_title text-center">
                      Ministerio de Educación y Ciencias
                    </Card.Title>
                    <Card.Text className="presupuesto_total__card_monto_primary text-center">
                      Gs. 6,562 billones
                    </Card.Text>
                    <Card.Text className="presupuesto_total__card_monto_secondary text-center">
                      Gs. 6.562.729.598.658
                    </Card.Text>
                  </Card.Body>
                  <Link className="text-center" to={"/educacion"}>
                    <Button className="button__secundary align-self-center grow   mb-3">
                      Ver Mas
                    </Button>
                  </Link>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="card-ministerio">
                  <Card.Img
                    className="w-25 align-self-center grow"
                    src={cruz}
                  />
                  <Card.Body>
                    <Card.Title className="presupuesto_total__card_title text-center">
                      Ministerio de Salud y Bienestar social
                    </Card.Title>
                    <Card.Text className="presupuesto_total__card_monto_primary  text-center">
                      Gs. 5,518 billones
                    </Card.Text>
                    <Card.Text className="presupuesto_total__card_monto_secondary  text-center">
                      Gs. 5.518.667.479.787
                    </Card.Text>
                  </Card.Body>
                  <Link className="text-center" to={"/salud"}>
                    <Button className="button__secundary align-self-center grow  mb-3">
                      Ver Mas
                    </Button>
                  </Link>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="card-ministerio">
                  <Card.Img
                    className="w-25 align-self-center grow"
                    src={casco}
                  />
                  <Card.Body>
                    <Card.Title className="presupuesto_total__card_title text-center">
                      Ministerio de Obras Públicas y Comunicaciones
                    </Card.Title>

                    <Card.Text className="presupuesto_total__card_monto_primary text-center">
                      Gs. 8,041 billones
                    </Card.Text>
                    <Card.Text className="presupuesto_total__card_monto_secondary text-center">
                      Gs. 8.041.969.626.615
                    </Card.Text>
                  </Card.Body>
                  <Link className="text-center" to={"/obras"}>
                    <Button className="button__secundary align-self-center grow  mb-3">
                      Ver Mas
                    </Button>
                  </Link>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="card-ministerio ">
                  <Card.Img
                    className="w-25 align-self-center grow "
                    src={casa}
                  />
                  <Card.Body>
                    <Card.Title className="presupuesto_total__card_title text-center">
                      Ministerio de Urbanismo, Vivienda y Hábitat
                    </Card.Title>
                    <Card.Text className="presupuesto_total__card_monto_primary text-center">
                      Gs. 0.612 billones{" "}
                    </Card.Text>
                    <Card.Text className="presupuesto_total__card_monto_secondary text-center">
                      Gs. 612.908.572.547
                    </Card.Text>
                  </Card.Body>
                  <Link className="text-center" to={"/urbanismo"}>
                    <Button className="button__secundary align-self-center grow  mb-3">
                      Ver Mas
                    </Button>
                  </Link>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default DetalleMinisterio;
