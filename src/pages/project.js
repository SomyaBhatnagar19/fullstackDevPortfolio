import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import resturant1 from "../assets/resturant1.png";
import login from "../assets/login2.png";
import generics from "../assets/generics1.png";
import weather from "../assets/weather1.png";
import mailbox from "../assets/mailbox.png";
import meetwave from "../assets/meetwave.png";
import spendzi from "../assets/spendzi.png";
import "./css/projects.css";

const Projects = () => {
  const projects = [
    {
      name: "Group Chat App",
      image: mailbox,
      link: "https://connect-mailbox-client-somyabhatnagar19s-projects.vercel.app/",
      description: [
        "Users can compose, reply, forward, and archive emails.",
        "Users can search and filter emails for easy access.",
        "App provides real-time updates for new emails and changes.",
        "Users can send and receive multimedia content in emails.",
        "App offers customization options for the user interface.",
        "Users can securely sign up, log in, and log out.",
        "App is designed to provide a seamless experience across devices.",
        "Uses React, Redux, Tailwind CSS, uses react-quill library and Firebase, ensuring a modern and efficient user experience.",
      ],
    },
    {
      name: "Spendzi Expense Tracker",
      image: spendzi,
      link: "http://44.213.66.27:3000/",
      description: [
        "User friendly way of tracking your expenses.",
        "Secure user authentication and password reset functionality.",
        "User specific functionality.",
        "Feauture to add, delete, edit your debits and add your credits.",
        "Premium features unlocked through Razorpay payment gateway.",
        "Leaderboard and weekly, flexi, monthly report generation and also downloadable excel report premium features available.",
        "Efficient expense management with Jwt token and bcrypt.",
        "Modern UI design using CSS, React-Bootstrap.",
        "Responsive and seamless experience across devices.",
        "Technologies: JavaScript, HTML, Node.js, React.js, Express.js, Nodemon, MySQL, AWS S3 Buckets.",
      ],
    },
    {
      name: "Connect Mailbox Client",
      image: mailbox,
      link: "https://connect-mailbox-client-somyabhatnagar19s-projects.vercel.app/",
      description: [
        "Users can compose, reply, forward, and archive emails.",
        "Users can search and filter emails for easy access.",
        "App provides real-time updates for new emails and changes.",
        "Users can send and receive multimedia content in emails.",
        "App offers customization options for the user interface.",
        "Users can securely sign up, log in, and log out.",
        "App is designed to provide a seamless experience across devices.",
        "Uses React, Redux, Tailwind CSS, uses react-quill library and Firebase, ensuring a modern and efficient user experience.",
      ],
    },
    {
      name: "The Generics E-commerce site",
      image: generics,
      link: "https://the-generics-store-cm33bdwqn-somyabhatnagar19s-projects.vercel.app/",
      description: [
        "Users can sign up, log in, and securely log out.",
        "Users can view product details and browse music albums and concert tickets.",
        "Users can add products to their cart, adjust quantities, and view cart contents.",
        "Responsive design for user-friendly experience across devices.",
        "Built with React.js, React Bootstrap, Firebase (authentication), CRUD API operations, and CSS for styling.",
      ],
    },
    {
      name: "MeetWave App",
      image: meetwave,
      link: "https://meetwave-nextjs.vercel.app/",
      description: [
        "Built a robust Next.js meetup application.",
        "Leveraged MongoDB and Mongoose for efficient data management.",
        "Utilized React and Redux.js for a dynamic and interactive user interface.",
        "Enhanced overall user experience by allowing users to create, join, and manage events effortlessly.",
        "Implemented Tailwind CSS for a responsive design.",
      ],
    },
    {
      name: "Weather Predictor",
      image: weather,
      link: "https://weather-app-mu-lac.vercel.app/",
      description: [
        "Developed a basic weather forecast application using the OpenWeather API.",
        "Implemented CSS in an external format for styling.",
        "Allows users to enter a location and view the temperature, wind speed, humidity, etc.",
        "Users can predict the weather using this app.",
        "Its just a basic app built in ReactJs, potential for future upgradations.",
      ],
    },
    {
      name: "Family Food App",
      image: resturant1,
      link: "https://resturant-project.vercel.app/",
      description: [
        "A food ordering cart app, built with ReactJs and ContextAPI, allows users to easily add and manage food items in a cart.",
        "It features a responsive design and an intuitive interface.",
        "Potential for future enhancements like order tracking and promotions.",
      ],
    },
    {
      name: "ReactAuth",
      image: login,
      link: "https://login-page-app-gamma.vercel.app/",
      description: [
        "ReactAuth is a React app utilizing ContextAPI for user authentication, offering login, signup, and logout functionality.",
        "It includes a session timeout feature and utilizes Firebase for authentication processes.",
      ],
    },
    // Add more projects as needed
  ];

  return (
    <div className="projects-container">
      <Container>
        <h2 className="projects-heading">Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <Card className="project-card animate__animated animate__fadeIn">
                <Card.Img
                  variant="top"
                  src={project.image}
                  className="projects-card"
                />
                <Card.Body>
                  <Card.Title className="project-title">
                    {project.name}
                  </Card.Title>
                  <Card.Text className="project-description">
                    <ul>
                      {project.description.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </Card.Text>
                  <Button
                    className="project-button"
                    variant="primary"
                    href={project.link}
                    target="_blank"
                  >
                    View Site
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Projects;
