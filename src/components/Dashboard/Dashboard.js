import React, { Component } from "react";
import axios from "axios";
import { Dropdown, Container } from "react-bootstrap";
import {HorizontalBar} from 'react-chartjs-2';
import ReactLoading from 'react-loading';




class Dashboard extends Component {



  constructor(props) {
    super(props);
    this.state = { 
      ministerios: null,
      data:{
        labels: [0,0,0],
        datasets: [
          {
            label: 'Cantidad de votos',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [0,0,0]
          }
        ]
      },
      data2:{
        labels: [0,0,0],
        datasets: [
          {
            label: 'Cantidad de votos',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [0,0,0]
          }
        ]
      },
      descripcion:null,
      descripcion2:null,
      

      
    };
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
  }

  handleChart(data) {
    console.log(data)
    let orden=[]
    let cantidad=[]
    data.data.map(res=>{
      console.log(res.orden)
      console.log(res.cantidad)
      const ordenReal = res.orden+1
      orden.push('Posicion: ' + ordenReal)
      cantidad.push(res.cantidad)
    })
    let prevData = this.state.data
    console.log(this.state.data)
    prevData.labels=orden
    prevData.datasets[0].data= cantidad
    console.log(prevData)
    
    this.setState({data:prevData,descripcion:data.descripcion})
  }


  handleChartTopRanking (data) {
    //console.log(data)
    let actividades = [];
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
    
    this.setState({data2:prevData,descripcion2:data.nombre})

   
  }
  render() {
    return (
      <Container className="py-5">
         <h1>Top de mayor interes en actividades por ministerio: {this.state.descripcion2}</h1>
          {this.state.ministerios ? (
         
         <Dropdown>
           <Dropdown.Toggle  className="my-3" variant="info" id="dropdown-basic">
             Ministerios
           </Dropdown.Toggle>
           <Dropdown.Menu>
             {this.state.ministerios.map(res => (
               <Dropdown.Item onClick={ () => this.handleChartTopRanking(res)}>{res.nombre}</Dropdown.Item>
              
             ))}
           </Dropdown.Menu>
         </Dropdown>
         
      
     ):<div className='d-flex justify-content-center'> 
     <ReactLoading type={'bars'} color={'#CBE776'} height={'20%'} width={'20%'} />
     </div>}
     <HorizontalBar data={this.state.data2} />
     <h1 className='py-5'>Detalle de actividad en ministerio: </h1>
      <h2>{this.state.descripcion}</h2>
        
        {this.state.ministerios ? (
         
            <Dropdown>
              <Dropdown.Toggle  className="my-3" variant="info" id="dropdown-basic">
                Ministerios
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {this.state.ministerios.map(res => (
                  <Dropdown>
                    <Dropdown.Toggle
                      variant=""
                      id="dropdown-basic"
                    >{res.nombre}</Dropdown.Toggle>
                    <Dropdown.Menu>
                      {res.actividades.map(res => (
                       <div>
                      <Dropdown.Item onClick={ () => this.handleChart(res)}>{res.descripcion}</Dropdown.Item>
                      
                      </div> 
                    
                      ))}
                      </Dropdown.Menu>
                    
                  </Dropdown>
                ))}
              </Dropdown.Menu>
            </Dropdown>
         
        ):<div className='d-flex justify-content-center'> 
          <ReactLoading type={'bars'} color={'#CBE776'} height={'20%'} width={'20%'} />
          </div>}

        <div>
        
        <HorizontalBar data={this.state.data} />
        </div>

      
     
        </Container>
    );
  }
}
export default Dashboard;
