import React from 'react';
import { Navbar, Container, Nav, Button, Form } from 'react-bootstrap';
const NavBarElements = () => (
  <Navbar bg="dark" expand="lg" variant="dark">
    <Container fluid>
      <Navbar.Brand style={{fontSize: '40px', fontWeight: 'bold'}} href="/"> &nbsp;&nbsp;&nbsp;Four  pi&nbsp;&nbsp;</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px', fontSize: '20px' }}
          navbarScroll
        >
        <Nav.Link  style={{color: 'white'}} href="/">Main</Nav.Link>
        <Nav.Link style={{color: 'white'}} href="/Compare">Compare</Nav.Link>
        <Nav.Link style={{color: 'white'}} href="/Auth">Auth</Nav.Link>
        <Nav.Link style={{color: 'white'}} href="/Reject">Reject</Nav.Link>
        <Nav.Link style={{color: 'white'}} href="/Join">Join</Nav.Link>
      </Nav>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search" />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
    </Navbar>
  );

export default NavBarElements;
