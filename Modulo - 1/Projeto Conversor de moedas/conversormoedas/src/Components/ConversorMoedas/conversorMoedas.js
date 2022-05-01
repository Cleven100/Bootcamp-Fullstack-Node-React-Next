import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron, Button, Form, Col, Spinner, Alert, Modal } from "react-bootstrap";
import { FontAwesomeIcon, fontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

export default function ConversorMoedas() {
  return  (
         <div>
             <h1 style={{margin: '10px'}}>Conversor de moedas</h1>
             <Alert variant="danger" show={false} style={{margin: '10px'}}>
               Erro obtendo dados de conversao , tente novamente.
             </Alert>
             <Jumbotron style={{margin: '10px'}}>
               <Form >
                  <Form.Row >

                    <Col sm="3">
                      <Form.Control
                       placeholder="0"
                       value={1}
                       style={{margin: "0 0 15px 0"}}  
                          />   
                                       
                    </Col>

                    <Col sm="3">
                      <Form.Control 
                        as="select"
                        
                        />
                    </Col>

                    <Col sm="1" className="text-center" style={{paddingTop:'5px'}}>
                        <FontAwesomeIcon icon={faAngleDoubleRight} />
                    </Col>

                    <Col sm="3">
                      <Form.Control
                       as="select"
                       style={{margin: "0 0 15px 0"}}
                        />
                    </Col>

                    <Col sm="2">
                      <Button variant="dark" type="submit" style={{width: "120px"}}>
                        <Spinner animation="border" size="sm" style={{margin: "0 5px 0 0"}}/>
                           
                        
                        Converter
                      </Button>
                    </Col>

                  </Form.Row>
               </Form>
               <Modal show={false}>
                  <Modal.Header closeButton>
                    <Modal.Title>Conversao</Modal.Title>
                  </Modal.Header>  
                  <Modal.Body>
                    Resultado da conversão aqui
                  </Modal.Body>    
                  <Modal.Footer>
                     <Button variant="dark">
                       Nova conversao
                     </Button>
                  </Modal.Footer>
               </Modal>
             </Jumbotron> 
         </div>
  )
}
