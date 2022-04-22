import React from "react";
import { ReactDOM } from "react";
import CalculadoraService from './calculadora.service';

describe('Teste da CalculadoraService', () => {
   
    const [calcular, concatenarNumber, SUM, SUBTRACTION, DIVISION, MULTIPLICATION] = CalculadoraService();

    it('deve darantir que 1 + 4 = 5', () => {
        let sum = calcular(10,4, SUM);
        expect(sum).toEqual(14);
     })

    it('deve garantir que 5 - 3 = 2', () =>{
        let subtraction = calcular(1,4, SUBTRACTION);
        expect(subtraction).toEqual(-3);
     })

     it('deve garantir que 10 / 2 = 5', () =>{
         let division = calcular(10,2, DIVISION);
         expect(division).toEqual(5);
     })

     it('deve garantir que 2 x 5 = 10', () =>{
         let multiplication = calcular(2,5, MULTIPLICATION);
         expect(multiplication).toEqual(10);
     })

     it('deve retornar 0 para operação invalida', () =>{
         let operationInvalid = calcular(1,4, '%');
         expect(operationInvalid).toEqual(0);
     })
    

});

