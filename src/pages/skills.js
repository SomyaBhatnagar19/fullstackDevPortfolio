/* /views/pages/skills.js */

import React from "react";
import "./css/skills.css";
import { Container, Col, Card, Row } from "react-bootstrap";
//icons for frontend skills
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/java-script.png";
import es6 from "../assets/es6.png";
import html5 from "../assets/html-5.png";
import reactjs from "../assets/icons8-react-js-16.png";
import nextjs from "../assets/icons8-nextjs-48.png";
import tailwindcss from "../assets/icons8-tailwindcss-48.png";
//icons for backend skills
import nodeJs from "../assets/icons8-nodejs-48.png";
import expressJs from "../assets/icons8-express-js-48.png";
//icons for database skills
import mongoDb from "../assets/icons8-mongodb-48.png";
import mySql from "../assets/icons8-mysql-48.png";
//icons for tools
import git from "../assets/icons8-git-48.png";
import postman from "../assets/icons8-postman-api-64.png";
import vsCode from "../assets/icons8-vs-code-48.png";
import msOffice from "../assets/Office Icon.png";
import redux from "../assets/icons8-redux-an-open-source-javascript-library-for-managing-application-state-36.png";
import firebase from "../assets/icons8-firebase-48.png";
//icons for others
import c from "../assets/icons8-c-48.png";
import rest from "../assets/icons8-rest-api-64.png";

function Skills() {
  const skills = {
    Frontend: [
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
      { name: "Javascript", icon: javascript },
      { name: "ES6", icon: es6 },
      { name: "HTML5", icon: html5 },
      { name: "ReactJs", icon: reactjs },
      { name: "NextJs", icon: nextjs },
      { name: "TailwindCSS", icon: tailwindcss },
    ],
    Backend: [
      { name: "NodeJs", icon: nodeJs },
      { name: "ExpressJs", icon: expressJs },
    ],
    Databases: [
      { name: "MongoDb", icon: mongoDb },
      { name: "MySQL", icon: mySql },
    ],
    Tools: [
      { name: "Git", icon: git },
      { name: "Postman", icon: postman },
      { name: "VS Code", icon: vsCode },
      { name: "MS Office", icon: msOffice },
      { name: "Redux", icon: redux },
      { name: "Firebase", icon: firebase },
    ],
    others: [
      { name: "C++", icon: c },
      { name: "RestAPI", icon: rest },
    ],
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
          {Object.entries(skills).map(([category, skillsList], index) => (
            <Col xs={12} md={6} lg={4} key={index}>
              <Card id={`card${index + 1}`} className="skills-card">
                <Card.Header className="skills-card-header">{category}</Card.Header>
                <Card.Body>
                  <ul className="list-unstyled">
                    {skillsList.map((skill, skillIndex) => (
                      <li key={skillIndex}>
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          title={skill.name}
                          className="skills-card-img"
                        />
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Skills;
