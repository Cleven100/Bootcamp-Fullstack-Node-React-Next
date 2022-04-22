import React from "react";
import { ReactDOM } from "react";
import { Item } from "react-bootstrap/lib/Breadcrumb";
import CalculadoraService from './calculadora.service';

describe('Teste da CalculadoraService', () => {
   
    const [calcular] = CalculadoraService();

    it('deve Garantir que 1 + 4 = 5', () => {
       let soma = calcular(1,4, '+');
       expect(soma).toEqual(5);
    })

});

