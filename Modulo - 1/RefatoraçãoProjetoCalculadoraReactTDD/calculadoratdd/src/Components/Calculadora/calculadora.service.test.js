import React from "react";
import { ReactDOM } from "react";
import CalculadoraService from './calculadora.service';

describe('Teste da CalculadoraService', () => {
   
    const [calcular, SUM, SUBTRACTION] = CalculadoraService();

    it('deve darantir que 1 + 4 = 5', () => {
        let sum = calcular(10,4, SUM);
        expect(sum).toEqual(14);
     })

    it('deve garantir que 5 - 3 = 2', () =>{
        let subtraction = calcular(1,4, SUBTRACTION);
        expect(subtraction).toEqual(-3);
     })
    

});

