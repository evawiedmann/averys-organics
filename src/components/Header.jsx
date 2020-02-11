import React from "react";
import { Navbar, Nav, NavDropdown }from 'react-bootstrap';
import "../Header.css"


function Header(){
  return (
    <>
    <div id="header">
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand className="companyName" href="#home">Avery's Organics</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#schedule">Schedule</Nav.Link>
      <Nav.Link href="#seasonal">Seasonal Produce</Nav.Link>
    </Nav>
  </Navbar>
  </div>
  </>
  );
}

export default Header;
