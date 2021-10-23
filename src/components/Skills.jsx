import React from "react";
import "../App.css";
import Github from "../assets/github.svg";
import CSS3 from "../assets/css3.png";
import HTML5 from "../assets/html5.png";
import REACT from "../assets/react.png";
import JAVASCRIPT from "../assets/javascript.svg";
import NodeJs from "../assets/nodejs.png";
import DATABASE from "../assets/db.png";
import MOBILE from "../assets/mobile.png";

import "aos/dist/aos.css";
import { Container } from "react-bootstrap";

import { Col, Row } from "react-bootstrap";

export default function Skills() {
  return (
    <Container
      className="section-skills"
      data-aos="zoom-in"
      fluid
      id="skills"
      data-aos-once="true"
    >
      <h1>Skill Set</h1>
      <Row>
        <Col>
          <img src={Github} alt="skill" style={{ marginTop: "20px" }} />
        </Col>
        <Col>
          <img src={CSS3} alt="skill" style={{ marginTop: "20px" }} />
        </Col>

        <Col>
          <img src={HTML5} alt="skill" style={{ marginTop: "20px" }} />
        </Col>

        <Col>
          <img src={REACT} alt="skill" style={{ marginTop: "20px" }} />
        </Col>

        <Col>
          <img src={JAVASCRIPT} alt="skill" style={{ marginTop: "20px" }} />
        </Col>
        <Col>
          <img src={NodeJs} alt="skill" style={{ marginTop: "20px" }} />
        </Col>
        <Col>
          <img src={DATABASE} alt="skill" style={{ marginTop: "20px" }} />
        </Col>
        <Col>
          <img src={MOBILE} alt="skill" style={{ marginTop: "20px" }} />
        </Col>
      </Row>
    </Container>
  );
}
