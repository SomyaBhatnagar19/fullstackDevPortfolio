/* /views/pages/project.js */

import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";
// import projectsIcon from '../assets/Projects.png';

const projects = [
  {
    title: "React Reserve",
    subtitle: "MERN Stack",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    image: "http://g.recordit.co/nNNbja4q6n.gif",
    link: "https://reactbootcamp.com",
  },
  // Add other projects here
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg">
      <Container>
        <Row className="justify-content-center">
          <Col className="text-center">
            <h1 className="mt-4 title-font text-3xl mb-2 font-medium text-green-500 ">
              Projects
              {/* <img className="w-24 h-auto mt-6 mb-8" alt="projects-icon" src={projectsIcon} /> */}
            </h1>
          </Col>
        </Row>
        <Row className="flex flex-wrap">
          {projects.map((project, index) => (
            <Col key={index} sm={6} lg={3} className="p-3">
              <CSSTransition in={true} appear={true} timeout={index * 200} classNames="fade">
                <Card className="h-100">
                  <Card.Img variant="top" src={project.image} alt={project.title} />
                  <Card.Body>
                    <Card.Title className="text-green-400">{project.subtitle}</Card.Title>
                    <Card.Title className="text-white">{project.title}</Card.Title>
                    <Card.Text className="text-gray-300">{project.description}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <a href={project.link} className="btn btn-outline-primary" target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                  </Card.Footer>
                </Card>
              </CSSTransition>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
