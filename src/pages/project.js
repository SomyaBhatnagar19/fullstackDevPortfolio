import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import resturant1 from '../assets/resturant1.png';
import login from '../assets/login2.png';
import generics from '../assets/generics1.png';
import weather from '../assets/weather1.png';
import './css/projects.css';

const Projects = () => {
  const projects = [
    {
      name: 'The Generics E-commerce site',
      image: generics,
      link: 'https://the-generics-store-cm33bdwqn-somyabhatnagar19s-projects.vercel.app/',
      description: [
        'A food ordering cart app, built with ReactJs and ContextAPI, allows users to easily add and manage food items in a cart.',
        'It features a responsive design and an intuitive interface.',
        'Potential for future enhancements like order tracking and promotions.'
      ]
    },
    {
      name: 'Weather Predictor',
      image: weather,
      link: 'https://weather-app-mu-lac.vercel.app/',
      description: [
        'A food ordering cart app, built with ReactJs and ContextAPI, allows users to easily add and manage food items in a cart.',
        'It features a responsive design and an intuitive interface.',
        'Potential for future enhancements like order tracking and promotions.'
      ]
    },
    {
      name: 'Family Food App',
      image: resturant1,
      link: 'https://resturant-project.vercel.app/',
      description: [
        'A food ordering cart app, built with ReactJs and ContextAPI, allows users to easily add and manage food items in a cart.',
        'It features a responsive design and an intuitive interface.',
        'Potential for future enhancements like order tracking and promotions.'
      ]
    },
    {
      name: 'ReactAuth',
      image: login,
      link: 'https://login-page-app-gamma.vercel.app/',
      description: [
        'ReactAuth is a React app utilizing ContextAPI for user authentication, offering login, signup, and logout functionality.',
        'It includes a session timeout feature and utilizes Firebase for authentication processes.'
      ]
    }
    // Add more projects as needed
  ];

  return (
    <Container>
      <h2 className="projects-heading">Projects</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <Card className="project-card animate__animated animate__fadeIn">
              <Card.Img variant="top" src={project.image} />
              <Card.Body>
                <Card.Title className="project-title">{project.name}</Card.Title>
                <Card.Text className="project-description">
                  <ul>
                    {project.description.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </Card.Text>
                <Button className="project-button" variant="primary" href={project.link} target="_blank">View Site</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Projects;