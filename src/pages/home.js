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
            <h3 className="greeting">Hi! I'm </h3>
            <h1 className="name">Somya Bhatnagar.</h1>
            <h3 className="title">I'm a Fullstack Developer.</h3>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <Image
            src={womenWorking}
            alt="home-illustration"
            className="home-image img-fluid"
          />
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Home;
