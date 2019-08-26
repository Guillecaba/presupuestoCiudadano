import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
//import { HashLink as Link } from 'react-router-hash-link';
import "./Nav.css";

const nav = () => {
  return (
    <>
      <Container>
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand className="navbar__title grow">
            <Link className="text-decoration-none nav-link-color" to={"/"}>
              {" "}
              PRESUPUESTO CIUDADANO
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className="navbar__item">
                {" "}
                <Link
                  className="text-decoration-none nav-link-color"
                  to={"/financiacion"}
                >
                  ¿Qué es?{" "}
                </Link>
              </Nav.Link>

              <Nav.Link className="navbar__item">
                <Link className="text-decoration-none nav-link-color" to={"/gasto"}>
                Gasto

                </Link>
              </Nav.Link>

              <Nav.Link className="navbar__item" href="/#proceso">
                {" "}
                Proceso
              </Nav.Link>

              <Nav.Link className="navbar__item text-decoration-none text-center">
                <Link
                  className="text-decoration-none nav-link-color "
                  to={"/ejecucion"}
                >
                  {" "}
                  Ejecución
                </Link>{" "}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  );
};

export default nav;
