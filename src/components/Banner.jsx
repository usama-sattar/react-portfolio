import React, { Component } from "react";
import Typewriter from "typewriter-effect";
import { Col, Row } from "react-bootstrap";

import "../App.css";
export default function Banner() {
  return (
    <div>
      <div className="banner">
        <div className="banner-inside">
          <Row>
            <Col sm={12} md={{ span: 8, offset: 1 }}>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      '<p style="font-size: 50px"> HEY, MY NAME IS USAMA</p>'
                    )
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString(
                      '<p style="font-size: 50px">I AM MERN STACK DEVELOPER <br> BASED IN PAKISTAN</p>'
                    )
                    .start();
                }}
                options={{
                  loop: true,
                }}
              />
            </Col>
            <Col sm={12} md={2} className="box-container">
              <div className="box">
                <div className="top-box"></div>
                <div>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
