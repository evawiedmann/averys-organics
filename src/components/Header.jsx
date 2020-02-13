import React from "react";
import { Navbar, Nav, NavDropdown }from 'react-bootstrap';
import "../Header.css"


function Header(){
  return (
    <>
  <Navbar bg="dark" variant="dark">
  <div id="header">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#availableproducts">Produce by Season</Nav.Link>
      <Nav.Link href="#marketschedule">Weekly Market Schedule</Nav.Link>
      <Nav.Link href="#newmarketschedule">Staff: Add to Market Schedule</Nav.Link>
    </Nav>
    </div>
  </Navbar>
  </>
  );
}

export default Header;
