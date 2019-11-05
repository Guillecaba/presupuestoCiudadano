import React from 'react';
import {Card ,Row,Button ,Col} from 'react-bootstrap';
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import billete from "../../assets/images/billete.png";
import ods from "../../assets/images/rueda_color_resize.png";
import moneda from "../../assets/images/moneda.png";
import lupa from "../../assets/images/lupa.png";

const ConoceMas = ()=> {
  return (
    <div className="banner__conoce pt-4">
            <h1 className="text-uppercase font-weight-bold text-center banner__conoce_title grow">
              conocé mas sobre <br /> el presupuesto general de <br /> la
              nación:
            </h1>
            <Row>
              <Col md={3}>
                <Fade>
                  <Card>
                    <Card.Img className="grow" variant="top" src={billete} />
                    <Card.Body>
                      <Card.Title className="card__title text-center">
                        ¿Qué es el presupuesto y cómo se financia?
                      </Card.Title>
                    </Card.Body>
                    <Link className="text-center" to={"/financiacion"}>
                      <Button className="button__primary align-self-center   grow mb-3">
                        Ver más
                      </Button>
                    </Link>
                  </Card>
                </Fade>
              </Col>
              <Col md={3}>
                <Fade>
                  <Card>
                    <Card.Img className="grow " variant="top" src={moneda} />
                    <Card.Body>
                      <Card.Title className="card__title text-center">
                        ¿En qué se gasta el presupuesto?
                      </Card.Title>
                    </Card.Body>
                    <Link className="text-center" to={"/gasto"}>
                      <Button className="button__primary align-self-center  grow   mb-3">
                        Ver más
                      </Button>
                    </Link>
                  </Card>
                </Fade>
              </Col>
              <Col md={3}>
                <Fade>
                  <Card>
                    <Card.Img className="gro img-ods   " src={ods} />
                    <Card.Body>
                      <Card.Title className="card__title text-center">
                        ¿El PGN está vinculado a los ODS?
                      </Card.Title>
                    </Card.Body>
                    <Link className="text-center" to={"/ods"}>
                      <Button className="button__primary align-self-center  grow   mb-3">
                        Ver más
                      </Button>
                    </Link>
                  </Card>
                </Fade>
              </Col>
              <Col md={3}>
                <Fade>
                  <Card>
                    <Card.Img className="grow " variant="top" src={lupa} />
                    <Card.Body>
                      <Card.Title className="card__title text-center">
                        ¿Cómo se ejecuta el presupuesto?
                      </Card.Title>
                    </Card.Body>
                    <Link className="text-center" to={"/ejecucion"}>
                      <Button className="button__primary align-self-center grow  mb-3">
                        Ver más
                      </Button>
                    </Link>
                  </Card>
                </Fade>
              </Col>
            </Row>
          </div>
  )
}

export default ConoceMas;