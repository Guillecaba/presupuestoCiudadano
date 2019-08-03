import React from 'react';
import personitas from '../../assets/images/personitas-completo.png'
import familia from '../../assets/images/familia.png'
import hacienda from '../../assets/images/hacienda.png'
import palacio from '../../assets/images/palacio.png'
import secretarias from '../../assets/images/secretarias.png'
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
      <CardDeck>
  <Card>
    <Card.Img variant="top" src={familia} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={palacio} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={secretarias} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
        <Col md={4}><img className='card__img'  src= {hacienda} alt='hacienda'></img> </Col>
        <Col md={4}><img className='card__img' src={palacio} alt='palacio'></img></Col>
        <Col md={4}><img className='card__img' src={secretarias} alt ='secretarias'></img></Col>
      </Row>
    </Container>

    </div>


    
   
    

    
  )
}

export default Home;