import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Container } from "react-bootstrap";

export default function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Container
      data-aos="zoom-in"
      className="section-about"
      fluid
      id="about"
      data-aos-once="true"
    >
      <h1>About Me</h1>
      <p>
        Hey, I am computer science expert with hands on experience in mobile and
        web development. I have completed tons of different software-related
        projects ranging from web to mobile-app development. I have gone in
        depth in frontend development. I have a keen eye on what makes a great
        app developer. Despite this, I have a passion for teaching. I have been
        teaching math and computer science for 4+ years. Get in touch with me
        for quality work. I keep buyer's satisfaction on first priority. My
        hobby includes drawing
      </p>
    </Container>
  );
}
