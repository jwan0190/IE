import React, { useEffect } from "react";
import banner from "./assets/policyBanner.png";
import ballon from "./assets/ballon.png";
import Tilt from "react-parallax-tilt";
import Accordion from "../../component/Accordion/Accordion";
import data from "./assets/melbp.json";
import "./carparkPermit.css";
import { Row, Col } from "react-bootstrap";
import { Button } from "../../component/button/button";

/**
 * Name:MelPolicy
 * Function: Victoria Travel Restriction related information | Subpage of Guide
 */

const MelPolicy = () => {
  const carpermitContainer = {
    marginTop: "-5%",
    marginLeft: "5%",
    marginRight: "5%",
    marginBottom: "5%",
    borderRadius: "20px",
    display: "absolute",
    justifyContent: "center",
    alignItems: "center",
    padding: "5%",
    boxShadow: "0 6px 20px rgba(56, 125, 255, 0.3)",
    backgroundColor: "rgb(234,229,222)",
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="banner">
      <Tilt
        tiltMaxAngleX={100}
        tiltMaxAngleY={20}
        perspective={800}
        scale={0.7}
        transitionSpeed={100000}
      >
        <img
          src={ballon}
          alt="ballon"
          style={{
            width: "8vw",
            zIndex: 1000,
            position: "absolute",
            top: "150px",
            left: "80%",
          }}
        />
      </Tilt>
      <Tilt
        tiltMaxAngleX={-200}
        tiltMaxAngleY={20}
        perspective={-800}
        scale={1.3}
        transitionSpeed={100000}
      >
        <img
          src={ballon}
          alt="ballon"
          style={{
            width: "4vw",
            zIndex: 1000,
            position: "absolute",
            top: "50px",
            left: "30%",
          }}
        />
      </Tilt>
      <img src={banner} alt="banner" style={{ width: "100vw", zIndex: -1 }} />

      <div className="card" style={carpermitContainer}>
        <h1 style={{ color: "#9da993" }}>Step1: Victoria Travel Restriction</h1>
        <Accordion content={data} />
        <Row>
          <Col xs="6" md="6">
            {" "}
            <Button
              destination="./guide"
              buttonSize="btn--medium"
              buttonColor="btn--red"
            >
              {" "}
              Back
            </Button>
          </Col>
          <Col xs="6" md="6">
            {" "}
            <Button
              destination="./airportService"
              buttonSize="btn--medium"
              buttonColor="btn--red"
            >
              Next
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default MelPolicy;
