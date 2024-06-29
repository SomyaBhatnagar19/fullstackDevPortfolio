/* /views/pages/menu.js */

import React, { useState } from "react";
import "./css/menu.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Container, Nav, Navbar, Image } from "react-bootstrap";
import menuLogo from "../assets/menuLogo.png";
import resume from "../assets/resume.pdf";

function scrollToSection(event) {
  event.preventDefault();
  const targetId = event.target.getAttribute("href");
  const targetElement = document.querySelector(targetId);
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth",
    });
  }
}

function Menu() {
  const [expanded, setExpanded] = useState(false);

  function handleNavClick() {
    setExpanded(false);
  }

  return (
    <Navbar collapseOnSelect expand="md" expanded={expanded}>
      <Container>
        <Navbar.Brand href="#home">
          <Image src={menuLogo} alt="menu-logo" className="menu-logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="responsive-navbar-nav" className="navbar-dropdown">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              onClick={(event) => {
                scrollToSection(event);
                handleNavClick();
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#aboutMe"
              onClick={(event) => {
                scrollToSection(event);
                handleNavClick();
              }}
            >
              About Me
            </Nav.Link>
            <Nav.Link
              href="#skills"
              onClick={(event) => {
                scrollToSection(event);
                handleNavClick();
              }}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              onClick={(event) => {
                scrollToSection(event);
                handleNavClick();
              }}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#contact"
              onClick={(event) => {
                scrollToSection(event);
                handleNavClick();
              }}
            >
              Contact
            </Nav.Link>
          </Nav>
          <Nav>
            {/* <Nav.Link href="#Resume" onClick={(event) => { scrollToSection(event); handleNavClick(); }}>Download Resume</Nav.Link> */}
            {/* <Button> */}
            <a href={resume} download="resume" className="resumes">
              Download Resume
            </a>
            {/* </Button> */}
            <div className="social-links">
              <a
                href="https://github.com/SomyaBhatnagar19"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub style={{ color: "#020617" }} />
              </a>
              <a
                href="https://linkedin.com/in/somya-bhatnagar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin style={{ color: "#1d4ed8" }} />
              </a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
