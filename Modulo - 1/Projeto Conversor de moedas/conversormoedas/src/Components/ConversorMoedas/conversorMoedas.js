import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron, Button, Form, Col, Spinner } from "react-bootstrap";
import { fontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

export default function ConversorMoedas() {
  return ( 
         <div>
             <h1>Conversor de moedas</h1>
             <Jumbotron>
               <Form>
                  <Form.row>
                    <Col sm="3">
                      <Form.Control
                       placeholder="0"
                       value={1} />                       
                    </Col>

                    <Col sm="3"></Col>

                    <Col sm="1"></Col>

                    <Col sm="3"></Col>
                    
                    <Col sm="2"></Col>
                  </Form.row>
               </Form>
             </Jumbotron>
         </div>
  )
}
