import React from "react";
import { ReactDOM } from "react";
import CalculadoraService from './calculadora.service';

describe('Teste da CalculadoraService', () => {
   
    const [calcular, SUM] = CalculadoraService();

    it('deve Garantir que 1 + 4 = 5', () => {
       let soma = calcular(1,4, SUM);
       expect(soma).toEqual(5);
    })

});

