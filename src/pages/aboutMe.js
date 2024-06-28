/* /pages/css/aboutMe.js */

import aboutMe from "../assets/aboutMe.png";
import { Container, Image, Row, Col, Button } from "react-bootstrap";
import "./css/aboutMe.css";
import resume from "../assets/resume.pdf";

function AboutMe() {
  return (
    <div className="aboutMe-div" id="aboutMe">
      <Container>
        <Row>
          <h2 className="aboutMe-title">About Me</h2>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <Image
              src={aboutMe}
              alt="About Me"
              id="aboutMe-image"
              className="aboutMe-image img-fluid animate__animated animate__fadeInLeft"
            />
          </Col>
          <Col xs={12} md={6}>
            <p
              id="aboutMe-content"
              className="aboutMe-image img-fluid animate__animated animate__zoomIn"
            >
              Hi, I'm Somya, a full-stack web developer and software engineer
              from Delhi. I'm passionate about exploring new technologies and
              using my creativity to build exciting projects. I thrive in team
              environments, finding collaborative work incredibly rewarding. I
              enjoy the challenge of solving problems and crafting user-friendly
              interfaces. My goal is to create meaningful and impactful digital
              experiences. Let's collaborate and create something awesome
              together! If you're looking for a dedicated and skilled developer,
              I'd love to discuss how I can contribute to your team.
            </p>
            <Button className="resume">
              <a href={resume} download="resume" className="resume-link">
                My Resume
              </a>
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutMe;
