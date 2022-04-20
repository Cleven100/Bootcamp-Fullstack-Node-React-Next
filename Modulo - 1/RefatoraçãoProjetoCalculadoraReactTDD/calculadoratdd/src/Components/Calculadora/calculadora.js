import React from "react";
import { Jumbotron, Container, Row, Col, Button, Form } from "react-bootstrap";

import "./calculadora.css"




export default function Calculadora() {
    return (
        <Jumbotron style={
            {
                background: 'transparent !important',
                backgroundColor: '#007bff',

                padding: '5px',
                margin: '5px',
                width: '400px'

            }
        }>
            <Container>
                <Row>
                    <Col xs="3">
                      <Button variant="danger">C</Button>
                    </Col>

                    <Col xs="9">
                      <Form.Control type="text" name="txtValue" className="text-right" readOnly="readonly" />
                    </Col>
                </Row>
            </Container>
               
        </Jumbotron>
     
        
    )
}