import React, { useState, useEffect } from "react";
import banner from "./assets/checklist.png";
import ballon from "./assets/ballon.png";
import Tilt from "react-parallax-tilt";
import "./carparkPermit.css";
import "./checklist.css";
import { Row, Col, Modal } from "react-bootstrap";
import { Button } from "../../component/button/button";

/**
 * Name:CarparkPermit
 * Function:  Accessible parking permits related information | Subpage of Guide
 */

const Checklist = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {" "}
            <h3 style={{ color: "#9da993" }}>Ready to Start ?</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{ color: "#9da993" }}>
            You are going to view the tourism attractions around Melbourne
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} buttonColor="btn--green">
            No
          </Button>
          <Button destination={"/attraction/0"} buttonColor="btn--red">
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
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
        <h1 style={{ color: "#9da993" }}>
          Step6: Download your Travel checklist
        </h1>

        <img
          src={"/checklist.png"}
          alt="checklist"
          style={{ width: "40%", height: "60%", borderRadius: "20%" }}
        />

        <a
          href="/checklist.pdf"
          download
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="pulsecontainer">
            <span className="circle">
              <div className="svg" style={{ marginLeft: "12%" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  fill="#9da993"
                  className="bi bi-cloud-arrow-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.646 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5a.5.5 0 0 0-1 0v3.793L6.354 8.146a.5.5 0 1 0-.708.708l2 2z"
                  />
                  <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                </svg>
              </div>

              <div
                className="text"
                style={{
                  height: "40px",
                  width: "110px",
                  backgroundColor: "rgba(157, 169, 147,0.3)",
                  color: "#e4b4b4",
                  marginLeft: "0px",
                  marginTop: "-20px",
                  padding: "5px",
                  fontSize: "18px",
                  borderRadius: "20px",
                }}
              >
                Download
              </div>
            </span>
            <span className="pulse"></span>
          </div>
        </a>

        <Row>
          <Col xs="4" md="4">
            {" "}
            <Button
              destination="./trailRider"
              buttonSize="btn--medium"
              buttonColor="btn--red"
            >
              {" "}
              Last
            </Button>
          </Col>
          <Col xs="4" md="4">
            {" "}
            <Button
              destination="./guide"
              buttonSize="btn--medium"
              buttonColor="btn--red"
            >
              {" "}
              Guide
            </Button>
          </Col>
          <Col xs="4" md="4">
            {" "}
            <Button
              buttonSize="btn--medium"
              buttonColor="btn--red"
              onClick={() => setShow(true)}
            >
              Next
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Checklist;
