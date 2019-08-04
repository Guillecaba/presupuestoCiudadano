import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const nav = () => {
  return (
    <>
      <Container>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">PRESUPUESTO CIUDADANO</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="">¿Qué es?</Nav.Link>
              <Nav.Link href="">Gasto</Nav.Link>
              <Nav.Link href=""> Proceso</Nav.Link>
              <Nav.Link href=""> Ejecución </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  );
};

export default nav;
