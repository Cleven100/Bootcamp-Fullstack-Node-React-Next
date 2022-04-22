import React, { useState } from "react";
import { Jumbotron, Container, Row, Col, Button, Form } from "react-bootstrap";
import CalculadoraService from "./calculadora.service";

import "./calculadora.css";

export default function Calculadora() {

  const [textNumber, setTextNumber] = useState("0");
  const [numberOne, setNumberOne] = useState("0");
  const [numberTwo, setNumberTwo] = useState(null);
  const [operation, setOperation] = useState(null);

  const [calcular, concatenarNumber, SUM, SUBTRACTION, DIVISION, MULTIPLICATION] = CalculadoraService();

  function addNumber(number) {
     let result;
      
     if(operation == null){
        result = concatenarNumber(numberOne, number)
        setNumberOne(result);
     } else {
       result = concatenarNumber(numberTwo, number)
       setNumberTwo(result)
     }
      if(number === "C") {
         
         setTextNumber('0');
         setNumberOne('0');
         setNumberTwo('0');
     } else {
         setTextNumber(result);
     }

     
        
    }

    function defineOperation(op){

      if (operation === null) {
          setOperation(op);
          return;
      }

      if(numberTwo !== null) {
          const result = calcular(parseFloat(numberOne), parseFloat(numberTwo), operation);
          setOperation(op);
          setNumberOne(result.toString());
          setNumberTwo(null);
          setTextNumber(result.toString());
      }
 


    }
  

  

  return (
    <Jumbotron
      style={{
        background: "transparent !important",
        backgroundColor: "#68686b",
        

        padding: "5px",
        margin: "5px",
        width: "400px",
        position: "absolute",
        top: "0",
        left: "0",
        display: "flex",
        justifyContent: "center",
        alignitems: "center"

       
        

      }}
    >
      <Container>
        <Row>
          <Col xs="3">
            <Button variant="info" onClick={() => addNumber("C")}>
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
            <Button variant="light" onClick={() => defineOperation("/")}>
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
            <Button variant="light" onClick={() => defineOperation("x")}>
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
            <Button variant="light" onClick={() => defineOperation("+")}>
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
            <Button variant="info" onClick={() => defineOperation("=")}>
              =
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => defineOperation("-")}>
              -
            </Button>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}
