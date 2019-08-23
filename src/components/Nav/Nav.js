import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import './Nav.css'

const nav = () => {
  return (
    <>
      <Container>
        <Navbar collapseOnSelect expand="lg"  >
          <Navbar.Brand className="navbar__title grow" href="/">PRESUPUESTO CIUDADANO</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className='navbar__item' href="">¿Qué es?</Nav.Link>
              <Nav.Link className='navbar__item' href="">Gasto</Nav.Link>
              <Nav.Link className='navbar__item' href="/#proceso"> Proceso</Nav.Link>
              <Nav.Link className='navbar__item' href=""> Ejecución </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  );
};

export default nav;
