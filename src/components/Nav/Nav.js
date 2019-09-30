import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import flecha from "../../assets/images/flecha.png"
//import { HashLink as Link } from 'react-router-hash-link';
import "./Nav.css";

const nav = () => {
  return (
    <>
      <Container>
        <Navbar className="py-4" collapseOnSelect expand="lg">
          <Navbar.Brand className="navbar__title grow">
            <Link className="text-decoration-none nav-link-color" to={"/"}>
              PRESUPUESTO CIUDADANO
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className="navbar__item">
                <Link
                  className="text-decoration-none nav-link-color"
                  to={"/financiacion"}
                >
                  ¿Qué es?
                </Link>
                <img className="arrow" src={flecha} />
              </Nav.Link>

              <Nav.Link className="navbar__item nav-link-color" href="/#proceso">
                Proceso
                <img className="arrow" src={flecha} />
              </Nav.Link>

              <Nav.Link href="ejecucion" className="navbar__item text-decoration-none">
                <Link
                  className="text-decoration-none nav-link-color "
                  to={"/ejecucion"}
                >
                  Ejecución
                </Link>
                <img className="arrow" src={flecha} />
              </Nav.Link>
              <Nav.Link className="navbar__item">
                <Link className="text-decoration-none nav-link-color" to={"/cambios"}>
                2019 vs 2020
                </Link>
                <img className="arrow" src={flecha} />
              </Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  );
};

export default nav;
