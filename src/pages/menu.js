/* /views/pages/menu.js */

import React from 'react'
import './css/menu.css';
import {Container, Nav, Navbar, Image} from 'react-bootstrap';
import menuLogo from '../assets/menuLogo.png';

function Menu() {
  return (
    <Navbar collapseOnSelect expand="md">
      <Container>
        <Navbar.Brand href="#home"><Image src={menuLogo} alt='menu-logo' className='menu-logo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/AboutMe">About Me</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#project">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#Resume">Download Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;