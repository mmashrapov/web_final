import React from "react";
import "../../styles/become-worker.css";
import { Container, Row, Col } from "reactstrap";

import PianoImg from "../../assets/all-images/guitar.png";

const BecomeWorkerSection = () => {
  return (
    <section className="become__driver">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="become__driver-img">
            <img src={PianoImg} alt="" className="w-100" />
          </Col>

          <Col lg="6" md="6" sm="12">
            <h2 className="section__title become__driver-title">
              Do You Want to Work With Us?
            </h2>
            
            <button className="btn become__driver-btn mt-4">
              Contact Us!
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeWorkerSection;
