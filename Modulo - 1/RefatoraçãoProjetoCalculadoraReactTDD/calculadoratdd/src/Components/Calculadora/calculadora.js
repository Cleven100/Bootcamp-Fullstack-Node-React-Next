import React, { useState } from "react";
import { Jumbotron, Container, Row, Col, Button, Form } from "react-bootstrap";

import "./calculadora.css";

export default function Calculadora() {
  const [textNumber, setTextNumber] = useState("0");
  const [resultNumber, setResultNumber] = useState("0");

  function addNumber(numero) {
    
        if (textNumber != 0) {
            setTextNumber(textNumber + numero);
          } else {
            setTextNumber(numero);
          }
          console.log(textNumber)
    }
  

  function cleanNumber() {
    setTextNumber("0");
  }

  return (
    <Jumbotron
      style={{
        background: "transparent !important",
        backgroundColor: "#68686b",

        padding: "5px",
        margin: "5px",
        width: "400px",
      }}
    >
      <Container>
        <Row>
          <Col xs="3">
            <Button variant="info" onClick={() => cleanNumber()}>
              C
            </Button>
          </Col>

          <Col xs="9">
            <Form.Control
              type="text"
              name="txtValue"
              className="text-right"
              readOnly="readonly"
              value={textNumber}
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <Button onClick={() => addNumber("7")} variant="light">
              7
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => addNumber("8")}>
              8
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => addNumber("9")}>
              9
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => addNumber("/")}>
              /
            </Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant="light" onClick={() => addNumber("4")}>
              4
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => addNumber("5")}>
              5
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => addNumber("6")}>
              6
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => addNumber("x")}>
              x
            </Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant="light" onClick={() => addNumber("1")}>
              1
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => addNumber("2")}>
              2
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => addNumber("3")}>
              3
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => addNumber("+")}>
              +
            </Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant="light" onClick={() => addNumber("0")}>
              0
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => addNumber(".")}>
              .
            </Button>
          </Col>
          <Col xs={3}>
            <Button variant="info" onClick={() => addNumber("=")}>
              =
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => addNumber("-")}>
              -
            </Button>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}
