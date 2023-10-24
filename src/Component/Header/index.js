import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";


function index() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink to='/' className="nav-link">Home</NavLink>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default index;
