import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron, Button, Form, Col, Spinner, Alert, Modal } from "react-bootstrap";
import { FontAwesomeIcon, fontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import ListarMoedas from "../ListarMoedas/listarMoedas";

export default function ConversorMoedas() {

  const [valor, setValor] = useState('1');
  const [moedaDe, setMoedaDe] = useState('BRL');
  const [moedaPara, setMoedaPara] =  useState('USD');

  function handleValor(event) {
   setValor(event.target.value.replace(/\D/g, ''));
  }

   function handleMoedaDe(event) {
     setMoedaDe(event.target.value)
   }

   function handleMoedaPara(event) {
     setMoedaPara(event.target.value)
   }

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
                       value={valor}
                       onChange={handleValor}
                       style={{margin: "0 0 15px 0"}}  
                          />   
                                       
                    </Col>

                    <Col sm="3">
                      <Form.Control 
                        as="select"
                        value={moedaDe}
                        onChange={handleMoedaDe}
                        >
                          <ListarMoedas />
                        </Form.Control>
                    </Col>

                    <Col sm="1" className="text-center" style={{paddingTop:'5px'}}>
                        <FontAwesomeIcon icon={faAngleDoubleRight} />
                    </Col>

                    <Col sm="3">
                      <Form.Control
                       as="select"
                       style={{margin: "0 0 15px 0"}}
                       value={moedaPara}
                       onChange={handleMoedaPara}
                        >
                          <ListarMoedas />
                        </Form.Control>
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
