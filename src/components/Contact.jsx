import React from "react";
import "aos/dist/aos.css";
import { Container } from "react-bootstrap";

export default function Contact() {
  return (
    <Container
      data-aos="zoom-in"
      fluid
      className="section-contact"
      id="contact"
      data-aos-once="true"
    >
      <h1>Contact Me At</h1>
      <div className="footer">
        <h5>iamusamasattar@gmail.com</h5>
        {/* <button
          style={{
            padding: "5px",
            borderRadius: "2px",
            backgroundColor: "black",
            color: "white",
            border: "none",
            width: "100px",
          }}
        >
          Resume
        </button> */}
        <div className="icons">
          <i
            class="fab fa-facebook-messenger"
            style={{ fontSize: "40px", margin: "10px", color: "#006AFF" }}
          ></i>
          <i
            class="fab fa-linkedin"
            style={{ fontSize: "40px", margin: "10px", color: "#0E76A8" }}
          ></i>
          <i
            class="fas fa-envelope"
            style={{ fontSize: "40px", margin: "10px", color: "#DB4437" }}
          ></i>
        </div>
      </div>
    </Container>
  );
}
