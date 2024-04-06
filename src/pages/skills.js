/* /views/pages/skills.js */

import React from "react";
import "./css/skills.css";
import { Container, Col, Card, Row } from "react-bootstrap";

function Skills() {
  const skills = {
    frontend: [
      { name: "HTML", icon: "./assets/html.png" },
      { name: "CSS", icon: "/assets/css.png" },
      { name: "Javascript", icon: "/assets/java-script.png" },
      { name: "ES6", icon: "/assets/java-script.png" },
      { name: "HTML5", icon: "/assets/html-5.png" },
      { name: "ReactJs", icon: "/assets/icons8-react-js-16.png" },
      { name: "NextJs", icon: "/assets/icons8-nextjs-48.png" },
      { name: "TailwindCSS", icon: "/assets/icons8-tailwindcss-48.png" },
    ],
    backend: ["NodeJs", "ExpressJs"],
    databases: ["MongoDb", "MySQL"],
    tools: ["Git", "Postman", "VS Code", "MS Office", "Redux", "Firebase"],
    others: ["C++", "RestAPI"],
  };

  return (
    <div className="skills-div" id="skills">
      <Container>
        <h1
          className="name animate__animated animate__fadeInDown text-center mt-5 mb-4"
          id="skills-title"
        >
          Skills
        </h1>
        <Row id="skills-row">
          <Col xs={12} md={6} lg={4}>
            <Card id="card1">
              <Card.Header>Frontend Technologies</Card.Header>
              <Card.Body>
                <ul className="list-unstyled">
                  {skills.frontend.map((skill, index) => (
                    <li key={index}>
                      <img src={skill.icon}  alt="Skill Icon"/>
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Card id="card2">
              <Card.Header>Backend Technologies</Card.Header>
              <Card.Body>
                <ul className="list-unstyled">
                  {skills.backend.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Card id="card3">
              <Card.Header>Databases</Card.Header>
              <Card.Body>
                <ul className="list-unstyled">
                  {skills.databases.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Card id="card4">
              <Card.Header>Tools</Card.Header>
              <Card.Body>
                <ul className="list-unstyled">
                  {skills.tools.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Card id="card5">
              <Card.Header>Others</Card.Header>
              <Card.Body>
                <ul className="list-unstyled">
                  {skills.others.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Skills;
