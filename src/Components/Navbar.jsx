import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from 'react-router-dom';

// Define the functional component NavbarComponent
function NavbarComponent() {

  let navigate = useNavigate();

  return (
    <Navbar bg="dark" variant="dark" expand="lg"style={{ width:'1490px'}}>
      <Container fluid>
        <Navbar.Brand>SeniorCompanion Connect</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              onClick={() => {
                navigate(`/`)
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link href="#features">Carepal</Nav.Link>
            <Nav.Link href="#profile">Profile</Nav.Link>
            <Nav.Link href="#bookings">Bookings</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
