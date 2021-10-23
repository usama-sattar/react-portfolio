import React, { Component, useState } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import "../App.css";

export default function NavigationBar() {
  const [nav, setNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", changeNav);
  return (
    <Navbar expand="lg" className={nav ? "navbar active" : "navbar"}>
      <Container>
        <Navbar.Brand
          href="#home"
          style={{ color: nav ? "white" : "black", fontSize: "1.4rem" }}
        >
          Usama Sattar
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-end nav-sm"
        >
          <Nav className="me-auto" className="justify-content-end">
            <Nav.Link
              href="#about"
              style={{ color: nav ? "white" : "black", fontSize: "1.4rem" }}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#skills"
              style={{ color: nav ? "white" : "black", fontSize: "1.4rem" }}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#work"
              style={{ color: nav ? "white" : "black", fontSize: "1.4rem" }}
            >
              Work
            </Nav.Link>
            <Nav.Link
              href="#contact"
              style={{ color: nav ? "white" : "black", fontSize: "1.4rem" }}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
