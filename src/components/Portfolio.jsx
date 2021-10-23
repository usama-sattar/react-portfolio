import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Card, Container } from "react-bootstrap";
import "../App.css";
import TASK1 from "../assets/task1.jpg";
import TASK2 from "../assets/task2.png";
import TASK3 from "../assets/task3.jpeg";
import TASK4 from "../assets/task4.png";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function Portfolio() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const data = [
    {
      title: "Recipe App",
      desc: "Recipe App in react js receiving data from online REST API, also allows user user to search recipe",
      image: TASK1,
    },
    {
      title: "Google Docx clone",
      desc: "Allow real time document sharing through editor in react js with node js in the backend, for real time socket.io is used ",
      image: TASK4,
    },
    {
      title: "Export Quality Shirts",
      desc: "E-commerece shirts website frontend recieving data from files, allows user to update cart",
      image: TASK3,
    },
    {
      title: "Covid App",
      desc: "Web application in react js, tracking cases of covid through REST API in textual as well as graphical view",
      image: TASK2,
    },
  ];

  return (
    <Container
      data-aos="zoom-in"
      fluid
      className="section-portfolio"
      id="work"
      data-aos-once="true"
    >
      <h1>Portfolio Projects</h1>
      <div className="portfolio-container">
        {data.map((item) => (
          <PortfolioView item={item} />
        ))}
      </div>
    </Container>
  );
}

function PortfolioView({ item }) {
  return (
    <Zoom>
      <Card style={{ width: "18rem", marginTop: "1.8rem", minHeight: "460px" }}>
        <Card.Img variant="top" src={item.image} height="200px" />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.desc}</Card.Text>
          <Card.Text>Github:</Card.Text>
        </Card.Body>
      </Card>
    </Zoom>
  );
}
