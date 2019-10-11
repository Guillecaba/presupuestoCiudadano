import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import flecha from "../../assets/images/flecha.png";
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
            <Nav className="mr-auto text-right">
              <Nav.Link className="navbar__item">
                <Link
                  className="text-decoration-none nav-link-color"
                  to={"/financiacion"}
                >
                  ¿Qué es el PGN?
                </Link>
                <img className="arrow" src={flecha} />
              </Nav.Link>

             
              <Nav.Link className="navbar__item">
                <Link
                  className="text-decoration-none nav-link-color"
                  to={"/cambios"}
                >
                   PGN <br></br>2019 vs 2020
                </Link>
                <img className="arrow" src={flecha} />
              </Nav.Link>

              <Nav.Link className="navbar__item">
                <Link
                  className="text-decoration-none nav-link-color"
                  to={"/"}
                >
                   Aprobado por el Congreso
                </Link>
                <img className="arrow" src={flecha} />
              </Nav.Link>
              <NavDropdown className="navbar__item show nav-link-color" title={"Prioriza" +"\  " + " tu  presupuesto"} id="basic-nav-dropdown">
                <NavDropdown.Item > <Link
                  className="text-decoration-none nav-link-color show"
                  to={"/educacion"}
                >Educación y Ciencias</Link></NavDropdown.Item>
                <NavDropdown.Item >
                <Link
                  className="text-decoration-none nav-link-color show"
                  to={"/salud"}
                >
                Salud y Bienestar social
                </Link>
                </NavDropdown.Item>
                <NavDropdown.Item >
                <Link
                  className="text-decoration-none nav-link-color show"
                  to={"/obras"}
                >
                Obras Públicas y Comunicaciones
                </Link>
                
                </NavDropdown.Item>
                <NavDropdown.Item>
                <Link
                  className="text-decoration-none nav-link-color show"
                  to={"/desarrollo"}
                >
                Desarrollo Social
                </Link>
                </NavDropdown.Item>
                
                
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  );
};

export default nav;
