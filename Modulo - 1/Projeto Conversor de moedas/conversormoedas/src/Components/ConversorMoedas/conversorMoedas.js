import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron, Button, Form, Col, Spinner, Alert, Modal } from "react-bootstrap";
import { FontAwesomeIcon, fontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import ListarMoedas from "../ListarMoedas/listarMoedas";
import "./conversorMoedas.css"

export default function ConversorMoedas() {



  const [valor, setValor] = useState('1');
  const [moedaDe, setMoedaDe] = useState('BRL');
  const [moedaPara, setMoedaPara] =  useState('USD');
  const [exibirSpinner, setExibirSpinner] = useState(false);
  const [formValidado, setFormValidado] = useState(false);
  const [exibirModal, setExibirModal] = useState(false);
  const [resultadoConversao, setResultadoConversao] = useState('');

  function handleValor(event) {
   setValor(event.target.value.replace(/\D/g, ''));
  }

   function handleMoedaDe(event) {
     setMoedaDe(event.target.value)
   }

   const pesquisarMoedas = async () =>{
      const url = 'http://data.fixer.io/api/latest?access_key=eba7130a5b2d720ce43eb5fcddd47cc3';

      const dados = await fetch(url);

      const moedas = await dados.json();

      console.log(moedas.rates)

      
   }

   function handleMoedaPara(event) {
     setMoedaPara(event.target.value)
   }

   function converter(event, moedas) {
     event.preventDefault();
     setFormValidado(true);
     if(event.currentTarget.checkValidity() === true) {
       pesquisarMoedas();
     } else {
       alert('Bla bloifajisdpnjisvgdf'); 
     }

   }

   function handleFecharModal(event) {
     setValor('1');
     setMoedaDe('BRL');
     setMoedaPara('USD');
     setFormValidado(false);
     setExibirModal(false);
   }

  return  (
         <div>
             <h1 style={{margin: '10px'}}>Conversor de moedas</h1>
             <Alert variant="danger" show={false} style={{margin: '10px'}}>
               Erro obtendo dados de conversao , tente novamente.
             </Alert>
             <Jumbotron style={{margin: '10px'}}>
               <Form onSubmit={converter} noValidate validated={formValidado}>
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
                        <span className={exibirSpinner ? null : 'hidden'}>
                        <Spinner animation="border" size="sm" style={{margin: "0 5px 0 0"}}/>
                           </span>
                           <span className={exibirSpinner ? 'hidden' : null}>
                             Converter
                           </span>
                        
                        
                      </Button>
                    </Col>

                  </Form.Row>
               </Form>
               <Modal show={exibirModal} onHide={handleFecharModal}>
                  <Modal.Header closeButton>
                    <Modal.Title>Conversao</Modal.Title>
                  </Modal.Header>  
                  <Modal.Body>
                    {resultadoConversao}
                  </Modal.Body>    
                  <Modal.Footer>
                     <Button variant="dark" onClick={handleFecharModal}>
                       Nova conversao
                     </Button>
                  </Modal.Footer>
               </Modal>
             </Jumbotron> 
         </div>
  )
}
