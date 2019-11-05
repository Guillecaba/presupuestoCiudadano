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

import {
  Row,
  Col,
  Container,
  InputGroup,
  FormControl,
  Table,
  Button,
  Card,
  Dropdown,
  OverlayTrigger,
  Tooltip,
  Popover
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
import Sunburst from "../../components/Sunburst/Sunburst";
import "../Detalle/Detalle.css";
import NumberFormat from "react-number-format";
import flecha from "../../assets/icons/arrows.png";

import ContainerDimensions from "react-container-dimensions";

const DragHandle = sortableHandle(() => (
  <img src={flecha} className="img-flecha" alt="flecha"></img>
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

  index = 0;
  maxIndex = 11;
  colores = [
    {h:209,s:0.79 ,l:0.63 ,opacity:1},
    {h:175,s:0.65 ,l:0.5 ,opacity:1},
    {h:70,s:0.70 ,l:0.68 ,opacity:1},
    {h:24,s:0.87 ,l:0.62 ,opacity:1},
    {h:359,s:0.68 ,l:0.63 ,opacity:1},
    {h:340,s:0.84 ,l:0.62 ,opacity:1},
    {h:44,s:0.94 ,l:0.61 ,opacity:1},
    {h:288,s:0.77 ,l:0.70 ,opacity:1},
    {h:240,s:0.78 ,l:0.77 ,opacity:1},
    {h:71,s:0.51 ,l:0.50 ,opacity:1},
    {h:326,s:0.76 ,l:0.74 ,opacity:1},
    {h:241,s:0.62 ,l:0.60 ,opacity:1},
    

  ]

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
    color.h=this.colores[this.index].h;
    color.s=this.colores[this.index].s;
    color.opacity=this.colores[this.index].opacity;
    color.l=this.colores[this.index].l;
    let nodoNuevo = { ...nodo, color: color };
    console.log(nodoNuevo);
    this.index++;
    if(this.index >= this.maxIndex) {
      console.log('EY',this.index)
        this.index= 0
    }
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
    this.index=0;

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
    this.index = 0;

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

          const pathname = this.props.location.pathname;

          switch(pathname) {
            case '/educacion':
              localStorage.setItem('educacion','true')
              break;
            case '/obras':
              localStorage.setItem('obras','true')
              break;
            case '/salud':
              localStorage.setItem('salud','true')
              break
            case '/desarrollo':
              localStorage.setItem('desarrollo','true')
              break
            default:
              
          }
          

          /*  console.log(res.data); */

          const url = `https://presupuesto-ciudadano.herokuapp.com/v1/report`;
          axios.get(url).then(res => {
            const ministerios = res.data;
            this.setState({ ministerios });
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

  votosPorcentaje = (actividadVoto) => {
    console.log('VOTOPORCENTAJE: ',porcentaje)
    let cantidadVotos = 0;
    this.state.data2.datasets[0].data.forEach( item =>{
      cantidadVotos += item;
    })

    let porcentaje = actividadVoto/ cantidadVotos
    

   
    return porcentaje +'%'
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

                if (localStorage.getItem('educacion')) {
                
                
              
          
                  const url = `https://presupuesto-ciudadano.herokuapp.com/v1/report`;
                  axios.get(url).then(res => {
                    const ministerios = res.data;
                    this.setState({ ministerios });
                    this.setState({ loading: false });
                    this.setState({ enviado: true });
        
                    console.log(this.state.ministerios);
                    console.log(this.state.items[0].ministerio);
                    this.state.ministerios.map(res => {
                      if (this.state.items[0].ministerio == res.id) {
                        this.handleChartTopRanking(res);
                      }
                    });
                   
                  });
                  
                }

               
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


                if (localStorage.getItem('obras')) {
          
                  const url = `https://presupuesto-ciudadano.herokuapp.com/v1/report`;
                  axios.get(url).then(res => {
                    const ministerios = res.data;
                    this.setState({ ministerios });
                    this.setState({ loading: false });
                    this.setState({ enviado: true });
        
                    console.log(this.state.ministerios);
                    console.log(this.state.items[0].ministerio);
                    this.state.ministerios.map(res => {
                      if (this.state.items[0].ministerio == res.id) {
                        this.handleChartTopRanking(res);
                      }
                    });
                   
                  });
                  
                }
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

                if (localStorage.getItem('salud')) {
                
                
              
          
                  const url = `https://presupuesto-ciudadano.herokuapp.com/v1/report`;
                  axios.get(url).then(res => {
                    const ministerios = res.data;
                    this.setState({ ministerios });
                    this.setState({ loading: false });
                    this.setState({ enviado: true });
        
                    console.log(this.state.ministerios);
                    console.log(this.state.items[0].ministerio);
                    this.state.ministerios.map(res => {
                      if (this.state.items[0].ministerio == res.id) {
                        this.handleChartTopRanking(res);
                      }
                    });
                   
                  });
                  
                }

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

                if (localStorage.getItem('desarrollo')) {
                
                
              
          
                  const url = `https://presupuesto-ciudadano.herokuapp.com/v1/report`;
                  axios.get(url).then(res => {
                    const ministerios = res.data;
                    this.setState({ ministerios });
                    this.setState({ loading: false });
                    this.setState({ enviado: true });
        
                    console.log(this.state.ministerios);
                    console.log(this.state.items[0].ministerio);
                    this.state.ministerios.map(res => {
                      if (this.state.items[0].ministerio == res.id) {
                        this.handleChartTopRanking(res);
                      }
                    });
                   
                  });
                  
                }

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

              if (localStorage.getItem('educacion')) {
                
                
              
          
                const url = `https://presupuesto-ciudadano.herokuapp.com/v1/report`;
                axios.get(url).then(res => {
                  const ministerios = res.data;
                  this.setState({ ministerios });
                  this.setState({ loading: false });
                  this.setState({ enviado: true });
      
                  console.log(this.state.ministerios);
                  console.log(this.state.items[0].ministerio);
                  this.state.ministerios.map(res => {
                    if (this.state.items[0].ministerio == res.id) {
                      this.handleChartTopRanking(res);
                    }
                  });
                 
                });
                
              }
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

              if (localStorage.getItem('obras')) {
                
                
              
          
                const url = `https://presupuesto-ciudadano.herokuapp.com/v1/report`;
                axios.get(url).then(res => {
                  const ministerios = res.data;
                  this.setState({ ministerios });
                  this.setState({ loading: false });
                  this.setState({ enviado: true });
      
                  console.log(this.state.ministerios);
                  console.log(this.state.items[0].ministerio);
                  this.state.ministerios.map(res => {
                    if (this.state.items[0].ministerio == res.id) {
                      this.handleChartTopRanking(res);
                    }
                  });
                 
                });
                
              }

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

              if (localStorage.getItem('salud')) {
                
                
              
          
                const url = `https://presupuesto-ciudadano.herokuapp.com/v1/report`;
                axios.get(url).then(res => {
                  const ministerios = res.data;
                  this.setState({ ministerios });
                  this.setState({ loading: false });
                  this.setState({ enviado: true });
      
                  console.log(this.state.ministerios);
                  console.log(this.state.items[0].ministerio);
                  this.state.ministerios.map(res => {
                    if (this.state.items[0].ministerio == res.id) {
                      this.handleChartTopRanking(res);
                    }
                  });
                 
                });
                
              }



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

              if (localStorage.getItem('desarrollo')) {
                
          
                const url = `https://presupuesto-ciudadano.herokuapp.com/v1/report`;
                axios.get(url).then(res => {
                  const ministerios = res.data;
                  this.setState({ ministerios });
                  this.setState({ loading: false });
                  this.setState({ enviado: true });
      
                  console.log(this.state.ministerios);
                  console.log(this.state.items[0].ministerio);
                  this.state.ministerios.map(res => {
                    if (this.state.items[0].ministerio == res.id) {
                      this.handleChartTopRanking(res);
                    }
                  });
                 
                });
                
              }

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
          prefix={"G "}
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
                  <h1 className="text-center text-uppercase">
                    {state.banner.datos.nombre}
                  </h1>
                </Fade>
                <a
                  className="text-decoration-none"
                  href={this.props.location.pathname + "#participacion"}
                >
                  <button className="button__secondary   d-block mx-auto ">
                    Participá
                  </button>
                </a>

                <Row className="pt-5">
                  <Col className="pb-5" md={4}>
                    <h3 className="">Estructura por clases de programas: </h3>
                    <ul>
                      <li className="banner__principal_item_central">
                        <div className="d-flex align-items-start justify-content-end">
                          <p className="banner__principal_item">
                            Programa Central
                          </p>
                          <OverlayTrigger
                            trigger="click"
                            overlay={
                              <Popover id={`popover-positioned-central`}>
                                <Popover.Title as="h3">{` Programa Central `}</Popover.Title>
                                <Popover.Content>
                                  Comprende las actividades orientadas a la
                                  gestión institucional, es decir, aquellas de
                                  apoyo transversal para todos los programas de
                                  la institución, y/o aquellas misionales que
                                  tengan un resultado esperado pero que no
                                  arrojen una producción final. Puede tener
                                  proyectos de inversión siempre y cuando los
                                  mismos sean destinados al fortalecimiento
                                  institucional y no se vinculen a los
                                  resultados de los programas presupuestarios
                                  sustantivos
                                </Popover.Content>
                              </Popover>
                            }
                          >
                            <span>
                              <img className=" icon" src={help}></img>{" "}
                            </span>
                          </OverlayTrigger>
                        </div>

                        <p className="banner__principal_item_monto text-right">
                          {state.banner.datos.programas[0].monto}
                        </p>
                      </li>
                      <li>
                        <ul>
                          <li className="banner__principal_item_one ml-5 justify-content-end">
                            <div className="d-flex align-items-start justify-content-end">
                              <p className="banner__principal_item text-right">
                                Misional
                              </p>
                              <OverlayTrigger
                                trigger="click"
                                overlay={
                                  <Popover id={`popover-positioned-proyecto`}>
                                    <Popover.Title as="h3">{`Misional `}</Popover.Title>
                                    <Popover.Content>
                                      En la definición de este tipo de
                                      actividades a incluir en este programa, es
                                      necesario reconocer cuales acciones
                                      Misionales se realizan con un resultado
                                      esperado claro pero sin generar un bien
                                      y/o servicio, como la generación de
                                      políticas, o cualquier producción que
                                      responda a la demanda y no a la oferta,
                                      como ser el registro de empresas o
                                      controles y acreditaciones.
                                    </Popover.Content>
                                  </Popover>
                                }
                              >
                                <span>
                                  <img className=" icon" src={help}></img>{" "}
                                </span>
                              </OverlayTrigger>
                            </div>
                            <p className="banner__principal_item_monto text-right">
                              {state.banner.datos.programas[1].monto}
                            </p>
                          </li>
                          <li className="banner__principal_item_two ml-5 justify-content-end">
                            <div className="d-flex align-items-start justify-content-end">
                              <p className="banner__principal_item text-right">
                                Administrativo
                              </p>
                              <OverlayTrigger
                                trigger="click"
                                overlay={
                                  <Popover id={`popover-positioned-proyecto`}>
                                    <Popover.Title as="h3">{`Administrativo `}</Popover.Title>
                                    <Popover.Content>
                                      Tipo de actividades generales que hacen al
                                      funcionamiento de la Institución y son
                                      transversales a toda la entidad,
                                      correspondientes a las funciones
                                      administrativas y de fortalecimiento.
                                    </Popover.Content>
                                  </Popover>
                                }
                              >
                                <span>
                                  <img className=" icon" src={help}></img>{" "}
                                </span>
                              </OverlayTrigger>
                            </div>
                            <p className="banner__principal_item_monto text-right">
                              {state.banner.datos.programas[2].monto}
                            </p>
                          </li>
                          <li className="banner__principal_item_three ml-5">
                          <div className="d-flex align-items-start justify-content-end">
                            <p className="banner__principal_item text-right">
                              Proyecto
                            </p>
                            <OverlayTrigger
                            trigger="click"
                            overlay={
                              <Popover id={`popover-positioned-sustantivo`}>
                                <Popover.Title as="h3">{`Proyecto `}</Popover.Title>
                                <Popover.Content>
                                Conjunto de actividades y/u obras con
                                      periodo definido de ejecución para mejorar
                                      la provisión de los bienes y servicios en
                                      el cumplimiento de un resultado.
                                </Popover.Content>
                              </Popover>
                            }
                          >
                            <span>
                              <img className=" icon" src={help}></img>{" "}
                            </span>
                          </OverlayTrigger>
                        </div>
                            <p className="banner__principal_item_monto text-right">
                              {state.banner.datos.programas[3].monto}
                            </p>
                          </li>
                        </ul>
                      </li>

                      <li className="banner__principal_item_four justify-content-end">
                        <div className="d-flex align-items-start justify-content-end">
                          <p className="banner__principal_item">
                            Programa sustantivo
                          </p>
                          <OverlayTrigger
                            trigger="click"
                            overlay={
                              <Popover id={`popover-positioned-sustantivo`}>
                                <Popover.Title as="h3">{` Programas Sustantivos `}</Popover.Title>
                                <Popover.Content>
                                  Son los creados para solucionar problemas
                                  específicos en un tiempo determinado, para
                                  generar resultados concretos y medibles que le
                                  afecten una población bien identificada. Estos
                                  Programas generan productos. De un Programa
                                  Sustantivo, pueden depender proyectos que
                                  contribuyan al resultado que busca el
                                  Programa.
                                </Popover.Content>
                              </Popover>
                            }
                          >
                            <span>
                              <img className=" icon" src={help}></img>{" "}
                            </span>
                          </OverlayTrigger>
                        </div>

                        <p className="banner__principal_item_monto text-right">
                          {state.banner.datos.programas[4].monto}
                        </p>
                      </li>
                      <li>
                        <ul>
                          <li className="banner__principal_item_proyecto ml-5">
                            <div className="d-flex align-items-start justify-content-end">
                              <p className="banner__principal_item">Proyecto</p>
                              <OverlayTrigger
                                trigger="click"
                                overlay={
                                  <Popover id={`popover-positioned-proyecto`}>
                                    <Popover.Title as="h3">{`Proyecto `}</Popover.Title>
                                    <Popover.Content>
                                      Conjunto de actividades y/u obras con
                                      periodo definido de ejecución para mejorar
                                      la provisión de los bienes y servicios en
                                      el cumplimiento de un resultado.
                                    </Popover.Content>
                                  </Popover>
                                }
                              >
                                <span>
                                  <img className=" icon" src={help}></img>{" "}
                                </span>
                              </OverlayTrigger>
                            </div>
                            <p className="banner__principal_item_monto text-right">
                              {state.banner.datos.programas[6].monto}
                            </p>
                          </li>
                          <li className="banner__principal_item_actividad ml-5">
                            <div className="d-flex align-items-start justify-content-end">
                              <p className="banner__principal_item">
                                Actividad
                              </p>
                              <OverlayTrigger
                                trigger="click"
                                overlay={
                                  <Popover id={`popover-positioned-proyecto`}>
                                    <Popover.Title as="h3">{`Actividad `}</Popover.Title>
                                    <Popover.Content>
                                      Es el conjunto de acciones de mínimo nivel
                                      que se llevan a cabo para cumplir las
                                      metas de un programa, que consiste en la
                                      ejecución de ciertos procesos o tareas
                                      mediante la utilización de los recursos
                                      humanos, materiales, técnicos, y
                                      financieros asignados a la actividad con
                                      un costo determinado.
                                    </Popover.Content>
                                  </Popover>
                                }
                              >
                                <span>
                                  <img className=" icon" src={help}></img>{" "}
                                </span>
                              </OverlayTrigger>
                            </div>
                            <p className="banner__principal_item_monto text-right">
                              {state.banner.datos.programas[7].monto}
                            </p>
                          </li>
                        </ul>
                      </li>
                      <li className="banner__principal_item_five">
                        <div className="d-flex align-items-start justify-content-end">
                          <p className="banner__principal_item text-right">
                            Partidas no asignables a Programas
                          </p>
                          <OverlayTrigger
                            trigger="click"
                            overlay={
                              <Popover id={`popover-positioned-no-asignables`}>
                                <Popover.Title as="h3">{`Partidas no asignables `}</Popover.Title>
                                <Popover.Content>
                                  Recogen todas las actividades que de alguna
                                  forma, el Estado tiene que realizar o
                                  presupuestar, pero no expresan Resultado, sino
                                  un compromiso contraído.
                                </Popover.Content>
                              </Popover>
                            }
                          >
                            <span>
                              <img className=" icon" src={help}></img>{" "}
                            </span>
                          </OverlayTrigger>
                        </div>
                        <p className="banner__principal_item_monto text-right">
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
                  Presupuesto del {this.state.banner.datos.nombre} <br />
                  en detalle
                </h1>
                <Row>
                  <Col md={5}>
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
                              return `${data.data.name} ${Math.round((data.value/state.lista.titulo.valor)*100,-2)} % `;
                            }}
                            _debug={false}
                          />
                        )}
                      </ContainerDimensions>
                    </div>
                  </Col>
                  <Col className="d-flex align-items-center" md={7}>
                    <div>
                      {this.state.lista && (
                        <Fragment>
                         

                          <Table className="tabla-grafico" responsive>
                            <thead>
                              <tr>
                                <th width="20%" >Nombre</th>
                                <th width="60%"  className="text-right">Monto</th>
                                <th width="20%"  className="text-right">Porcentaje</th>
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
                                      <td width="20%" className="text-uppercase">{item.nombre}</td>
                                      <td width="60%" className="text-right">
                                        <NumberFormat
                                          value={item.valor}
                                          displayType={"text"}
                                          decimalSeparator={","}
                                          thousandSeparator={"."}
                                          prefix={"G.\r\n"}
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
                      ¿Cuáles serían tus prioridades?.
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
                              }
                            }
                          ],
                          xAxes: [{ display: false ,
                            ticks: {
                              min: 0,
                              
                        
                              // forces step size to be 5 units
                              stepSize: 1 // <----- This prop sets the stepSize
                            }}]
                        },
                        tooltips: {
                          enabled: true,
                          mode: "single",
                          callbacks: {
                            label: function(tooltipItems, data) {
                              let cantidadVotos = 0;
                              data.datasets[0].data.forEach( item =>{
                               cantidadVotos += item;
                              })
                              return (
                                String(data.labels[tooltipItems.index]).substring(0,100)+"..." +data.datasets[tooltipItems.datasetIndex].data[
                                  tooltipItems.index
                                ]+' votos' +
                                " : " +
                                (((data.datasets[tooltipItems.datasetIndex].data[
                                  tooltipItems.index
                                ])/cantidadVotos).toFixed(2))*100 + '%'
                                
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
