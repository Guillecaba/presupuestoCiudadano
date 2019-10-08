import React from 'react'
import { Container, Row , Col , Card , Button  } from 'react-bootstrap'
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import escuela from "../../assets/images/escuela.png";
import cruz from "../../assets/images/cruz.png";
import desarrollo from "../../assets/images/desarrollo.png"
import construccion from "../../assets/images/construccion.png"
import "../Home/Home.css"

const BannerMinisterios = () => {
  return (
    <div className="presupuesto_total_ministerios  py-5">
    <Container>
      <Row>
        <Col>
        <h2 className="text-center text-uppercase presupuesto_total__title pb-4">Te mostramos la información de 4 ministerios</h2>
        </Col>
      </Row>
      <Row>
      
        <Col md={3}>
          <Fade>
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
                  Gs. 9,243 billones
                </Card.Text>
                <Card.Text className="presupuesto_total__card_monto_secondary text-center">
                  Gs. 9.243.946.951.188
                </Card.Text>
              </Card.Body>
              <Link className="text-center" to={"/educacion"}>
                <Button className="button__secundary align-self-center grow   mb-3">
                  Ver Mas
                </Button>
              </Link>
            </Card>
          </Fade>
        </Col>
        <Col md={3}>
          <Fade>
            <Card className="card-ministerio">
              <Card.Img
                className="w-25 align-self-center grow"
                src={cruz}
              />
              <Card.Body>
                <Card.Title className="presupuesto_total__card_title text-center">
                  Ministerio de Salud Pública y Bienestar social
                </Card.Title>
                <Card.Text className="presupuesto_total__card_monto_primary  text-center">
                  Gs. 5,823 billones
                </Card.Text>
                <Card.Text className="presupuesto_total__card_monto_secondary  text-center">
                  Gs. 5.823.285.397.358
                </Card.Text>
              </Card.Body>
              <Link className="text-center" to={"/salud"}>
                <Button className="button__secundary align-self-center grow  mb-3">
                  Ver Mas
                </Button>
              </Link>
            </Card>
          </Fade>
        </Col>
        <Col md={3}>
          <Fade>
            <Card className="card-ministerio">
              <Card.Img
                className="w-25 align-self-center grow"
                src={construccion}
              />
              <Card.Body>
                <Card.Title className="presupuesto_total__card_title text-center">
                  Ministerio de Obras Públicas y Comunicaciones
                </Card.Title>

                <Card.Text className="presupuesto_total__card_monto_primary text-center">
                  Gs. 5,245 billones
                </Card.Text>
                <Card.Text className="presupuesto_total__card_monto_secondary text-center">
                  Gs. 5.245.803.832.513
                </Card.Text>
              </Card.Body>
              <Link className="text-center" to={"/obras"}>
                <Button className="button__secundary align-self-center grow  mb-3">
                  Ver Mas
                </Button>
              </Link>
            </Card>
          </Fade>
        </Col>
        <Col md={3}>
          <Fade>
            <Card className="card-ministerio ">
              <Card.Img
                className="w-25 align-self-center grow "
                src={desarrollo}
              />
              <Card.Body>
                <Card.Title className="presupuesto_total__card_title text-center">
                Ministerio de <br></br> Desarrollo social
                </Card.Title>
                <Card.Text className="presupuesto_total__card_monto_primary text-center">
                  Gs. 0,524 billones{" "}
                </Card.Text>
                <Card.Text className="presupuesto_total__card_monto_secondary text-center">
                  Gs. 524.872.980.571
                </Card.Text>
              </Card.Body>
              <Link className="text-center" to={"/desarrollo"}>
                <Button className="button__secundary align-self-center grow  mb-3">
                  Ver Mas
                </Button>
              </Link>
            </Card>
          </Fade>
        </Col>
      </Row>
    </Container>
  </div>
  )
}

export default BannerMinisterios