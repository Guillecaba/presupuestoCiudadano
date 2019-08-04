import React from 'react';
import personitas from '../../assets/images/personitas-completo.png'
import familia from '../../assets/images/familia.png'
import hacienda from '../../assets/images/hacienda.png'
import palacio from '../../assets/images/palacio.png'
import secretarias from '../../assets/images/secretarias.png'
import presupuestoAprobado from '../../assets/images/presupuesto_aprobado.png'
import billete from '../../assets/images/billete.png'
import moneda from '../../assets/images/moneda.png'
import lapiz from '../../assets/images/lapiz.png'
import lupa from '../../assets/images/lupa.png'
import escuela from '../../assets/images/escuela.png'
import corazon from '../../assets/images/corazon.png'
import camino from '../../assets/images/camino.png'
import casa from '../../assets/images/casa.png'
import {Container, Col, Row , Button, Card, CardDeck} from 'react-bootstrap'
import './Home.css';
const Home = () => {
  return (
    <div>
    <Container>
      <Row className='banner'>
        <Col md={6}>
          <img className='banner__img' src={personitas} alt="Personitas"></img>
        </Col>
        <Col md= {6}>
        <h1>ENTENDIENDO EL PRESUPUESTO GENERAL DE LA NACIÓN</h1>
        <Button>Ver más</Button>
        </Col>
      </Row>
    </Container>
    <Container>
      <Row className="familia">
        <Col md={6}>
          <h1>Así como una familia debe    
            preparar un presupuesto para llegar a fin de mes...</h1>
        </Col>
        <Col md={6}>
          <img className='familia__img' src ={familia} alt="familia"></img>
        </Col>
      </Row>
    </Container>

    <Container>
      <h1>el Gobierno elabora el</h1>
      <h1>presupuesto general de la nación</h1>
      <h1>para cada año.</h1>
      <Row>
        <Col md={4}><img className='card__img'  src= {hacienda} alt='hacienda'></img> </Col>
        <Col md={4}><img className='card__img' src={palacio} alt='palacio'></img></Col>
        <Col md={4}><img className='card__img' src={secretarias} alt ='secretarias'></img></Col>
      </Row>
    </Container>
    <Container>
      <Row className='banner_cumplir'>
      <Col md={6}><img className='banner_cumplir__img' src={presupuestoAprobado} alt='presupuesto aprobado'></img></Col>
      <Col md={6}><p>En el presupuesto se estiman los ingresos y los gastos prioritarios para cumplir las funciones del GOBIERNO</p></Col>
      </Row>
      
    </Container>
    <Container>
        <h1>conocé más sobre el presupuesto general de la nación:</h1>
        <Row>
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={billete} />
            <Card.Body>
              <Card.Title>¿Qué es el presupuesto y cómo se financia?</Card.Title>
              <Button variant="primary">Ver Más</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
        <Card>
            <Card.Img variant="top" src={moneda} />
            <Card.Body>
              <Card.Title>¿En qué se gasta el presupuesto?</Card.Title>
              <Button variant="primary">Ver Más</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
        <Card>
            <Card.Img variant="top" src={lapiz} />
            <Card.Body>
              <Card.Title>¿Cómo se elabora el presupuesto?</Card.Title>
              <Button variant="primary">Ver Más</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
        <Card>
            <Card.Img variant="top" src={lupa} />
            <Card.Body>
              <Card.Title>¿Cómo se ejecuta el presupuesto?</Card.Title>
              <Button variant="primary">Ver Más</Button>
            </Card.Body>
          </Card>
        </Col>
        </Row>
    </Container>

    <Container>
        <h1>PRESUPUESTO TOTAL 2020</h1>
        <h2>Gs. 242.501.234.454</h2>
        <Row>
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={escuela} />
            <Card.Body>
              <Card.Title>Ministerio de Educación y Ciencias</Card.Title>
              <Card.Text>
              Gs. 6.562.729.598.658
              </Card.Text>
              <Button variant="primary">Ver Más</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
        <Card>
            <Card.Img variant="top" src={corazon} />
            <Card.Body>
              <Card.Title>Ministerio de Salud y Bienestar social</Card.Title>
              <Card.Text>
              Gs. 5.518.667.479.787
              </Card.Text>
              <Button variant="primary">Ver Más</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
        <Card>
            <Card.Img variant="top" src={camino} />
            <Card.Body>
              <Card.Title>Ministerio de Obras Públicas y Comunicaciones</Card.Title>
             
              <Card.Text>
              Gs. 8.041.969.626.615
              </Card.Text>
              <Button variant="primary">Ver Más</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
        <Card>
            <Card.Img variant="top" src={casa} />
            <Card.Body>
            <Card.Title>Ministerio de Urbanismo, Vivienda y Hábitat</Card.Title>
              <Card.Text>
              Gs. 612.908.572.547
              </Card.Text>
              <Button variant="primary">Ver Más</Button>
            </Card.Body>
          </Card>
        </Col>
        </Row>
        <div className='information'>
          <Row>
            <Col md={5}>
            <img className='banner__img' src={personitas} alt="Personitas"></img>
            </Col>
            <Col md={7}>
              <h2>informate</h2>
              <p>Conocer el Presupuesto es esencial para conocer que usos se le dan a tus impuestos, cuáles son las prioridades de las instituciones públicas y cuánto se gasta en salud, educación, obras, justicia y otros servicios que determinan tu calidad de vida.</p>
              <Button variant="primary">Descargá la guía</Button>
            </Col>
          </Row>
        </div>
    </Container>
    

    </div>


    
   
    

    
  )
}

export default Home;