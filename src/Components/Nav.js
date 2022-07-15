import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
export default function Navbars() {
  return (
    <div >
      <Navbar collapseOnSelect expand="lg" bg="black" variant="dark" class="navbar topnavbar" >
        <Navbar.Brand>Shishir</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>About Me</Nav.Link>
            <NavDropdown title="My List" id="collasible-nav-dropdown">
              <NavDropdown.Item>To-do List</NavDropdown.Item>
              <NavDropdown.Item>Sticky Notes</NavDropdown.Item>
              <NavDropdown.Item>Grocery Lists</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
