import React from "react";
import personitas from "../../assets/images/personitas-completo.png";
import familia from "../../assets/images/familia.png";
import hacienda from "../../assets/images/hacienda.png";
import palacio from "../../assets/images/palacio.png";
import secretarias from "../../assets/images/secretarias.png";
import presupuestoAprobado from "../../assets/images/presupuesto_aprobado.png";
import billete from "../../assets/images/billete.png";
import moneda from "../../assets/images/moneda.png";
import lapiz from "../../assets/images/lapiz.png";
import lupa from "../../assets/images/lupa.png";
import escuela from "../../assets/images/escuela.png";
import corazon from "../../assets/images/corazon.png";
import camino from "../../assets/images/camino.png";
import casa from "../../assets/images/casa.png";
import { Container, Col, Row, Button, Card, CardDeck } from "react-bootstrap";
import "./Home.css";


const Home = () => {
  return (
    <div>
      <div className="banner">
        <Container>
          <Row>
            <Col md={6}>
              <img className="banner__img" src={personitas} alt="Personitas" />
            </Col>
            <Col className="banner__text" md={6}>
              <h1 className='banner__text_title'>ENTENDIENDO EL PRESUPUESTO GENERAL DE LA NACIÓN</h1>
              <Button className='button__primary'>Ver más</Button>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <div className="banner__preparar">
          <Row className="familia">
            <Col className="familia__text" md={6}>
              <h1 className='familia__text_title'>
                Así como una familia debe <br /> <span className='familia_text_title_span'> preparar un presupuesto</span>  para llegar a
                fin de mes...
              </h1>
            </Col>
            <Col md={6}>
              <img className="familia__img" src={familia} alt="familia" />
            </Col>
          </Row>
        </div>

        <div className="banner__elabora">
          <h1 className="banner__elabora_title">el Gobierno elabora el <br/> <span className='banner__elabora_title_span'>presupuesto general de la nación </span> <br/>para cada año.</h1>
          <Row>
            <Col md={4}>
              <img className="card__img" src={hacienda} alt="hacienda" />{" "}
            </Col>
            <Col md={4}>
              <img className="card__img" src={palacio} alt="palacio" />
            </Col>
            <Col md={4}>
              <img className="card__img" src={secretarias} alt="secretarias" />
            </Col>
          </Row>
        </div>
        <div className="banner__cumplir">
          <Row>
            <Col md={6}>
              <img
                className="banner__cumplir__img"
                src={presupuestoAprobado}
                alt="presupuesto aprobado"
              />
            </Col>
            <Col className='banner__cumplir_text' md={6}>
              <p className='banner__cumplir_text_title'>
                En el presupuesto se estiman los ingresos y los gastos
                prioritarios <span className='font-weight-bold text-uppercase'> para cumplir las funciones del GOBIERNO</span>
              </p>
            </Col>
          </Row>
        </div>

        <div className="banner__conoce">
          <h1 className="text-uppercase font-weight-bold text-center banner__conoce_title">conocé más sobre <br /> el presupuesto general de <br /> la nación:</h1>
          <Row>
            <Col md={3}>
              <Card>
                <Card.Img variant="top" src={billete} />
                <Card.Body>
                  <Card.Title className="card__title text-center">
                    ¿Qué es el presupuesto y cómo se financia?
                  </Card.Title>
                  
                </Card.Body>
                <Button className="button__primary align-self-center  w-50" >Ver Más</Button>
              </Card>
            </Col>
            <Col md={3}>
              <Card >
                <Card.Img variant="top" src={moneda} />
                <Card.Body>
                  <Card.Title className="card__title text-center">¿En qué se gasta el presupuesto?</Card.Title>
                  
                </Card.Body>
                <Button className="button__primary align-self-center  w-50">Ver Más</Button>
              </Card>
            </Col>
            <Col md={3}>
              <Card>
                <Card.Img variant="top" src={lapiz} />
                <Card.Body>
                  <Card.Title className="card__title text-center">¿Cómo se elabora el presupuesto?</Card.Title>
                  
                </Card.Body>
                <Button className="button__primary align-self-center  w-50">Ver Más</Button>
              </Card>
            </Col>
            <Col md={3}>
              <Card>
                <Card.Img variant="top" src={lupa} />
                <Card.Body>
                  <Card.Title className="card__title text-center">¿Cómo se ejecuta el presupuesto?</Card.Title>
                 
                </Card.Body>
                <Button className="button__primary align-self-center  w-50">Ver Más</Button>
              </Card>
            </Col>
          </Row>
        </div>

        <div className="presupuesto_total mb-5">
          <h1 className="presupuesto_total__title text-center" >PRESUPUESTO TOTAL 2020</h1>
          <h2 className="presupuesto_total__subtitle  mb-5 ">Gs. 242.501.234.454</h2>
          <Row>
            <Col md={3}>
              <Card>
                <Card.Img className='w-50 align-self-center' src={escuela} />
                <Card.Body>
                  <Card.Title className="presupuesto_total__card_title text-center" >Ministerio de Educación y Ciencias</Card.Title>
                  <Card.Text className="presupuesto_total__card_title text-center">Gs. 6.562.729.598.658</Card.Text>
                  
                </Card.Body>
                <Button  className="button__secundary align-self-center  w-50" >Ver Más</Button>
              </Card>
            </Col>
            <Col md={3}>
              <Card>
                <Card.Img className='w-50 align-self-center'  src={corazon} />
                <Card.Body>
                  <Card.Title  className="presupuesto_total__card_title text-center">
                    Ministerio de Salud y Bienestar social
                  </Card.Title>
                  <Card.Text className="presupuesto_total__card_title text-center">Gs. 5.518.667.479.787</Card.Text>
                  
                </Card.Body>
                <Button   className="button__secundary align-self-center  w-50" >Ver Más</Button>
              </Card>
            </Col>
            <Col md={3}>
              <Card>
                <Card.Img className='w-50 align-self-center' src={camino} />
                <Card.Body>
                  <Card.Title  className="presupuesto_total__card_title text-center">
                    Ministerio de Obras Públicas y Comunicaciones
                  </Card.Title>

                  <Card.Text className="presupuesto_total__card_title text-center">Gs. 8.041.969.626.615</Card.Text>
                 
                </Card.Body>
                <Button  className="button__secundary align-self-center  w-50" >Ver Más</Button>
              </Card>
            </Col>
            <Col md={3}>
              <Card>
                <Card.Img className='w-50 align-self-center'  src={casa} />
                <Card.Body>
                  <Card.Title  className="presupuesto_total__card_title text-center">
                    Ministerio de Urbanismo, Vivienda y Hábitat
                  </Card.Title>
                  <Card.Text className="presupuesto_total__card_title text-center">Gs. 612.908.572.547</Card.Text>
                  
                </Card.Body>
                <Button   className="button__secundary align-self-center  w-50">Ver Más</Button>
              </Card>
            </Col>
          </Row>
        </div>
        </Container>
        
        <div className="information py-5 ">
        <Container>
          <Row>
            <Col md={5}>
              <img className="w-100" src={personitas} alt="Personitas" />
            </Col>
            <Col md={7}>
              <h2 className='text-uppercase font-weigth-bold information__title'>informate</h2>
              <p className='informartion__subtitle'>
                Conocer el Presupuesto es esencial para conocer que usos se le
                dan a tus impuestos, cuáles son las prioridades de las
                instituciones públicas y cuánto se gasta en salud, educación,
                obras, justicia y otros servicios que determinan tu calidad de
                vida.
              </p>
              <Button className='button__secundary'>Descargá la guía</Button>
            </Col>
          </Row>
          </Container>
        </div>
      
    </div>
  );
};

export default Home;
