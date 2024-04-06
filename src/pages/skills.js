/* /views/pages/skills.js */

import React from 'react'
import './css/skills.css';
import { Container, Col, Card, Row } from  "react-bootstrap";

function Skills() {
const skills = {
  languages: ['HTML', 'CSS', 'Javascript', 'ES6', 'C++' ],
  frameworks: ['ExpressJs', 'ReactJs', 'Redux'],
  databases: ['MongoDb', 'MySQL'],
  tools: ['Git', 'Postman', 'VS Code', 'MS Office'],
  others: ['HTML5', 'NodeJs', 'RestAPI', 'TailwindCSS']
};
return (
  <div className='skills-div'>
    <Container>
      <h1 className="name animate__animated animate__fadeInDown text-center mt-5 mb-4" id="skills-title">Skills</h1>
      <Row id='skills-row'>
        <Col xs={12} md={6} lg={4}>
          <Card id='card1'>
            <Card.Header>
              Languages
            </Card.Header>
            <Card.Body>
              <ul className="list-unstyled">
                {skills.languages.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Card id='card2'>
            <Card.Header>
              Frameworks
            </Card.Header>
            <Card.Body>
              <ul className="list-unstyled">
                {skills.frameworks.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Card id='card3'>
            <Card.Header>
              Databases
            </Card.Header>
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
          <Card id='card4'>
            <Card.Header>
              Tools
            </Card.Header>
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
          <Card id='card5'>
            <Card.Header>
              Others
            </Card.Header>
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