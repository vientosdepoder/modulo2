import React from 'react';
import {Link} from "react-router-dom"
import {NavDropdown,Nav,Navbar} from "react-bootstrap"

function Menu() {
  
    return (
    
      <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark"  sticky="top">
      <Navbar.Brand as={Link} to="/" > Tienda Virtual</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/" >Home</Nav.Link>
          <Nav.Link as={Link} to="/alta">Registro</Nav.Link>
          <Nav.Link as={Link} to="/ingresar">Login</Nav.Link>      
        </Nav>
        <Nav>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
  
  
}

export default Menu;