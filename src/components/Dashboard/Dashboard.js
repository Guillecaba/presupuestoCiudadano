import React, { Component, Fragment } from "react";
import axios from "axios";
import {
  Dropdown,
  Container,
  Table,
  Pagination,
  Button,
  Card,
  Row,
  Col
} from "react-bootstrap";
import { HorizontalBar } from "react-chartjs-2";
import ReactLoading from "react-loading";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ministerios: null,
      data: {
        labels: [0, 0, 0],
        datasets: [
          {
            label: "Cantidad de votos",
            backgroundColor: "#E16163",
            borderColor: "#E16163",
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
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [0, 0, 0]
          }
        ]
      },
      descripcion: null,
      descripcion2: null,
      listaComentarios: null
    };
    this.handleReport = this.handleReport.bind(this);
  }
  componentDidMount() {
    const url = `https://presupuesto-ciudadano.herokuapp.com/v1/report`;
    axios.get(url).then(res => {
      console.log(res.data);
      const ministerios = res.data;
      console.log(ministerios);
      this.setState({ ministerios });

      console.log(this.state.ministerios);
    });
    /* const url2 = `http://localhost:8000/v1/respuestas-report/?ministerio__slug=${data.slug}&`;
    axios.get(url2).then((res)=>{
      const datos = res.data
      this.setState({listaComentarios:datos})
      console.log(this.state.listaComentarios)
      //this.state.lista =res.data
     
    }) */
  }

  handleChart(data) {
    console.log(data);
    let orden = [];
    let cantidad = [];
    data.data.map(res => {
      console.log(res.orden);
      console.log(res.cantidad);
      const ordenReal = res.orden + 1;
      orden.push("Posicion: " + ordenReal);
      cantidad.push(res.cantidad);
    });
    let prevData = this.state.data;
    console.log(this.state.data);
    prevData.labels = orden;
    prevData.datasets[0].data = cantidad;
    console.log(prevData);

    this.setState({ data: prevData, descripcion: data.descripcion });
  }

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

  handleReport(data) {
    console.log(data.slug);
    const url = `http://presupuesto-ciudadano.herokuapp.com/v1/respuestas-report/?ministerio__slug=${data.slug}&`;
    axios.get(url).then(res => {
      const datos = res.data;
      console.log(res.data)
      this.setState({ listaComentarios: datos });
      console.log(this.state.listaComentarios);
      //this.state.lista =res.data
    });
  }

  handlePagination(data) {
    console.log(data);
    if (data === "next") {
      const url = this.state.listaComentarios.next;
      axios.get(url).then(res => {
        const datos = res.data;
        this.setState({ listaComentarios: datos });
        console.log(this.state.listaComentarios);
        //this.state.lista =res.data
      });
    }
    if (data == "prev") {
      const url = this.state.listaComentarios.previous;
      axios.get(url).then(res => {
        const datos = res.data;
        this.setState({ listaComentarios: datos });
        console.log(this.state.listaComentarios);
        //this.state.lista =res.data
      });
    }
  }

  render() {
    return (
      <Container className="py-5">
        <Row>
          <Col md={12}>
          <Card bg="light">
              <Card.Header as="h5">Mayor Prioridad por Ministerio</Card.Header>
              <Card.Body>
                <Card.Title>
                  
                  {this.state.descripcion2}
                
                </Card.Title>
                <Card.Text>
                  <HorizontalBar options={{
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
                      }} data={this.state.data2} />
                </Card.Text>
                {this.state.ministerios ? (
                    <Dropdown>
                      <Dropdown.Toggle
                        className="my-3"
                        variant="info"
                        id="dropdown-basic"
                      >
                        Ministerios
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
                  ) : (
                    <div className="d-flex justify-content-center">
                      <ReactLoading
                        type={"bars"}
                        color={"#CBE776"}
                        height={"20%"}
                        width={"20%"}
                      />
                    </div>
                  )}{" "}
              </Card.Body>
            </Card>
          </Col>
          <Col md={12}>
          <Card bg="light">
              <Card.Header as="h5">Votos en cada actividad de ministerios</Card.Header>
              <Card.Body>
                <Card.Title>
                {this.state.descripcion}
             </Card.Title>
             <div>
          <HorizontalBar options={{
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
                      }} data={this.state.data} />
          {this.state.ministerios ? (
          <Dropdown>
            <Dropdown.Toggle
              className="my-3"
              variant="info"
              id="dropdown-basic"
            >
              Ministerios
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {this.state.ministerios.map(res => (
                <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown-basic">
                    {res.nombre}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {res.actividades.map(res => (
                      <div>
                        <Dropdown.Item onClick={() => this.handleChart(res)}>
                          {res.descripcion}
                        </Dropdown.Item>
                      </div>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              ))}
            </Dropdown.Menu>
          </Dropdown>
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
        </div>
              </Card.Body>
            </Card>
          
          </Col>
        </Row>

        {/* <h1>
          Top de mayor interes en actividades por ministerio:{" "}
          {this.state.descripcion2}
        </h1>
        {this.state.ministerios ? (
          <Dropdown>
            <Dropdown.Toggle
              className="my-3"
              variant="info"
              id="dropdown-basic"
            >
              Ministerios
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {this.state.ministerios.map(res => (
                <Dropdown.Item onClick={() => this.handleChartTopRanking(res)}>
                  {res.nombre}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
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
        <HorizontalBar data={this.state.data2} />
        <h1 className="py-5">Detalle de actividad en ministerio: </h1>
        <h2>{this.state.descripcion}</h2>

        {this.state.ministerios ? (
          <Dropdown>
            <Dropdown.Toggle
              className="my-3"
              variant="info"
              id="dropdown-basic"
            >
              Ministerios
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {this.state.ministerios.map(res => (
                <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown-basic">
                    {res.nombre}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {res.actividades.map(res => (
                      <div>
                        <Dropdown.Item onClick={() => this.handleChart(res)}>
                          {res.descripcion}
                        </Dropdown.Item>
                      </div>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              ))}
            </Dropdown.Menu>
          </Dropdown>
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

        <div>
          <HorizontalBar data={this.state.data} />
        </div> */}
        <Row>
          <Col>
            <Card className ="mt-5" bg="light">
            <Card.Header as="h5">Lista de comentarios por ministerio
            {this.state.ministerios  ? (
                  <Dropdown>
                    <Dropdown.Toggle
                      className="my-3"
                      variant="info"
                      id="dropdown-basic"
                    >
                      Ministerios
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {this.state.ministerios.map(res => (
                        <Dropdown.Item onClick={() => this.handleReport(res)}>
                          {res.nombre}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
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
                </Card.Header>
                <Card.Body>
                <Table responsive>
              <thead>
                <tr>
                  <th>Comentarios</th>
                </tr>
              </thead>
              <tbody>
                {this.state.listaComentarios && 
                <div>

                
              {this.state.listaComentarios.results.map(res => (
                  <tr>
                    <td>{res.comentario}</td>
                  </tr>
                ))}
                </div>
                }
                </tbody>
                </Table>
                <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li
                  class="page-item"
                  onClick={() => this.handlePagination("prev")}
                >
                  <a class="page-link">Anterior</a>
                </li>

                <li
                  class="page-item"
                  onClick={() => this.handlePagination("next")}
                >
                  <a class="page-link">Siguiente</a>
                </li>
              </ul>
            </nav>
                </Card.Body>
            </Card>
          </Col>
        </Row>
       
           
          
      
          <div></div>
       
      </Container>
    );
  }
}
export default Dashboard;
