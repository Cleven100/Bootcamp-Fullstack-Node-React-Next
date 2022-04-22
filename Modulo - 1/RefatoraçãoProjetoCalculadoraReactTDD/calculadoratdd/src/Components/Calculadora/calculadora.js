import React, { useState } from "react";
import { Jumbotron, Container, Row, Col, Button, Form } from "react-bootstrap";

import "./calculadora.css"




export default function Calculadora() {

    const [textoNumeros, setTextoNumeros] = useState('0');




    return (
        <Jumbotron style={
            {
                background: 'transparent !important',
                backgroundColor: '#68686b',

                padding: '5px',
                margin: '5px',
                width: '400px'

            }
        }>
            <Container>
                <Row>
                    <Col xs="3">
                      <Button variant="info">C</Button>
                    </Col>

                    <Col xs="9">
                      <Form.Control type="text" name="txtValue" className="text-right" readOnly="readonly" value={textoNumeros} />
                    </Col>
                </Row>

                <Row>
                   <Col>
                       <Button variant="light">7</Button>
                     </Col>
                     <Col>
                       <Button variant="light">8</Button>
                     </Col>
                     <Col>
                       <Button variant="light">9</Button>
                       
                     </Col>
                     <Col>
                       <Button variant="light">/</Button>
                     </Col>
                </Row>

                <Row>
                   <Col>
                       <Button variant="light">4</Button>
                     </Col>
                     <Col>
                       <Button variant="light">5</Button>
                     </Col>
                     <Col>
                       <Button variant="light">6</Button>
                       
                     </Col>
                     <Col>
                       <Button variant="light">x</Button>
                     </Col>
                </Row>

                <Row>
                   <Col>
                       <Button variant="light">1</Button>
                     </Col>
                     <Col>
                       <Button variant="light">2</Button>
                     </Col>
                     <Col>
                       <Button variant="light">3</Button>
                       
                     </Col>
                     <Col>
                       <Button variant="light">+</Button>
                     </Col>
                </Row>

                <Row>
                <Col>
                       <Button variant="light">0</Button>
                     </Col>
                     <Col>
                       <Button variant="light">.</Button>
                     </Col>
                     <Col xs={3}>
                       <Button variant="info">=</Button>
                     </Col>
                     <Col>
                       <Button variant="light">-</Button>
                     </Col>
                    
                </Row>
            </Container>
               
        </Jumbotron>
     
        
    )
}