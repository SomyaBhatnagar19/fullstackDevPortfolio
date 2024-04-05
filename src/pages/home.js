/* /pages/home.js */

import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./css/home.css";
import womenWorking from "../assets/womenWorking.png";

function Home() {
  return (
    <div className="home-div">
      <Container>
      <Row className="home">
        <Col xs={12} md={6}>
          <div className="text-content">
            <h3 id="greeting" className="name animate__animated animate__fadeInDown animate__zoomIn">Hi! I'm </h3>
            <h1 id="name" className="name animate__animated animate__fadeInDown animate__zoomIn">Somya Bhatnagar.</h1>
            <h3 id="title" className="name animate__animated animate__fadeInDown animate__zoomIn">A Fullstack Developer.</h3>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <Image
            src={womenWorking}
            alt="home-illustration"
            id="home-image img-fluid"
            className="home-image img-fluid animate__animated animate__fadeInRight"
          />
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Home;
